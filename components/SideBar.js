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
    <aside className={`${burgerOpen? "" : "left-0 -translate-x-full  md:w-[60px]  md:-translate-x-0 px-3"} absolute top-0 bottom-0 z-[1]  lg:w-[268px] lg:static 
    py-6 px-3 md:px-2  flex flex-col gap-y-12 bg-[#FCFCFC] transition-all duration-300 ease-in-out`}>
      <Logo />

      <div className={`${burgerOpen? "":"hidden"} relative  lg:hidden z-10`}>
        <button className="absolute -right-14 -top-20 px-3 py-1 grid place-items-center text-3xl bg-blue-400 text-white rounded-xl" onClick={handleBurger}><span>&times;</span></button>
      </div>

      <ul className="w-full flex flex-col md:gap-y-3 lg:gap-y-0 gap-y-2">
        {menuItems.map((menu) => (
          // 
          <li key={menu.id} className={`${menu.id == 2? "bg-[#EFEFEF] rounded-xl shadow-inner text-[#1A1D1F]":"text-[#6F767E]"}  ${burgerOpen? "":""}    cursor-pointer flex items-center`}>
            
            <div className={`${burgerOpen? "lg:grid place-items-center lg:w-full":""} p-2 `}>
              <Image src={menu.icon} width={24} height={24} alt='' className=""/>
              </div>
            <span className={`${burgerOpen? "lg:hidden":"md:hidden lg:block"}  text-[15px] -tracking-[-0.15px] leading-[24px] font-semibold duration-200 `}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
