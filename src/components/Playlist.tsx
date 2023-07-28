"use client";
import React, { useEffect, useState } from "react";
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
          
        

      <div className="mt-10 max-w-[450px] flex flex-col h-[600px] gap-10 text-lg border rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-[#6c00a5] scrollbar-track-[#fed32e]">
        {data?.map((item: playlist, index: number) => (
          <div className=" m-2  rounded-md text-[#6c00a5] shadow-xl p-2 "  key={index}>
            <button onClick={() => {setdata(item.url) 
              showbtn(item.title)
              }}>{item.title}</button>
          </div>
        ))}
      </div>

      {/*  #2F0743 */}

    
      <div className="mt-3">
      
      <h1 className="text-lg font-extrabold text-gray-900 -pt-[30px] dark:text-black md:text-5xl lg:text-4xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 ">{props}</span>&nbsp;<span className="underline underline-offset-4 decoration-6  decoration-[#fed32e] text-[#6c00a5]">Course</span></h1> 

        <iframe className="mt-2 rounded-2xl drop-shadow-2xl "
          width={820}
          height={500}
          src={list}
          allowFullScreen
          allow="poster"
        ></iframe>

<button className="btn btn-outline btn-secondary transition ease-in duration-300 mt-5" disabled={show} >Start Quiz</button>
      </div>

    
    </div>
    </>
  );
}
