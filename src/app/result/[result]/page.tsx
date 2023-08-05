import React from 'react'

interface props {

params : {result:string}
}


export default function page({params}:props) {

  console.log(params.result);

  return (
    <>
    </>
  )
}
