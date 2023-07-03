import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-around'><Link href={""}>Home</Link>
    <Link href={""}>About</Link>
    <Link href={""}>Catogories</Link>
    <Link href={""}>Documentations</Link>
    <Link href={""}>Contact us</Link></div>
  )
}
