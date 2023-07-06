import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div className=' mt-[80px]'>
        <div className='max-w-[370px] ml-5 text-white '>
            <h1 className=' text-[#fed32e] font-semibold  text-[60px] leading-none'>
                Guide <span className='text-white'>Me</span>  Now
            </h1>
            <p className='text-2xl    mt-5 '>
                The Perfect Guide for the future of <span className='text-[#fed32e] font-semibold'>Young Generation</span> 
            </p>
            <p className='mt-5 text-sm  '>Your Ultimate IT Career Navigator Discover your ideal path in the world of technology with our interactive platform, tailored specifically for young students. Explore various IT careers, receive personalized recommendations, and embark on a journey to a successful future in the rapidly evolving IT industry.</p>
            <button className='bg-[#fed32e]  mt-10 text-black font-semibold text-lg px-4 py-2 rounded hover:bg-[black] transition-all duration-300 ease-in-out hover:text-[#fed32e]'>get the ultimate guide now</button>

        </div>
        <div> 
            <Image className='-z-10'  src={"/hero1.png"} fill={true} style={{objectFit:"cover"}} alt='' />
        </div>

    </div>
    
    </>
  )
}
