"use client"

import axios from 'axios';
import Link from 'next/link';
import React from 'react'


export default function Watch({heading}:any,url:string) {
 

   const postdata= async ()=>{
try{

  const res=await axios.post('/api/quiz',{
heading:heading,
imageurl:url
  })
  console.log(res.status)
}catch(error){
  console.log(error)
}
     }
  
    
 
   return (
     <button onClick={postdata}  className=" justify-end px-4 py-2  rounded-lg bg-[#1877f2] text-white">
             <Link href={`/playlist/${heading}`}>watch playlist</Link>
            </button>
  )
}
