import React from 'react'

const Hamburger = ({handleBurger}) => {
  return (
    <div className='flex flex-col gap-1 p-2 self-start border-2 rounded-md items-center justify-center absolute -right-16 top-16 bg-white ' onClick={handleBurger}>
        <div className="w-4 h-[2px] bg-black"></div>
        <div className="w-4 h-[2px] bg-black"></div>
        <div className="w-4 h-[2px] bg-black"></div>
    </div>
  )
}

export default Hamburger