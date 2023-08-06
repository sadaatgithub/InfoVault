import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Hamburger from './Hamburger'

const TopBar = ({handleBurger}) => {


  return (
    <div className='md:ml-12 lg:ml-0 px-4 lg:px-10 py-6 grid md:grid-cols-2 grid-cols-1  bg-[#FCFCFC] shadow-inner shadow-[#F4F4F4 ]  gap-y-4 flex-wrap'>
       
        <div className="flex gap-2  items-center  w-full lg:w-auto">
        <div className="lg:hidden"> <Hamburger handleBurger={handleBurger}/></div>

            <div className="p-2 bg-[#F4F4F4] rounded-xl flex justify-between w-full md:max-w-[360px] h-12">
                <div className="flex gap-[2px]">
                    <div className="flex gap-3 items-center">
                    <Image src='/search.svg' width={24} height={24} alt='search icon'/>
                    <div className="h-[20px] w-[2px] bg-[#2A85FF] rounded-sm"></div>
                    </div>
                    <input type="text" placeholder="Search by Vault or Users" className='bg-transparent   border-blue-700 text-[#6F767E] font-semibold text-[15px]  md:w-[170px] lg:w-auto'/>
                </div>

                <div className=" px-3 py-1 bg-white custom_shadow rounded-xl text-[#1A1D1F] font-semibold ">⌘ F</div>
            </div>
        </div>


        <div className="lg:ml-auto  flex gap-6 justify-center items-center  w-full  lg:w-auto ">

            
            <button className='lg:ml-auto md:px-[20px] px-3 py-3 rounded-xl bg-[#2460AB] text-white  flex justify-center items-center md:gap-2 gap-[2px] text-[15px] font-bold leading-[24px]'><Image src="/plus.svg" width={24} height={24} alt='create vault' /> Create Vault</button>
            <div className="relative ml-auto md:ml-0 grid place-items-center after:absolute after:content-[''] after:right-0 after:top-0 after:w-3 after:h-3 after:bg-[#FF6A55]  after:border-2 after:border-white after:rounded-full">
            <Image src='/message.svg' width={24} height={24} alt='message'/>
            </div>
            <div className="relative grid place-items-center after:absolute after:content-[''] after:right-0 after:top-0 after:w-3 after:h-3 after:bg-[#FF6A55]  after:border-2 after:border-white after:rounded-full">
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