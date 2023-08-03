"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchplaylist } from "../../sanity/lib/client";
import { playlist } from "@/types";


type Play={

props : string

}



export default function PlayList({props}:Play) {
  
const [show,setshow]=useState(true)
  const [data, setData] = useState<playlist[]>([]);
  const [list, setList] = useState<string>("");

  function setdata(url: string) {
    setList(url);
  }
  
    function compareByProperty(property: any) {
      return (a: string, b: string) =>
        a[property].toUpperCase().localeCompare(b[property].toUpperCase());
    }

   useEffect(() => {
    async function fetchData() {
      const play = props;
      const fetchedPlaylist = await fetchplaylist(play);
      const data = fetchedPlaylist.sort(compareByProperty("id"));
      setData(data);
     
      setList(data.length > 0 ? data[0].url : "");
    }
    fetchData();
  },[props]);
  

  function showbtn(title:string) {
    
    if (data && title === data[data.length-1].title) {
      setshow(false);
    }
  }

   


  return (
    <>
   
    <div className="flex justify-around">

{/* #fed32e */}
          
        

      <div className="mt-24 max-w-[450px] flex flex-col h-[500px] gap-10 p-4   rounded-xl overflow-auto scrollbar-thin scrollbar-thumb-[#1877f2] scrollbar-track-[#fed32e]">
        {data?.map((item: playlist, index: number) => (
          <div className=" font-font text-lg  rounded-md font-bold shadow-xl p-2 "  key={index}>
            <button onClick={() => {setdata(item.url) 
              showbtn(item.title)
              }}>{item.title}</button>
          </div>
        ))}
      </div>

      {/*  #2F0743 */}

    
      <div className="mt-14 ">
      
      <h1 className="text-4xl font-font font-extrabold    text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877f2] to-[#1877f9] ">{props}</span>&nbsp;<span className="underline underline-offset-4 decoration-6  decoration-[#fed32e] text-[#6c00a5]">Course</span></h1> 

        <iframe className="mt-2 rounded-2xl drop-shadow-2xl "
          width={800}
          height={500}
          src={list}
          allowFullScreen
          allow="poster"
        ></iframe>

        {
          show?<div className="alert mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Please Watch full playlist</span>
        </div>:<div className="alert mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Start Quiz Now</span>
        </div>
        }

<button className="btn bg-gradient-to-r from-[#1877f2] to-[#1877f9] text-white hover:text-[#fed32e] rounded-lg px-4 py-2  font-bold text-lg
  transition ease-in duration-300 mt-5 mb-20" disabled={show} >
       <Link href={`/quiz/${data[0].title}`}>Start Quiz</Link></button>
  

      </div>

    
    </div>
    </>
  );
}
