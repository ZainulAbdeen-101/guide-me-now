"use client";
import React , {useState,useEffect} from 'react';
// import { data } from '../../../sanity/frontend_basic'
import Image from 'next/image';
// import {frontend_basic_quiz} from './quizData';
import {getQuizData_current} from './quizData' 


interface props{

  question:string,
  options:{
    id:number,
    ans:string,
    isCorrect:boolean
  }[]
}

 export default  function page() {
  
  const [mark,setMark] = useState(0);
  // const [showResult,setShowResult] = useState(false);
  const [time,setTime] = useState(29);
  const [currentIndex,setCurrentIndex] = useState(0);



  // const [currentQuiz,setCurrentQuiz] = useState() 
  
  
  
  const FB_Quiz:props[] | undefined = getQuizData_current();

  function myFunc(isCorrect:boolean){


console.log(isCorrect)
    if(currentIndex+1 <= 3){
      

setCurrentIndex(currentIndex+1);

    }


  }
  
return(
  <>
{

FB_Quiz !== undefined ? (
  <> 
  
  
  
 { FB_Quiz[currentIndex].question}
  
   </>
  
  ): (currentIndex)}


{FB_Quiz !== undefined ?  FB_Quiz[currentIndex].options.map((options:any , index:number )=>(
  <div  className=" text-whitefont-medium " >
    
  
  <div key={index} className="btn " onClick={()=>{myFunc(options.isCorrect)}} />
  
  {options.ans} 
  
     </div>
  
  
  )):""


 }




  
  </>
)

 


}





