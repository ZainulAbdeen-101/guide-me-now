import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div className='flex justify-around mt-[100px]'>
        <div className='max-w-[550px] '>
            <h1 className='text-[#0165e1]  text-[70px] leading-none underline decoration-2 underline-offset-8 decoration-[#0165e1]'>
                Guide <span className=''>Me</span>  Now
            </h1>
            <p className='text-2xl   mt-5 '>
                The Perfect Guide for the future of Young Generation
            </p>
            <p className='mt-5 font-light'>"Guide Me Now: Your Ultimate IT Career Navigator - Discover your ideal path in the world of technology with our interactive platform, tailored specifically for young students. Explore various IT careers, receive personalized recommendations, and embark on a journey to a successful future in the rapidly evolving IT industry."</p>
            <button className='bg-black mt-5 text-[#fed32e] font-semibold text-lg px-4 py-2 rounded'>get the ultimate guide now</button>

        </div>
        <div>
            <Image src={"/hero.png"} width={500} height={500} alt='' />
        </div>

    </div>
    
    </>
  )
}
