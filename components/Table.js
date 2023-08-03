import Image from "next/image";
import React from "react";


const tableData = [
    {
        id:1, title:"Personal Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },
    {
        id:2, title:"Custom Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },
    {
        id:3, title:"Test Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },{
        id:4, title:"Test Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },{
        id:5, title:"Test Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },{
        id:6, title:"Test Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },{
        id:7, title:"Test Data Vault",desc:"Customer Identity vault consists of perosns, Idet...",
        isActive:true,date:"22/02/22",time:"03.24 PM", members:['MJ',"LK","DK"],success:"48K",failed:"8"
    },

]

const Table = () => {
  return (
    // product table----------------------------------->
<div className="overflow-x-auto flex flex-col gap-2">
      {/* table title-------------------> */}
      <table className="min-w-full text-left">
        <thead className="">
          <tr className="[&>th]:text-[13px] [&>th]:font-semibold [&>th]:text-[#6F767E] border-b [&>th]:px-4">
            <th className="px-3 py-3 w-16  align-top">
              <input type="checkbox" name="" id="" className="h-5 w-5"/>
            </th>
            <th className="text-left w-[298px]">Product</th>
            <th>Status</th>
            <th>Date</th>
            <th>Member</th>
            <th>Success</th>
            <th>Failed</th>
          </tr>
        </thead>

        <tbody className="">
            {tableData.map(data =>
          <tr className="border-b hover:bg-[#EFEFEF] hover:rounded-lg relative mb-1 mt-1 cursor-pointer">
            <td className="px-4 py-3 w-16 align-top">
              <input type="checkbox" name="" id="" className="h-5 w-5" />
            </td>
            <td className="flex w-[268px]">
              <div className="flex gap-[20px] py-3 ">
                <div className="py-7 px-[14px] bg-[#FF819D] text-2xl font-bold uppercase h-20 flex justify-center items-center rounded-lg text-[rgba(27,27,27,0.27)]">
                  pdv
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-[15px] font-bold leading-6 text-[#1A1D1F] [text-wrap:balanced]">
                    {data.title}
                  </h5>
                  <h6 className="text-[13px] text-[#9A9FA5] font-semibold w-[168px]">
                    {data.desc}
                  </h6>
                </div>
              </div>
            </td>
            <td className="align-top py-3 px-4">
              <span className="px-2 bg-[#EAFAE4] text-[#83BF6E] text-[15px] font-semibold">
                {data.isActive && 'Active'}
              </span>
            </td>
            <td className="align-top py-3 px-3">
              <span className="text-[13px] font-semibold text-[#9A9FA5] flex flex-col">
                {data.date} 
                <span>{data.time}</span>
              </span>
            </td>
            <td className="align-top py-3 px-3 text-[11px] font-semibold [&>span]:p-1 -space-x-1 ">
                {data.members?.map((members,idx) => {
                    const bgColor = idx===0? "bg-orange-300":idx===1? "bg-violet-300":"bg-sky-300";
                        return <span className={`${bgColor} rounded-full`}>{members}</span>
                        
                }
                

                )}
              
            </td>
            <td className="align-top py-3 px-3">
                <span className="flex items-center gap-2">
                    <span className="px-[7px] bg-[#EFEFEF] text-[#1A1D1F] rounded-md">48K</span>
                    <span className="w-2 h-3 bg-sky-500 rounded-sm"></span>
                </span>
            </td>
            <td className="align-top py-3 px-3">
                <span className="flex items-center gap-2">
                    <span className="px-[7px] bg-[#EFEFEF] text-[
                        #1A1D1F] rounded-md">8</span>
                        <span className="w-[44px] h-3 bg-[#FF6A55] rounded-sm"></span>
                </span>
            </td>
          </tr>
          )}
          
        </tbody>
      </table>

      <div className="py-3 flex justify-center gap-2">
        <button className="w-full flex justify-end">
          <Image src='/left_arrow.svg' width={24} height={24} className="w-10 h-10 p-2" />
        </button>
        <button className="w-full flex justify-start">
        <Image src='/right_arrow.svg' width={24} height={24} alt="" className="border-2 border-[#EFEFEF] rounded-full w-10 h-10 p-2"/>

        </button>
      </div>
      
    </div>

  );
};

export default Table;
