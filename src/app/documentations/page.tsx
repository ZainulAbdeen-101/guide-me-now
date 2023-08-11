
import React from 'react'
import { fetchDocs } from '../../../sanity/lib/client'
import { Docs } from '@/types'

export default async function page() {
const data= await  fetchDocs()
console.log(data)
  return (
<>

<div className='grid grid-cols-4 place-items-center'>
    {
        data.map((docs:Docs,index:number)=>(
            <div key={index}>
                <h6>
                    {docs.heading}
                </h6>

            </div>
        ))
    }

</div>
</>
  )
}
