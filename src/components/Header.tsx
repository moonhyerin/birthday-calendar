import * as React from 'react'
import { BsPatchPlus } from 'react-icons/bs'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'

import { Modal } from '../components/Modal'

import { DataType } from '@app/type'

type PropsType = {
  handleUpdate: (newData: DataType) => void
}

export const Header: React.FC<PropsType> = ({ handleUpdate }: PropsType) => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const handleClick = () => {
    setModalOpen(!modalOpen)
  }

  const handleSubmit = (date: DataType) => {
    handleUpdate(date)
  }

  return (
    <div className='w-full flex flex-row justify-between items-center p-5'>
      <LiaBirthdayCakeSolid data-testid='logo' size='3em' color='#ce0055' />
      <div className='text-2xl font-bold text-[#ce0055]'>My birthday calendar</div>
      <BsPatchPlus data-testid='add' size='2em' className='cursor-pointer' onClick={handleClick} />
      {modalOpen && <Modal setIsOpen={handleClick} handleSubmit={handleSubmit} />}
    </div>
  )
}
