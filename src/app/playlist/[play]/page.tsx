import React from "react";
import PlayList from "@/components/Playlist";
interface props {
  params: { play: string };
}



export default function Page({ params }: props) {

  const play = params.play;

  return (
    <>
    <PlayList props={play}/>
    </>
  );
}
