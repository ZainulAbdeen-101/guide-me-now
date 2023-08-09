"use client";
import React from 'react'
import useSWR from 'swr';
import axios from 'axios';


interface props {

params : {result:string}
}


export default function page({params}:props) {



  // console.log(params.result);
  // const headingS =  params.result

  const fetcher = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
        throw error;
      }  
}

const  {data,isLoading,error} = useSWR('/api/quiz',fetcher)

console.log(isLoading);
console.log(data);
console.log(isLoading);


  return (
    <>
    <div></div>

    </>
  )
} 
