import React from 'react'
import Image from 'next/image'
import { currentUser, useUser } from '@clerk/nextjs'
import { BiEdit } from '@/components/Icons'
import Profile from '@/components/Profile'

export default async function page() {
  const user=await currentUser()
  console.log(user)
   return (
    <>
  <Profile user={user} />
  
    
    </>
  )
}
