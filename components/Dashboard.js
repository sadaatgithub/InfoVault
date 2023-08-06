import Image from 'next/image'
import React from 'react'
import plus from "../public/plus.svg"
import Table from './Table'

const Dashboard = () => {
  return (
    <main className='flex flex-col gap-8   w-full  overflow-hidden md:pl-14 lg:pl-0'>
        <div className="bg-white rounded-lg p-3">
        {/* sticky title--------------------------------> */}
        <div className="flex p-3  justify-between w-full flex-wrap-reverse gap-4">
            <div className="flex gap-6 items-center ">
                <div className="flex gap-4">
                    <div className="w-4 h-8 bg-[#CABDFF] rounded-[4px]"></div>
                    <h6 className='text-[20px] font-semibold leading-[32px] text-[#1A1D1F]'>Vaults</h6>
                </div>

                <div className="flex gap-[2px] bg-[#F4F4F4] p-1 rounded-xl md:w-[360px] w-auto">
                    <div className="flex gap-3 items-center">
                    <Image src='/search.svg' width={24} height={24} alt='search Product'/>
                        <div className="h-[20px] w-[2px] bg-[#2A85FF] rounded-sm"></div>

                    </div>
                
                    <input type="text"  placeholder='Search Product' className='bg-transparent  text-[#6F767E] font-semibold text-[15px]  w-[170px] p-1 sm:w-auto'/>
                </div>

            </div>

            <button className='px-4 py-2 flex justify-center items-center bg-[#FCFCFC] rounded-xl border-2 border-[#EFEFEF] gap-2 w-full sm:w-auto'>
                <Image src='/plus_blue.svg' width={24} height={24} alt='' className='text-[#2460AB]'/>
                <span className='text-[13px] font-bold text-[#2460AB]'>Create Vault</span>
            </button>

        </div>
        <Table/>
        </div>
        </main>
  )
}

export default Dashboard