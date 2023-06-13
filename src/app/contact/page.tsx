import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Contact",
  description: "Contact with Next Blog"
}

const Contact = () => {
  return (
    <div>
      <h1 className='text-[60px] font-bold mb-[50px] text-center'>
        Let's Keep in Touch
      </h1>

      <div className='flex gap-[100px] items-center'>
        <div className='flex-[1] h-[500px] relative'>
          <Image src='/contact.png' alt="" fill className='object-contain animate-[move_3s_infinite_ease_alternate]'/>
        </div>

        <form className='flex-[1] flex flex-col gap-5'>
          <input type="text" placeholder='Name' className='p-5 bg-transparent border'/>
          <input type="text" placeholder='Email' className='p-5 bg-transparent border'/>
          <textarea rows={10} cols={30} placeholder='Message' className='p-5 bg-transparent border'/>
          <Button buttonType="submit" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact