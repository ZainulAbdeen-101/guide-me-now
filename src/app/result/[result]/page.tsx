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
    
    <div className='bg-slate-500 mt-8 h-[100vh] w-[100%]'>

    <div className="flex justify-center pt-10">
            <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white">
              <div className="stat">
                <div className="stat-value"> Course Result</div>
              </div>
            </div> 
            </div>

<div className=' flex justify-center'>

<div className='w-[80%] text-center flex justify-center items-center '>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod vel deleniti ipsa in eum veritatis repudiandae magni vitae! Corrupti modi et omnis optio? Nostrum, aut aliquam minima ea Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corrupti quas et reiciendis ratione placeat nam soluta. Molestias, odit aperiam.</p>

</div>
</div>

{data?.map((items:any,index:number)=>

(<>


<div key={index}>
<strong><i>{items.correct}</i></strong>
<h1>{items.heading}</h1>
<strong><i>{items.marks}</i></strong>
</div>  
</>)

)}
    </div>

    <div className="stats shadow">
  

  
</div>
    <div className="card w-96 bg-slate-300 shadow-xl ">
  <div className="card-body ">

    <h1 className="stat-value text-[28px]">Video Course Details</h1>
    <p></p>
    <div className="card-actions justify-center">
    <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
    
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Course Name</th>
        <td>Flutter</td>
       

      </tr>
      {/* row 2 */}
      <tr>
        <th>Total Videos</th>
        <td>67</td>
     

      </tr>
      {/* row 3 */}
      <tr>
        <th>Watched Videos</th>
        <td>21</td>
        

      </tr>
      {/* row 4 */}
      <tr>
        <th>Percentage</th>
        <td>73%</td>
        

      </tr>
    </tbody>
  </table>
</div>
   
    </div>
  </div>
</div>

    </>
  )
} 
