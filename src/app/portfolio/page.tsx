import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const data = [{
  title: "Illustrations",
  path: "/portfolio/illustrations",
  imgUrl: "/illustration.png"
}, {
  title: "Websites",
  path: "/portfolio/websites", 
  imgUrl: "/websites.jpg"
}, {
  title: "Application",
  path: "/portfolio/applications", 
  imgUrl: "/apps.jpg"
},];

const Portfolio = () => {
  return (
    <div>
      <h1 className='text-[20px] font-semibold my-5'>Choose a gallery</h1>
      <div className='flex gap-[50px]'>
        {data.map((item, index) =>(
          <Link href={item.path} key={index} className="border-[#bbb] border-solid border-4 rounded w-[300px] h-[400px] relative">
            <Image src={item.imgUrl} alt={item.title} className='absolute top-0 right-0 object-cover object-left-top' fill/>
          <span className='absolute right-[10px] bottom-[10px] text-[40px] font-bold hover:text-[#53c28b] transition-all'>{item.title}</span>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio