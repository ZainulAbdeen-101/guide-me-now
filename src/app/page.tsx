
import { Hero } from "@/components/Comp";  




import React from "react";




export default async  function page() {
try{


  const res=await fetch("http://localhost:3000/api/quiz",{
    method:"GET"
  })
  
   const data=await res.json()
   console.log(data)
}catch(error){
  console.log(error)
}
// sdfdf 





   return (
    <>
      <Hero />
  
    </>
  );
}
