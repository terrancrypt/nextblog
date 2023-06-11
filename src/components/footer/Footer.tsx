import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[50px] flex items-center justify-between'>
      <div>
        &#169; terrancrypt. All rights reserved.
      </div>
      <div className='flex space-x-3 items-center'>
        <Image className='opacity-60 cursor-pointer hover:opacity-100' src="/1.png" alt='facebook' width={25} height={25} />
        <Image className='opacity-60 cursor-pointer hover:opacity-100' src="/2.png" alt='instagram' width={25} height={25} />
        <Image className='opacity-60 cursor-pointer hover:opacity-100' src="/3.png" alt='twitter' width={25} height={25} />
        <Image className='opacity-60 cursor-pointer hover:opacity-100' src="/4.png" alt='youtube' width={25} height={25} />
      </div>
    </footer>
  )
}

export default Footer