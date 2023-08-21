import React from 'react'

import { currentUser} from '@clerk/nextjs'

import Profile from '@/components/Profile'

const   Page=async():Promise<React.JSX.Element>=> {
  const user=await currentUser()
  console.log(user)
   return (
    <>
  <Profile user={user} />
  
    
    </>
  )
}
export default Page

