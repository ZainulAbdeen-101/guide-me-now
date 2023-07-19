import React from 'react'
import Image from "next/image";
import webPic from '@/app/queries/images/7118756-3426523.png'



interface props{
   
    prop:string[]|undefined,
    
  }

function WebDevDes(prop?:props) {

    const hello = prop?.prop

  return (

<>

{

hello?.map((itemZ,index)=>{

<div className="card w-96 glass">
  <figure><Image src={webPic} height={400} width={350} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{itemZ?.[index]}</h2>
    <p>Web development is the process of creating websites that people can visit on the internet. It involves designing how the website looks and works using coding languages like HTML, CSS, and JavaScript. 
</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Let's Start with Frontend</button>
    </div>
  </div>
</div>




})


}




</>


  )
}

export default WebDevDes
