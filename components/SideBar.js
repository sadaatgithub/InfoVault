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
    <aside className={`${burgerOpen? "px-3" : "left-0 -translate-x-full  md:w-[60px]  md:-translate-x-0 md:px-1 lg:px-3"} absolute top-0 bottom-0 z-[1]  lg:w-[268px] lg:static 
    py-6    flex flex-col gap-y-12 bg-[#FCFCFC] transition-all duration-300 ease-in-out`}>
      <Logo />

      <div className={`${burgerOpen? "":"hidden"} relative  lg:hidden z-10`}>
        <button className="absolute -right-12 -top-24 px-3 py-1 grid place-items-center text-3xl border  text-black rounded-full bg-white" onClick={handleBurger}><span>&times;</span></button>
      </div>

      <ul className="w-full flex flex-col lg:gap-y-0 ">
        {menuItems.map((menu) => (
          // 
          <li key={menu.id} className={`${menu.id == 2? "bg-[#EFEFEF] rounded-xl shadow-inner text-[#1A1D1F]":"text-[#6F767E]"} cursor-pointer flex items-center p-3 gap-3`}>
            <div className={`${burgerOpen? "lg:grid place-items-center lg:w-full":""} `}>
              <Image src={menu.icon} width={24} height={24} alt='' className="block"/>
              </div>
            <span className={`${burgerOpen? "":"md:hidden lg:block"}  text-[15px]  leading-[24px] font-semibold duration-200 `}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
