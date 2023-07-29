"use client";
import React , {useState,useEffect} from 'react';
// import { data } from '../../../sanity/frontend_basic'
import Image from 'next/image';
// import {frontend_basic_quiz} from './quizData';
import {getQuizData_current} from './quizData' 


interface props{
  fbq:[


  { question:string , options:[{id:number,ans:string,isCorrect:boolean}]}


  ]
}


function page() {
  const [currentIndex,setCurrentIndex] = useState(0); 
  const [mark,setMark] = useState(0);
  const [showResult,setShowResult] = useState(false);
  const [time,setTime] = useState(29);

  


//  FB_Quiz;





const slugg = "HTML";

useEffect(()=>{

  const [currentQuiz,setCurrentQuiz] = useState() 
  
    
  
  const FB_Quiz= getQuizData_current();

// setCurrentQuiz(FB_Quiz[0].question)



console.log(FB_Quiz);


},[])



// if(FB_Quiz[0]===slugg){


//     }


    //  else if(FB_Quiz[1].arr[0]=="JavaScript"){

//       setCurrentQuiz(FB_Quiz[1].arr[1])

//         }
//        else if(FB_Quiz[2].arr[0]=="CSS"){

//           setCurrentQuiz(FB_Quiz[2].arr[1])
          
          
//             }




// setTimeout(() => {
    
//     if(time<=0)
//     {
//         setTime(0)
//     } else{
//         setTime(time-1)
//     }


// }, 1000);


//   function myFunc(isCorrect:boolean){
  
      
//               if(isCorrect){
//                   setMark(mark+1);
//               }

//     if(currentIndex+1 < currentQuiz.length){

//         setCurrentIndex(currentIndex+1);

//     }
//     else {
// setShowResult(true)
//     }
//   }

//   const resetFunc = ()=>{

//     setCurrentIndex(0);
//     setMark(0);
//     setShowResult(false)

//   }

  // backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg



    return (
 <></>
//     <>

// <div className='flex justify-center my-[50px]'>

// <Image src={'/quizBG.jpg'} className='-z-10 ' alt='' fill={true}  style={{objectFit:"cover"}}/>


// {/*  bg-[#fde047]  */}


// <div className="card w-[80%] h-[80vh]  shadow-2xl backdrop-filter bg-white/10 backdrop-blur-xl ">
//   <div className="card-body ">
    
//     <p className="card-title  text-2xl text-white ">Question {currentIndex
//     } of <span className='flex justify-end items-end mx-auto pl-[550px]'><button className="btn btn-sm ">
//   Time Remaining : 
//   <div className="badge badge-lg">{time}</div>
// </button></span></p>
//     <p className='text-center  text-lg font-semibold'></p>
//     <div>

//     <div className="join flex flex-col gap-5">
//     {currentQuiz[currentIndex].options.map((options: { ans: string | number | readonly string[] | undefined; isCorrect: boolean; })=>{

// return(<>
//   {/* <input className="join-item btn  text-whitefont-medium " type="button" name="options" value={options.ans} onClick={(isCorrect)=>{myFunc(options.isCorrect)}} /> */}

// </>)
// })}

//  </div>
//     </div>
   
//   </div>
  





// </div>


// </div>











//     </>


    )

}
export default page
