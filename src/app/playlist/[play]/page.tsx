"use client";
import React, { useEffect, useState } from "react";
import { fetchplaylist } from "../../../../sanity/lib/client";
import { playlist } from "@/types";

interface props {
  params: { play: string };
}

export default function Page({ params }: props) {
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
      const play = params.play;
      const fetchedPlaylist = await fetchplaylist(play);
      const data = fetchedPlaylist.sort(compareByProperty("id"));
      setData(data);
     
      setList(data.length > 0 ? data[0].url : "");
    }
    fetchData();
  }, [params.play]);

  return (
    <>
    <div className="flex justify-around">

      <div className="max-w-[450px] flex flex-col h-[600px] gap-10 text-lg border rounded-lg overflow-auto  scrollbar-thin scrollbar-thumb-[#6c00a5] scrollbar-track-[#fed32e]">
        {data.map((item: playlist<string>, index: number) => (
          <div className=" m-2   shadow-lg rounded-md " key={index}>
            <button onClick={() => setdata(item.url)}>{item.title}</button>
          </div>
        ))}
      </div>

      <div>
        <iframe

          width={900}
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
