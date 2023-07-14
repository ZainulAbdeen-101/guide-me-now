import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";

interface props {
  params: { info: string };
}

export default async function page({ params }: props) {
  const categories = params.info;

  const data = await fetchData(categories);

  console.log(data);

  return (
    <>
      <h1 className="text-center text-[50px]">Technologies</h1>
      <div className="grid grid-cols-3  ">
        {data.map((content, index) => (
          <div className="max-w-[550px] text-center " key={index}>
            <Image
              className="mx-auto"
              src={`${urlForImage(content.logo).url()}`}
              width={80}
              height={80}
              alt=""
            />
            <h1 className="text-xl font-semibold">{content.heading}</h1>

            <p className="">{content.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-center text-[50px]">Videos</h1>
      <div className="grid grid-cols-3">
        {data.map((content, index) => (
          <div className="" key={index}>
            <iframe width={400} height={300} src={`${content.video}`}></iframe>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {data.map((content, index) => (
          <div className="" key={index}>
            <Link href={content.documentation} target="_blank">{content.heading}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
