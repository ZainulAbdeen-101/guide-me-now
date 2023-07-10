"use client";
import React from 'react';
import {fetchData} from '../../../../sanity/lib/client'
import { Image } from 'sanity';


interface resType{
  

    heading:string ,
    description:string,
    logo:Image,
    catogories:string,
    vtitle:string,
    video:string,
    documentation:string
}

interface props{

params:{info:string}

}



export default async function page({params}:props) {
 
  const categories = params.info

 const data:resType[] = await fetchData(categories) ;

 console.log(data)
 
  return (
 <>


 </>
  )
}
