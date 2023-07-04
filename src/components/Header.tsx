import * as React from 'react'
import { BsPatchPlus } from 'react-icons/bs'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'

import { Modal } from '@app/components/Modal'

import { DataType } from '@app/type'

type PropsType = {
  handleUpdate: (newData: DataType) => void
}

export const Header: React.FC<PropsType> = ({ handleUpdate }: PropsType) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [day, setDay] = React.useState('')
  const [year, setYear] = React.useState('')
  const [showMessage, setShowMessage] = React.useState(false)

  const handleClick = () => {
    setModalOpen(!modalOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    const check: boolean = validateData(Number(month), Number(day))

    if (check) {
      const newData: DataType = {
        name,
        month,
        day,
        year,
      }
      handleUpdate(newData)
      setModalOpen(!modalOpen)
      setShowMessage(false)
    } else {
      setShowMessage(true)
    }
  }

  const validateData = (month: number, day: number) => {
    if (month > 0 && month < 13 && day > 0 && day < 32) return true

    return false
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value)
  }

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
  }

  const isFilled = !!name && !!month && !!day

  return (
    <div className='w-full flex flex-row justify-between items-center p-5'>
      <LiaBirthdayCakeSolid size='3em' color='#ce0055' />
      <BsPatchPlus size='2em' className='cursor-pointer' onClick={handleClick} />
      {modalOpen && (
        <Modal setIsOpen={handleClick}>
          <div className='flex flex-col justify-center items-center bg-white rounded-lg'>
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='font-inter text-2xl font-semibold mb-4 text-gray-900 '>Add new birthday 🎉</h3>
              <div className='space-y-6'>
                <input
                  type='text'
                  autoFocus={true}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Name*'
                  onChange={handleNameChange}
                  onKeyDown={handleKeyDown}
                  required
                />
                <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 flex flex-row justify-between'>
                  <input
                    type='text'
                    className='w-1/3 bg-transparent outline-none'
                    placeholder='MM*'
                    maxLength={2}
                    pattern='\d*'
                    onChange={handleMonthChange}
                    onKeyDown={handleKeyDown}
                    required
                  />
                  <span className='mr-3'>/</span>
                  <input
                    type='text'
                    className='w-1/3 bg-transparent outline-none'
                    placeholder='DD*'
                    maxLength={2}
                    pattern='\d*'
                    onChange={handleDayChange}
                    onKeyDown={handleKeyDown}
                    required
                  />
                  <span className='mr-3'>/</span>
                  <input
                    type='text'
                    className='w-1/3 bg-transparent outline-none'
                    placeholder='YYYY'
                    maxLength={4}
                    onChange={handleYearChange}
                    pattern='\d*'
                    onKeyDown={handleKeyDown}
                  />
                </div>
                {showMessage && (
                  <div className='flex justify-between'>
                    <div className='flex items-start'>
                      <label className='ml-2 text-sm font-medium text-[#ce0055]'>The date is invalid.</label>
                    </div>
                  </div>
                )}
                <button
                  className='w-full text-white disabled:bg-[#ce0055]/[.5] bg-[#ce0055] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={handleSubmit}
                  disabled={!isFilled}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
