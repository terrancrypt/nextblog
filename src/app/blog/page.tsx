import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

interface DataBlog {
  userId: number
  id: number,
  title: string,
  body: string
}

const Blog = async () => {
  const data: DataBlog[] = await getData();

  return (
    <>
      {data?.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className='flex gap-[50px] mt-[50px] mb-[100px]'>
            <div className='relative w-[400px] h-[250px]'>
              <Image className='object-cover' src="https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='test' fill />
            </div>
            <div className='flex-[1] flex flex-col justify-center gap-[20px]'>
              <h1 className='text-[40px] font-bold'>{post.title}</h1>
              <p className='text-[20px]'>Desc</p>
            </div>
          </div>
        </Link >
      ))}
    </>
  )
}

export default Blog