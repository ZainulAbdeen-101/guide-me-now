import React from 'react'

import { currentUser} from '@clerk/nextjs'

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
