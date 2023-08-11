import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
<>
<div className='h-screen mt-36'>



<div className='flex justify-around'>
    <div className='max-w-[500px]'>
    <h1 className='font-font leading-tight text-[#1877f2] text-[60px] font-extrabold'>
        About us
    </h1>
        <h6 className='font-font text-[40px]'>
        Welcome to Guide Me Now!
        </h6>
        <p className='text-lg'>
        At Guide Me Now, we're on a mission to make programming and development learning an exciting and enriching experience for students of all levels. Our platform is designed to empower you on your journey to mastering programming languages and technical skills with unwavering confidence.
        </p>
        <h6 className='font-font font-medium text-2xl'>
            Our Mission
        </h6>
         <p className='text-md font-medium'>
        We believe that learning should be accessible and enjoyable. Our goal is to provide you with the tools and resources you need to succeed in the world of programming.
        </p>
    </div>
    <div>
        <Image src={'/about1.png'} width={570} height={500} alt='' />
    </div>
</div>

</div>

<div className=' h-screen mb-20'>
<section className=" ">
<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg ">
            <h2 className="mb-4 font-font  text-5xl text-[#1877f2] tracking-tight font-extrabold ">What We Offer</h2>
            <h6 className='text-3xl font-bold font-font'>
            Interactive Learning
            </h6>
            <p className="mb-4">Our platform offers a hands-on approach to learning. We've curated a selection of embedded YouTube videos that break down complex concepts, making it easier for you to understand and apply them. Our interactive coding challenges help you put theory into practice, ensuring a well-rounded learning experience.</p>
            <h6 className='text-3xl font-bold font-font'>
            Comprehensive Documentation
            </h6>
            <p className="mb-4">Learning doesn't stop with videos and challenges. We've compiled a wide range of development documentation links that accompany our tutorials. These resources serve as valuable references, enabling you to dive deeper into topics and enhance your skills.</p>  
             <h6 className='text-3xl font-bold font-font'>
             Quiz Playlists
            </h6>
            <p className="mb-4">Test your knowledge with our engaging quiz playlists for various programming languages. Practice what you've learned, track your progress, and boost your confidence in your coding abilities.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image width={350} height={350}  className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <Image  width={350} height={350} className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
    </div>
</section>
</div>

</>

  )
}
