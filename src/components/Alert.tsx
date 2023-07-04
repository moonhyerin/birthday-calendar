import React from 'react'
import Confetti from 'react-confetti'
import { GrClose } from 'react-icons/gr'

import { DataType } from '@app/type'

type PropsType = {
  date: DataType
  indexOfAlert: number
  onClose: (index: number) => void
}

export const Alert: React.FC<PropsType> = ({ date, indexOfAlert, onClose }: PropsType) => {
  return (
    <div className='w-full rounded-md p-3 border bg-[#faf0f4] border-[#facfe0] mb-2'>
      <Confetti className='w-full h-full' numberOfPieces={100} />
      <div className='flex flex-row justify-between items-center mb-3 font-semibold'>
        <div>Today is {date.name}'s birthday!</div>
        <GrClose className='cursor-pointer' onClick={() => onClose(indexOfAlert)} />
      </div>
      <div className='text-sm text-slate-400'>
        Birthdays are a perfect opportunity to show appreciation and make someone feel loved and cherished. A heartfelt
        message can brighten their day, bring a smile to their face, and remind them of the special place they hold in
        your heart.
        <br />
        Small effort from you can have a big impact on someone's special day. Let's spread joy, create happiness, and
        make birthdays even more special!❤️
      </div>
    </div>
  )
}
