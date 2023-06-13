import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react'
import styles from "./page.module.css";
import { items } from './data';
import { notFound } from 'next/navigation';

interface CategoryProps {
  params: {
    category: "applications" | "illustrations" | "websites";
  };
}

interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
}


const getData = ({ category }: CategoryProps["params"]) => {
  const data: Item[] = items[category]
  console.log(category);

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }: CategoryProps) => {
  const data: Item[] = getData(params);

  return (
    <div>
      <h1 className='font-bold text-3xl text-[#53c28b] capitalize'>{params.category}</h1>

      {data.map(item => (
        <div className={`${styles.item} flex gap-[50px] mt-[50px] mb-[100px]`} key={item.id}>
          <div className='flex-[1] flex flex-col justify-center gap-[20px]'>
            <h1 className='text-[50px] font-bold'>{item.title}</h1>
            <p className='text-[20px]'>{item.desc}</p>
            <Button text='See More' />
          </div>
          <div className='flex-[1] relative w-full h-[500px]'>
            <Image className='object-cover' src={item.image} alt='test' fill />
          </div>
        </div>
      ))}



    </div>
  )
}

export default Category