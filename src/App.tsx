import * as React from 'react'

import { MainPage } from '@app/pages/MainPage'
import { Header } from '@app/components/Header'

import { DataType } from '@app/type'

const App: React.FC = ({}) => {
  const [data, setData] = React.useState<DataType[]>([])

  const localData = localStorage.getItem('data')

  React.useEffect(() => {
    if (localData) setData(JSON.parse(localData))
  }, [])

  const handleUpdate = (newData: DataType) => {
    if (localData) {
      const updatedData: DataType[] = [...JSON.parse(localData), newData]

      localStorage.setItem('data', JSON.stringify(updatedData))
      setData(updatedData)
    } else {
      localStorage.setItem('data', JSON.stringify([newData]))
      setData([newData])
    }
  }

  const removeData = (index: number) => {
    const updatedData = data.filter((item, i) => i !== index)

    localStorage.setItem('data', JSON.stringify(updatedData))
    setData(updatedData)
  }

  return (
    <div className='w-full md:w-2/3 lg:w-1/2 h-full m-auto flex flex-col justify-center items-center font-inter'>
      <Header handleUpdate={handleUpdate} />
      <MainPage data={data} removeData={removeData} />
      <footer>
        <div className='py-5'>
          <p className='text-xs font-light text-gray-300'>ⓒ 2023 Hyerin Moon. all rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
