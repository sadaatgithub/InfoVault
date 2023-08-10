'use client'
import { burgerContext } from '@/context/burgerContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const Logo = () => {
  const {burgerOpen} = useContext(burgerContext)

  return (
    <div className={`${burgerOpen? "":" md:justify-center "}   h-[37px] flex items-center`}>
        <Image src="/logo_icon.png" width={502} height={108} alt='logo' className='w-8 h-7 self-center object-contain'/>
        <Image src="/logo_name.png" width={200} height={150} alt='logo' className={`${burgerOpen? "md:block lg:hidden":"md:hidden lg:block"} h-9 object-left object-contain `}/>
    </div>
  )
}

export default Logo