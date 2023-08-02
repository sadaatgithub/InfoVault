import Image from 'next/image'
import React from 'react'

const TopBar = () => {
  return (
    <div className=' px-10 py-6 flex justify-between bg-[#FCFCFC] shadow-inner shadow-[#F4F4F4 ]'>
        <div className="p-2 bg-[#F4F4F4] rounded-xl flex justify-between">
            <div className="flex gap-3 ">
                <Image src='/search.svg' width={24} height={24} alt='search icon'/>
                <input type="text" placeholder="Search by Vault or Users" className='bg-transparent border-l-2 border-blue-700 text-[#6F767E] font-semibold text-[15px]'/>
            </div>

            <div className="px-3 py-1 bg-white custom_shadow rounded-xl text-[#1A1D1F] font-semibold">⌘ F</div>
        </div>
        <div className="flex gap-6">
            <button className='px-[20px] py-3 rounded-xl bg-[#2460AB] text-white  flex justify-center items-center gap-2 text-[15px] font-bold leading-[24px]'><Image src="/plus.svg" width={24} height={24} alt='create vault' /> Create Vault</button>
            <div className="relative grid place-items-center after:absolute after:content-[''] after:right-0 after:top-[10px] after:w-3 after:h-3 after:bg-[#FF6A55] after:z-[1] after:border-2 after:border-white after:rounded-full">
            <Image src='/message.svg' width={24} height={24} alt='message'/>
            </div>
            <div className="relative grid place-items-center after:absolute after:content-[''] after:right-0 after:top-[10px] after:w-3 after:h-3 after:bg-[#FF6A55] after:z-[1] after:border-2 after:border-white after:rounded-full">
            <Image src='/notification.svg' width={24} height={24} alt='notification'/>
            </div>
            <div className="bg-[#FFBC99] w-12 h-12 rounded-full overflow-hidden">
            <Image src='/avatar.png' width={640} height={420} alt='avatar'/>
            </div>
        </div>
        </div>
  )
}

export default TopBar