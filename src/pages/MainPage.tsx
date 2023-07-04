import * as React from 'react'
import { differenceInYears, differenceInDays, getYear, isBefore, isToday, format } from 'date-fns'
import { BiTrash } from 'react-icons/bi'

import { Alert } from '../components/Alert'

import { DataType } from '@app/type'

type PropsType = {
  data: DataType[]
  removeData: (index: number) => void
}

export const MainPage: React.FC<PropsType> = ({ data, removeData }: PropsType) => {
  const [todaysAlert, setTodaysAlert] = React.useState<DataType[]>([])

  React.useEffect(() => {
    setTodaysAlert([])
    data.map((date) => {
      const isTodayBirthday = isToday(new Date(getYear(new Date()), Number(date.month) - 1, Number(date.day)))
      if (isTodayBirthday) {
        setTodaysAlert((prevData) => [...prevData, date])
      }
    })
  }, [data])

  const renderName = (friend: DataType) => {
    let phrase
    if (friend.year) {
      const gap = differenceInYears(new Date(), new Date(Number(friend.year), Number(friend.month), Number(friend.day)))
      const ordinal = calculateOrdinalSuffix(gap)

      phrase = `${friend.name} (${ordinal})`
    } else {
      phrase = `${friend.name}`
    }

    return phrase
  }

  const renderBirthday = (friend: DataType) => {
    return format(new Date(getYear(new Date()), Number(friend.month) - 1, Number(friend.day)), 'PPP') //=> 'Nov'
  }

  const calcNextBirthday = (friend: DataType) => {
    const isBeforeDate = isBefore(
      new Date(getYear(new Date()), Number(friend.month) - 1, Number(friend.day)),
      new Date(),
    )
    const year = isBeforeDate ? getYear(new Date()) + 1 : getYear(new Date())

    return differenceInDays(new Date(year, Number(friend.month) - 1, Number(friend.day)), new Date()) + 1
  }

  const sortByNextBirthday = (a: DataType, b: DataType) => calcNextBirthday(a) - calcNextBirthday(b)

  const renderTodayAlert = () => {
    return todaysAlert.map((date, i) => <Alert key={i} date={date} indexOfAlert={i} onClose={handleRemoveAlert} />)
  }

  const handleRemoveAlert = (index: number) => {
    setTodaysAlert(todaysAlert.filter((item, i) => i !== index))
  }

  return (
    <div className='w-full h-full flex flex-col items-center p-5'>
      {renderTodayAlert()}
      {data.sort(sortByNextBirthday).map((friend, i) => (
        <div
          data-testid='birthday-element'
          key={friend.name}
          className='flex flex-col w-full rounded-md my-1 p-2 border bg-[#f7f7f7] border-[#e3e3e3] font-inter'
        >
          <div className='flex flex-row justify-between items-center mb-2'>
            <div className='font-inter font-medium'>{renderName(friend)}</div>
            <div className='text-xs'>D-{calcNextBirthday(friend)}</div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-xs tracking-wide'>{renderBirthday(friend)}</div>
            <div>
              <BiTrash className='cursor-pointer' onClick={() => removeData(i)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function calculateOrdinalSuffix(i: number) {
  var j = i % 10,
    k = i % 100
  if (j == 1 && k != 11) {
    return i + 'st'
  }
  if (j == 2 && k != 12) {
    return i + 'nd'
  }
  if (j == 3 && k != 13) {
    return i + 'rd'
  }
  return i + 'th'
}
