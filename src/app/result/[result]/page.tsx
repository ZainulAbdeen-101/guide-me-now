"use client";
import React from 'react'
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image'


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




//   return (
//     <>
    
//     <div className=' bg-gradient-to-t from-[#1877F2] to-[#0B5FCC] mt-8 h-[90vh] w-[100%]'>

//     <div className="flex justify-center pt-10">
//             <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white">
//               <div className="stat">
//                 <div className="stat-value">{data.heading} Course Result</div>
//               </div>
//             </div> 
//             </div>

// <div className=' flex justify-center mt-5'>

// <div className='w-[80%] text-center flex justify-center items-center '>

// </div>
// </div>




// <div className='flex  flex-row justify-center'>



// <div className="hero  bg-base-200 w-[100%] flex flex-row justify-around">

// <div className="stats shadow">
// <div className="card w-96 shadow-2xl ">
// <div className="card-body ">

// <h1 className="stat-value text-[28px]">Video Course Details</h1>
// <p></p>
// <div className="card-actions justify-center">

// <div className="overflow-x-auto">
// <table className="table ">
// {/* head */}
// <thead>
//   <tr>
//     <th>Title</th>
//     <th>Description</th>

//   </tr>
// </thead>
// <tbody>
//   {/* row 1 */}
//   <tr>
//     <th>Course Name</th>
//     <td>HTML</td>
   

//   </tr>
//   {/* row 2 */}
//   <tr>
//     <th>Total Videos</th>
//     <td>67</td>
 

//   </tr>
//   {/* row 3 */}
//   <tr>
//     <th>Watched Videos</th>
//     <td>21</td>
    

//   </tr>
//   {/* row 4 */}
//   <tr>
//     <th>Percentage</th>
//     <td>73%</td>
    

//   </tr>
// </tbody>
// </table>
// </div>

// </div>
// </div>
// </div>
// </div>


// <div className="hero-content flex-col ">
// <Image src={'/html.png'} width={200} height={300} alt='' className="max-w-sm rounded-lg shadow-2xl" ></Image>
// <div className='stat'><div className="stat-value text-2xl">Overall Percentage 86%</div></div>
// </div>
// <div>
//   <div className="stats shadow">
// <div className="card w-96 shadow-2xl ">
// <div className="card-body ">

// <h1 className="stat-value text-[28px]">Quiz Details</h1>
// <p></p>
// <div className="card-actions justify-center">

// <div className="overflow-x-auto">
// <table className="table ">
// {/* head */}
// <thead>
//   <tr>
//     <th>Title</th>
//     <th>Description</th>

//   </tr>
// </thead>
// <tbody>
//   {/* row 1 */}
//   <tr>
//     <th>Quiz Name</th>
//     <td>HTML</td>
   

//   </tr>
//   {/* row 2 */}
//   <tr>
//     <th>Total Marks</th>
//     <td>85</td>
 

//   </tr>
//   {/* row 3 */}
//   <tr>
//     <th>Correct Answer</th>
//     <td>13</td>
    

//   </tr>
//   {/* row 4 */}
//   <tr>
//     <th>Incorrect Answer</th>
//     <td>4</td>
    

//   </tr>
//   {/* row 5 */}
//   <tr>
//     <th>Percentage</th>
//     <td>33%</td>
    

//   </tr>
// </tbody>
// </table>
// </div>

// </div>
// </div>
// </div>
// </div>

// </div>
// </div>


// </div>




// {/* {data?.map((items:any,index:number)=>

// (<>


// <div key={index}>
// <strong><i>{items.correct}</i></strong>
// <h1>{items.heading}</h1>
// <strong><i>{items.marks}</i></strong>
// </div>  
// </>)

// )} */}



// <div className='w-[100%] h-[120px] bg-white flex justify-center pt-4 gap-4 mb-5'>

// <button className="btn btn-wide  bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Restart Course</button>
// <button className="btn-wide btn bg-gradient-to-br from-green-300 via-ggreen-500 to-green-600 text-black   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" disabled={false}>Get Certificate</button>

// </div>
//     </div>





//     h

//     </>
//   )
} 
