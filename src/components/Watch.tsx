"use client"

import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { useAuth } from '@clerk/nextjs';
import { urlForImage } from '../../sanity/lib/image';

interface WatchProps {
  heading: string;
  url: string;
}
export default function Watch({ heading,url }: WatchProps) {
 
  console.log(url)
  
  const {userId}=useAuth()  
  async function courseEnrollData (){
    
    const res = await axios.post("/api/playlist",{
      heading : heading,
      userid: userId,
      url : url,
      cpercent:0
      
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
     console.log(res.data)
    

  } 
  
   return (
     <button onClick={courseEnrollData}  className=" justify-end px-4 py-2  rounded-lg bg-[#1877f2] text-white">
             <Link href={`/playlist/${heading}`}>watch playlist</Link>
            </button>
  )
}
