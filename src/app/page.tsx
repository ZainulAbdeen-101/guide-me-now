import { Hero, Navbar } from '@/components/Comp'
import Link from 'next/link'
 import React from 'react';

 


export default async function page() {
  const d="frontend-basic"

// const hello = await fetchData()

// console.log(hello)

  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}
