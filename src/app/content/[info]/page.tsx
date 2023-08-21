import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { AiFillCode, BiSolidVideos, RiFileCopy2Fill } from "@/components/Icons";
import Watch from "@/components/Watch";

interface props {
  params: { info: string };
}

const Page=async({ params }: props)=> {
  const categories = params.info;
  const data = await fetchData(categories);
  let bool = false;


  if(categories=="Graphic-Design" || categories=="UIUX-Design" || categories=="Type-Design"){
    bool = true
  }
    else { bool = false}; 

  
const headS=[
  {h1:"Tech Languages" ,docs1: "Documentation"},
  {h2:" Designing Tools" ,docs2: "How to use it ?"},
  
]


  return (
    <>
      <div className="flex mt-20 justify-center items-center gap-2">
        <h1 className="font-font text-[#1877f2] font-semibold text-[50px] underline underline-offset-4 decoration-6">
         {bool ? (headS[1].h2) : (headS[0].h1)}
        </h1>
        <AiFillCode fill="#fed32e" size={50} />
      </div>
      <div className="grid grid-cols-3 gap-5 m-5   mt-5 ">
        {data.map((content, index) => (
          <div className=" text-justify shadow-xl rounded p-3   " key={index}>
            <Image
              className=""
              src={`${urlForImage(content.logo).url()}`}
              width={80}
              height={80}
              alt=""
            />
            <h6 className="font-font text-3xl text-[#1877f2] mt-2 font-semibold ">
              {content.heading}
            </h6>

            <p className="  mt-2">{content.description}</p>
            <div className="flex-grow">
              <Watch
                heading={content.heading}
                url={urlForImage(content.logo).url()}
              />
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center mt-10 items-center gap-3">
        <h1 className="font-font text-[#1877f2] font-semibold  text-[50px] underline underline-offset-4 decoration-6">
          Videos
        </h1>
        <BiSolidVideos fill={"#fed32e"} size={50} />
      </div>
      <div className="grid grid-cols-3 place-items-center ">
        {data.map((content, index) => (
          <div className="mt-5 shadow-xl" key={index}>
            <iframe
              width={400}
              height={300}
              src={`${content.video}`}
              allowFullScreen
              allow="poster"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <h1 className="font-font text-center text-[#1877f2] font-semibold  text-[50px] underline underline-offset-4 decoration-6">
        {bool ? (headS[1].docs2) : (headS[0].docs1)}
        </h1>

        <RiFileCopy2Fill fill={"#fed32e"} size={50} />
      </div>

      <p className="text-center font-semibold text-[#F50C8A]">
        Click on the links below
      </p>
      <div className="grid grid-cols-3 mt-10 place-items-center   ">
        {data.map((content, index) => (
           <div className="text-center mt-5 " key={index}>
            <Link className="" href={content.documentation} target="_blank">
              <Image
                className="mx-auto"
                src={urlForImage(content.logo).url()}
                width={80}
                height={50}
                alt=""
              />
              <h6 className="font-font text-[25px] mt-2 text-[#1877f2] font-medium">
                {content.heading}
              </h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default Page
