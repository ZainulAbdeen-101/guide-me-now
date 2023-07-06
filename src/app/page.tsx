import { Hero, Navbar } from '@/components/Comp'
import Link from 'next/link'
 import React from 'react'



export default function page() {
  const d="frontend-basic"
  return (
    <>
    <Navbar />
    <Hero />
    <button><Link href={`/data/${d}`}>basic</Link></button>
  
    
    </>
  )
}
