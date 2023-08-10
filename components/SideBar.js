'use client';
import React, { useContext } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { burgerContext } from "@/context/burgerContext";

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "#",
    icon: "/home.svg",
  },
  {
    id: 2,
    title: "Vault Management",
    link: "#",
    icon: "/vault.svg",
  },
  {
    id: 3,
    title: "Search",
    link: "#",
    icon: "/search.svg",
  },
  {
    id: 4,
    title: "Audit Management",
    link: "#",
    icon: "/audit.svg",
  },
  {
    id: 5,
    title: "User Management",
    link: "#",
    icon: "/profile.svg",
  },
  {
    id: 6,
    title: "Setting",
    link: "#",
    icon: "/setting.svg",
  },
];
const SideBar = () => {
  const {burgerOpen,handleBurger} = useContext(burgerContext)


  return (
    <aside className={`${burgerOpen? "px-2" : "left-0 -translate-x-full  md:w-[60px]  md:-translate-x-0 md:px-1 xl:px-6"} absolute top-0 bottom-0 z-[1] lg:w-[268px] lg:static 
    py-6    flex flex-col gap-y-6 bg-[#FCFCFC] transition-all duration-300 ease-in-out`}>
      <Logo />

      <div className={` relative  z-10`}>
        <button className={`${burgerOpen? "":"hidden"} absolute -right-12 -top-20 px-3 py-1 grid place-items-center text-xl bg-white text-gray-700 rounded-full border shadow-md font-bold`} onClick={handleBurger}><span>X</span></button>
      </div>

      <ul className="w-full flex flex-col ">
        {menuItems.map((menu) => (
          // 
          <li key={menu.id} className={`${menu.id == 2? "bg-[#EFEFEF] rounded-xl shadow_btn text-[#1A1D1F]":"text-[#6F767E]"}  ${burgerOpen? "":""} p-3 cursor-pointer flex items-center  gap-3`}>
            
            <div className={`${burgerOpen? "lg:grid place-items-center lg:w-full":""} `}>
              <Image src={menu.icon} width={24} height={24} alt='' className="block min-w-6 min-h-6"/>
              </div>
             
              <span className={`${burgerOpen? "lg:hidden":"md:hidden lg:block"}  text-[15px] -tracking-[0.15px] leading-[24px] font-semibold duration-200 overflow-hidden `}>{menu.title}</span>
              {/* <div className="grid [grid-template-columns:0fr] ">
            <span className={`${burgerOpen? "":""}  text-[15px] -tracking-[0.15px] leading-[24px] font-semibold duration-200 overflow-hidden`}>{menu.title}</span>
            </div> */}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;


