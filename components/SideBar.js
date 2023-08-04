'use client';
import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Hamburger from "./Hamburger";

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
const SideBar = ({isOpen,handleBurger}) => {
  // const [isOpen,setIsaOpen] = useState(false)


  return (
    <aside className={`${isOpen? "translate-x-0 ":"-translate-x-full   "} absolute top-0 bottom-0 left-0 md:min-w-[60px]  lg:w-[268px] md:translate-x-0   z-[1]  md:static 
    lg:py-6 lg:px-3 p-2 flex flex-col gap-y-12 bg-[#FCFCFC] transition-all duration-300 ease-in-out`}>
      <Logo />

      <div className={`${isOpen? "block":"hidden"} relative  md:hidden `}>
        <button className="absolute -right-16 -top-20 p-2 bg-blue-400 text-white rounded-xl" onClick={handleBurger}>Close</button>
      </div>

      <ul className="w-full flex flex-col md:gap-y-3 lg:gap-y-0 ">
        {menuItems.map((menu) => (
          // 
          <li key={menu.id} className={`${menu.id == 2? "bg-[#EFEFEF] rounded-xl shadow-inner text-[#1A1D1F]":"text-[#6F767E]"} lg:p-3 p-2 flex gap-3 cursor-pointer`}>
            <Image src={menu.icon} width={24} height={24} alt=''/>
            <span className={`md:hidden lg:block text-[15px] -tracking-[-0.15px] leading-[24px] font-semibold `}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
