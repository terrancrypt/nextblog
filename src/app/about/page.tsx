import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='w-full h-[300px] relative'>
        <Image className='object-cover grayscale' src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill />
        <div className='absolute bottom-[20px] left-[20px] bg-[#194c33] text-white p-1 font-bold'>
          <h1 className='text-3xl mb-2'>Digital Storytellers</h1>
          <p className='text-2xl'>Handcrafting award winning digital experiences.</p>
        </div>
      </div>

      <div className='flex gap-[100px] my-12 text-justify'>
        <div className='flex-[1] flex flex-col gap-[30px]'>
          <h2 className='title__h2'>Who Are We?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis voluptatum vitae molestias dolore, ullam dicta minima nulla! Quos provident deleniti a accusamus, mollitia consequuntur, dignissimos aliquam beatae molestiae dolorum sunt velit atque iure delectus tempore vel, hic quam obcaecati! Perspiciatis, modi? Esse harum quia expedita velit! Fugit, cum tenetur? </p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio porro molestias accusantium incidunt ut aperiam cupiditate cumque assumenda autem fugiat voluptatem voluptate vitae, nisi, saepe tenetur inventore dicta sequi!</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cumque veniam doloremque commodi quis eveniet quaerat voluptate cupiditate distinctio enim?
          </p>

        </div>

        <div className='flex-[1] flex flex-col gap-[30px]'>
          <h2 className='title__h2'>What We Do?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque facere sequi saepe minus optio totam quidem quod veniam aliquam repudiandae, iure architecto quia perspiciatis tempore incidunt doloribus voluptates dignissimos? Consequuntur corrupti harum cumque deleniti, nesciunt officiis voluptatum ab expedita. </p>
          <ul className='list-disc'>
            <li>
              <p>Creative Illustrations</p>
            </li>
            <li>
              <p>Dynamic Websites</p>
            </li>
            <li>
              <p>Fast and Handy Mobile Apps</p>
            </li>
          </ul>


          <Button text='Contact' url='/contact' />


        </div>


      </div>
    </div>
  )
}

export default About