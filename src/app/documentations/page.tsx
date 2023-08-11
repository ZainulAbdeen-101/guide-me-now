
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchDocs } from '../../../sanity/lib/client'
import { Docs } from '@/types'
import { urlForImage } from '../../../sanity/lib/image'

export default async function page() {
const data= await  fetchDocs()

  return (
<>
<h1 className='mt-16 text-center font-font font-bold text-[#1877f2] text-5xl'>
    Documentations
</h1>
<div className='mt-5 gap-10 grid grid-cols-3 justify-center place-items-center'>
    {
        data.map((docs:Docs,index:number)=>(
            <div key={index}>
                <Link href={docs.documentation} target='_blank'>
                    <Image className='mx-auto' src={urlForImage(docs.logo).url()} width={100} height={100} alt='docs' />
                <h6 className='text-center text-[#1877f2] mt-3 text-xl font-font font-bold'>
                    {docs.heading}
                </h6>
                </Link>

            </div>
        ))
    }

</div>
</>
  )
}
