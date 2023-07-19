"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";


import webPic from "../../../public/web_dev_pic.png";
import appPic from "../../../public/app_dev_pic.png";
import softPic from "../../../public/software_dev_pic.png";

import { devFields } from "../../components/textContent";


export default function Page(): React.JSX.Element {
  const [info, setInfo] = useState("");
  const [data1, setData1] = useState<string[]>();
  const [fields, setFields] = useState<string[]>();
  const [option, setOption] = useState<string[]>();
  const picList = [webPic, appPic, softPic];
  const [pic,setpicList]=useState(picList)

 


  const txtC = devFields;

  const devOptions = [
    "Web development",
    "Mobile development",
    "Software development",
  ];

  const webDesOptions = ["web design", "UI/UX design", "graphic design"];

  const frontendOptions = [
    "frontend-basic",
    "frontend-intermediate",
    "frontend-advanced",
  ];

  const backendOptions = ["backend-basic", "backend-advanced"];

  const setOptionAndData = (options: string[], data: string[]) => {
    setOption(options);
    setData1(data);
    setFields([]);
    setpicList(picList)
  };

  function handleWebSelection(index: number, option: string) {
    const webData = [
      ["frontend", "backend"],
      ["Android-Development", "IOS-Development", "Cross-Plateform"],
      ["software design", "development"],
    ];
    if (option === "Web development" && index == 0) {
      setOptionAndData([option], webData[index]);
      setpicList([webPic])
      
    } else if (option === "Mobile development" && index == 1) {
      setOptionAndData([option], webData[index]);
      setpicList([appPic])
    } else if (option === "Software development" && index == 2) {
      setOptionAndData([option], webData[index]);
      setpicList([softPic])
    }
  }

  const fieldsData: { [key: string]: string[] } = {
    frontend: frontendOptions,
    backend: backendOptions,
    "web design": ["web design option 1", "web design option 2"],
    "UI/UX design": ["UI/UX design option 1", "UI/UX design option 2"],
    "graphic design": ["graphic design option 1", "graphic design option 2"],
  };

  const handleFieldSelection = (field: string) => {
    setFields(fieldsData[field]);

    field === "Android-Development"
      ? setInfo(field)
      : field === "IOS-Development"
      ? setInfo(field)
      : field === "Cross-Plateform"
      ? setInfo(field)
      : field;
  };

  const handleDataSelection = (data: string) => {
    setInfo(data);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-serif ">Choose your Domain</h1>

     

      <div className="card lg:card-side bg-base-100 shadow-xl flex justify-center glass">
        <div className="card-body max-w-[600px]">
          <h2 className="card-title">Development</h2>
          <p>
            Software development is creating computer programs or apps to meet
            specific needs. It involves planning, designing, coding, testing,
            and maintenance. Developers gather requirements, design the
            software's structure and features, write code, test for issues, and
            make the software available. Maintenance keeps the software working
            and up-to-date. Collaboration, communication, and continuous
            learning are important in software development.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setOptionAndData(devOptions, [])}
            >
              Continue with Development
            </button>
          </div>
        </div>

        <div className="divider lg:divider-horizontal mx-auto animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-both"></div>

        <div className="card-body  max-w-[600px] ">
          <h2 className="card-title">Designing</h2>
          <p>
            Designing is the act of creating things that look good and work
            well. It involves planning and arranging different parts to solve a
            problem or achieve a goal. Designing can be used in many areas like
            making graphics, websites, products, and rooms. It's important to
            think about how things will look, how they will be used, and who
            will use them. Designing requires being creative, solving problems,
            and understanding what people want. Sometimes special tools and
            computer programs are used to help with designing.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setOptionAndData([], webDesOptions)}
            >
              Continue with Designing
            </button>
          </div>
        </div>
      </div>

      {/* Second Section render based on condition */}

     
        <div>
          <div className="flex justify-center mt-[50px] ">
            <div className="stats shadow-md">
              <div className="stat">
                <div className="stat-value">Select your Field</div>
              </div>
            </div>
          </div>

          <div className="mt-[20px]">
            {/* first time Options click by Domains */}
            {option?.map((option, index) => (
              <div key={index} className="mt-[20px]">
                <div className="card lg:card-side bg-base-100 shadow-xl w-[80%] container mx-auto">
                  <div className="card-body w-[200%]">
                    <figure>
                       <Image
                        src={pic[index]}
                        height={500}
                        width={550}
                        alt="car!"
                       />
                    </figure>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{option}</h2>
                    <p>{txtC[index]}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn bg-[#ffdd35] hover:bg-[#fde047]"
                        onClick={() => handleWebSelection(index, option)}
                      >
                        Let's Start with {option}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
      {/* Second time  Option  */}
      <div className="grid ">
        {data1?.map((data, index) => (
          <div key={index}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => handleFieldSelection(data)}
            >
              {data}
            </button>
          </div>
        ))}
      </div>

      {/* last time categories */}

      {fields?.map((field, index) => (
        <div key={index}>
          <button onClick={() => handleDataSelection(field)}>{field}</button>
        </div>
      ))}

      <Link href={`/content/${info}`}>Continue</Link>
    </>
  );
}
