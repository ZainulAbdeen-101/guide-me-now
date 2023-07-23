import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import {
  AiFillCode,
  BiSolidVideos,
  BsArrowDownSquareFill,
  RiFileCopy2Fill,
} from "@/components/Icons";

interface props {
  params: { info: string };
}

export default async function page({ params }: props) {
  const categories = params.info;
  const data = await fetchData(categories);
  console.log(data);

  return (
    <>
      <div className="h-screen ">
        <Image
          className="-z-10"
          src={"/background1.png"}
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="absolute m-5 mt-[230px] text-[#6c00f5] w-[550px]">
          <p className="text-[35px] text-[#F50C8A] ">We Have</p>
          <p className="text-[35px]  leading-snug">
            ALL THE CONTENT YOU NEED TO START AN EMERGING CAREER.
          </p>
          <p className="text-lg   text-[#F50C8A] underline decoration-2 underline-offset-8 decoration-[#F50C8A] font-medium">
            Explore the Dynamic Universe of Programming Languages.
          </p>
        </div>
        <button>
          <BsArrowDownSquareFill
            fill="#6c00f5"
            className="absolute left-0 right-0 mx-auto bottom-2"
            size={30}
          />
        </button>
      </div>

      
      <div className="flex mt-10 justify-center items-center gap-2">
        <h1 className=" text-[#6c00a5] font-semibold text-[50px]">
          Tech Languages
        </h1>
        <AiFillCode fill="#fed32e" size={50} />
      </div>
      <div className="grid grid-cols-3 gap-5 m-5   mt-10 ">
        {data.map((content, index) => (
          <div className="text-justify shadow-xl rounded p-3 " key={index}>
            <Image
              className=""
              src={`${urlForImage(content.logo).url()}`}
              width={80}
              height={80}
              alt=""
            />
            <h1 className="text-2xl text-[#6c00a5] mt-2 font-medium ">
              {content.heading}
            </h1>

            <p className="  mt-2">{content.description}</p>
            <button className="btn btn-outline btn-primary"><Link href={`/playlist/${content.heading}`}>Start Watching</Link></button>
          </div>
        ))}
      </div>

      <div className=" flex justify-center mt-10 items-center gap-3">
        <h1 className=" text-[#6c00a5] font-semibold  text-[50px]">Videos</h1>
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
        <h1 className="text-center text-[#6c00a5] font-semibold  text-[50px]">
          Documentation
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
              <h6 className="text-[25px] mt-2 text-[#6c00a5] font-medium">
                {content.heading}
              </h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
