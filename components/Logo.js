'use client'
import { burgerContext } from '@/context/burgerContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const Logo = () => {
  const {burgerOpen,handleBurger} = useContext(burgerContext)

  return (
    <div className={`${burgerOpen? "md:w-30 justify-center":"lg:w-40"}   h-9 flex `}>
        <Image src="/logo_icon.png" width={35} height={35} alt='logo'/>
        <Image src="/logo_name.png" width={200} height={150} alt='logo' className={`${burgerOpen? "md:block lg:hidden":"md:hidden lg:block"}`}/>
    </div>
  )
}

export default Logo