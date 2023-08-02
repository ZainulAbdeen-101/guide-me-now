"use client"
import { useGlobalContext } from '@/Context/Store';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function Watch({heading}:any) {
    const { data,setData } = useGlobalContext();


    useEffect(() => {
        console.log(data);
    });
    
      const handleButtonClick = () => {
        setData((prevData) => [...prevData, { heading: heading }]);
      };
    

 
   return (
     <button  onClick={handleButtonClick} className=" justify-end px-4 py-2  rounded-lg bg-[#1877f2] text-white">
             <Link href={`/playlist/${heading}`}>watch playlist</Link>
            </button>
  )
}
