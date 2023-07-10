import { Hero, Navbar } from '@/components/Comp'
import Link from 'next/link'
 import React from 'react';

 


export default async function page() {
  const d="frontend-intermediate"

// const hello = await fetchData()

// console.log(hello)

  return (
    <>
    <Navbar />
    <Hero />
    {/* <button><Link href={`/data/${d}`}>basic</Link></button> */}
        <Link href={`/content/${d}`}>Click me</Link>
    </>
  )
}
