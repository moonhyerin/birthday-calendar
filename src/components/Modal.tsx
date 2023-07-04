import * as React from 'react'
import { GrClose } from 'react-icons/gr'

type PropsType = {
  setIsOpen: () => void
  children: React.ReactNode
}

export const Modal: React.FC<PropsType> = ({ setIsOpen, children }: PropsType) => {
  return (
    <div className='fixed z-50 inset-0'>
      <div className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 z-10'>
        <div className='fixed top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-base text-slate-900'>
          <div className='flex justify-end'>
            <GrClose className='cursor-pointer' onClick={setIsOpen} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
