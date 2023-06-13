'use client';

import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'


const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //         cache: "no-store"
  //       })
  //       const jsonData = await res.json()
  //       setData(jsonData);
  //     } catch (error) {
  //       setErr(true)
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getData();
  // }, []);

  const fetcher: typeof fetch = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  

 console.log(data);

  return (
    <div>hello!</div>
  )
}

export default Dashboard