import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex gap-16 mt-5  justify-center text-white'><Link className='transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold' href={""}>Home</Link>
    <Link className='transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold' href={""}>About</Link>
    <Link className='transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold' href={""}>Catogories</Link>
    <Link className='transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold' href={""}>Documentations</Link>
    <Link className='transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold' href={""}>Contact us</Link></div>
  )
}
