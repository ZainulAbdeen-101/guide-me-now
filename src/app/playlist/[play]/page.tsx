import React from "react";
import PlayList from "@/components/Playlist";
interface props {
  params: { play: string };
}

 const Page=({ params }: props): React.JSX.Element =>{
  const play = params.play;

  return (
    <>
      <PlayList props={play} />
    </>
  );
}

export default Page