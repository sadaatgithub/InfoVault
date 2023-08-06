'use client'
import { burgerContext } from '@/context/burgerContext'
import React,{useContext} from 'react'

const Hamburger = () => {
  const {handleBurger} = useContext(burgerContext)
  return (
    <div className='flex flex-col gap-1 p-3 self-start border-2 rounded-md items-center justify-center  bg-white ' onClick={handleBurger}>
        <div className="w-4 h-[2px] bg-black"></div>
        <div className="w-4 h-[2px] bg-black"></div>
        <div className="w-4 h-[2px] bg-black"></div>
    </div>
  )
}

export default Hamburger