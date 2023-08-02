import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-40 h-[37px]'>
        <Image src="/logo.png" width={502} height={108} alt='logo'/>
    </div>
  )
}

export default Logo