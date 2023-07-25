"use client";
import React, { useEffect, useState } from "react";
import { fetchplaylist } from "../../sanity/lib/client";
import { playlist } from "@/types";

interface Play{

props : string

}

export default function PlayList({props}:Play) {
  

  const [data, setData] = useState([]);
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

  return (
    <>
    <div className="flex justify-around">

{/* #fed32e */}
          

      <div className="max-w-[450px] flex flex-col h-[600px] gap-10 text-lg border rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-[#6c00a5] scrollbar-track-[#fed32e] bg-gradient-to-br from-gray-100 to-gray-300">
        {data.map((item: playlist<string>, index: number) => (
          <div className=" m-2 shadow-xl shdaow rounded-md" key={index}>
            <button onClick={() => setdata(item.url)}>{item.title}</button>
          </div>
        ))}
      </div>

      {/*  #2F0743 */}

    
      <div className="mt-[15px]">
      
      <h1 className="text-lg font-extrabold text-gray-900 -pt-[30px] dark:text-black md:text-5xl lg:text-4xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 ">{props}</span>&nbsp;<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Course</span></h1> 

        <iframe className="rounded-2xl drop-shadow-2xl "
          width={820}
          height={500}
          src={list}
          allowFullScreen
          allow="poster"
        ></iframe>
      </div>

    
    </div>
    </>
  );
}
