"use client";
import React , {useState} from 'react';
// import { data } from '../../../sanity/frontend_basic'
import Image from 'next/image';
// import {frontend_basic_quiz} from './quizData';
import {getQuizData_current} from '../quizData' 

// I create a Interface and tell him that options ka array aayega aur hr index 
// pe object hoga aur os mein is tarha ki hierarchy hogi......


// itnterface se destructuring bhi horhi he dekh rahe ho Ustaad ! 


interface quiz{
question : string,
options:{
id:number,
ans:string,
isCorrect:boolean
}[]

}
// #00c6ff
// → 
// #0072ff

interface props{

params : {quiz:string} 

}


 export default  function Page({params}:props) {
  


const head = params.quiz
console.log(head);

  const [mark,setMark] = useState(0);
  const [showResult,setShowResult] = useState(false);
  const [count,setCount] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0);
 

  // const [currentQuiz,setCurrentQuiz] = useState() 
  

  const FB_Quiz:quiz[] | undefined = getQuizData_current(head);


  function myFunc(isCorrect:boolean){

      console.log(isCorrect)


if(isCorrect){

  setMark(mark+1)
}
    if(currentIndex+1 < 17 ){
      
      setCurrentIndex(currentIndex+1);
     } else
      {
      setShowResult(true)
      }
  }

 
function Reset(){
  setCurrentIndex(0);
  setMark(0)
  setShowResult(false)
  setCount(0);
}

  const marks = (mark/17*100).toFixed(0)
  return (

    <>

<div className='flex justify-center my-[50px] bg-gradient-to-t from-[#1877F2] to-[#0B5FCC]'>

{/* <Image src={'/quizBG3.jpg'} className='-z-10 ' alt='' fill={true}  /> */}


{/*  bg-[#fde047]  */}


{/* Result  */}
{showResult ?(

<section className="bg-white bg-gradient-to-t from-[#1877F2] to-[#0B5FCC] ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

        <h3 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Total Marks: {marks} out of 100</h3>
        <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 text-white">Congratulations! You have successfully completed the <span className='stat-title text-[#fed32e]'>{head} Quiz</span>. Well done! 🎉 Keep up the great work and continue to challenge yourself with more quizzes"</p>
        <div className='flex justify-center'>
        <ul className="menu  bg-white h-[220px] w-[450px] rounded-box shadow-2xl backdrop-filter bg-white/100 backdrop-blur-xl">
  <li>
    <h2 className="font-bold text-xl">Quiz Details</h2>
    <ul className='mt-[20px] py-1 px-5'>
      <li><a  className='text-lg'>Total Time : <span className='font-bold'>{count}</span></a></li>
      <li><a className='text-[#31C48D] text-lg '>Total Correct Answers: <span className='font-bold'>{mark}</span></a></li>
      <li><a className='text-[#E02424] text-lg'>Total Incorrect Answers: <span className='font-bold'>{(17)-mark}</span></a></li>
    </ul>
  </li>
</ul>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-5">
           
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border-[#fed32e] border-[3px] hover:bg-[#fed32e]  
        focus:ring-4 focus:ring-gray-100 hover:text-black bg- dark:text-white  text-black dark:focus:ring-white" onClick={Reset}>
                Restart
            </a> 
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#fed32e] hover:bg-white focus:ring-4 focus:ring-[#fed32e]  dark:focus:ring-[#fed32e] ">
                Check Result
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>


// {/* Result  */}
):(


<div className="card w-[80%] h-[90vh]  shadow-2xl backdrop-filter bg-white/10 backdrop-blur-xl ">
  <div className="card-body mt-[50px] h-[70vh]">
    
    <h1 className="card-title  text-2xl text-white ">Question {currentIndex
    } of {FB_Quiz?.length} <span className='flex justify-end items-end mx-auto pl-[550px]'><button className="btn btn-sm bg-[#fed32e] hover:bg-[#fde06a]" onClick={Reset}>
Reset 
  {/* <div className="badge badge-lg">{time}</div> */}
</button></span></h1>

{FB_Quiz !== undefined ? (

    <p className='text-center tracking-widest text-[#fed32e] text-xl font-semibold font-font'>{FB_Quiz[currentIndex].question}</p>
):("")}
    <div>


    <div className="join flex flex-col gap-5 -mt-[50px]">
    {
    
    FB_Quiz !== undefined ?
    

    FB_Quiz[currentIndex].options.map((options)=>{

return(<>
  <button className="join-item capitalize  text-white hover:text-black btn bg-opacity-25  text-whitefont-medium"  onClick={(isCorrect)=>{myFunc(options.isCorrect)}} >{options.ans}</button>

</>)
}):""}

 </div>
    </div>
   
  </div>
  
</div>


)}
</div>

    </>


    )
}



