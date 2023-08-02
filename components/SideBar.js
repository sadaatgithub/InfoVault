import React from "react";
import Logo from "./Logo";
import Image from "next/image";

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
  return (
    <aside className="w-[268px] p-3 flex flex-col gap-y-12 bg-[#FCFCFC]">
      <Logo />
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id} className="p-3 flex gap-3  ">
            <Image src={menu.icon} width={24} height={24} alt=''/>
            <span className='text-[15px] -tracking-[-0.15px] leading-[24px] font-semibold text-[#6F767E]'>{menu.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
