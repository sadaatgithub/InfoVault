import Image from 'next/image'
import React from 'react'
import plus from "../public/plus.svg"
import Table from './Table'

const Dashboard = () => {
  return (
    <main className='flex flex-col gap-8 bg-white rounded-lg '>
        {/* sticky title--------------------------------> */}
        <div className="p-3 flex justify-between">
            <div className="flex gap-6 items-center">
                <div className="flex gap-4">
                    <div className="w-4 h-8 bg-[#CABDFF] rounded-[4px]"></div>
                    <h6 className='text-[20px] font-semibold leading-[32px] text-[#1A1D1F]'>Vaults</h6>
                </div>

                <div className="flex gap-3 bg-[#F4F4F4] p-2 rounded-xl">
                    <Image src='/search.svg' width={24} height={24} alt='search Product'/>
                
                    <input type="text"  placeholder='Search Product' className='bg-transparent border-l-2 border-blue-700 text-[#6F767E] font-semibold text-[15px]'/>
                </div>

            </div>

            <button className='px-4 py-2 flex justify-center items-center bg-[#FCFCFC] rounded-xl border-2 border-[#EFEFEF]'>
                <Image src='/plus_blue.svg' width={24} height={24} alt='' className='text-[#2460AB]'/>
                <span className='text-[13px] font-bold text-[#2460AB]'>Create Vault</span>
            </button>

        </div>
            <Table/>
        </main>
  )
}

export default Dashboard