"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BiEdit } from './Icons'
import { useGlobalContext } from '@/Context/Store'
export default function Profile({user}:any) {
  const {data}=useGlobalContext()
    const [edit,setedit]=useState(true)
    function changeedit(){
        setedit((prev)=>!prev)
    }
  return (
    <>
    
    <div className='mb-20 w-[300px] shadow-lg   mt-20'>



<div className=''>

    <Image className='rounded-full' src={`${user?.profileImageUrl}`} width={100} height={200} alt='' /> 
</div>
    <h6 className='text-2xl font-font font-bold'>{user?.firstName}</h6>
    <h6 className='text-gray-500 '>@{user?.username}</h6>
    <h6 className='text-base font-medium'>{user?.emailAddresses[0].emailAddress}</h6>
    <hr />


<div className='flex justify-between items-baseline mt-5'>

     <h6 className=' text-2xl font-semibold font-font '>
      About
    </h6>
    <BiEdit onClick={changeedit} className='cursor-pointer' size={20} />
</div>
    <textarea disabled={edit}  placeholder="Tell us About yourself" className="mt-3 textarea textarea-bordered textarea-md w-[85%] max-w-xs"  ></textarea>
    <h6 className='mt-5  text-2xl font-semibold font-font '>
      Education
    </h6>
    <select disabled={edit} className="mt-5 mb-5 select select-bordered w-[85%] max-w-xs">
  <option disabled selected>choose one
  </option>
  <option>Middle</option>
  <option>Matriculation</option>
  <option>Intermediate</option>
  <option>Bachleor's</option>

</select>

<h6 className='mt-5  text-2xl font-semibold font-font '>
      Communication Skills
    </h6>
    <select disabled={edit} className="mt-5 mb-5 select select-bordered w-[85%] max-w-xs">
  <option disabled selected>choose one
  </option>
  <option>Beginner</option>
  <option>Elementary</option>
  <option>Fluent</option>
  <option>Expert</option>


</select>

    </div>
    <div>
    {data.map((h,index)=>(
      <div key={index}>
        {h.heading}

      </div>
    ))}
    </div>
    </>
  )
}
