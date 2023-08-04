import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-40 md:w-auto lg:w-40 h-9 hidden md:flex  md:justify-center lg:justify-normal mt-0 md:mt-5 lg:mt-0'>
        <Image src="/logo_icon.png" width={35} height={35} alt='logo'/>
        <Image src="/logo_name.png" width={200} height={100} alt='logo' className='md:hidden lg:block'/>
    </div>
  )
}

export default Logo