"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import webPic from "../../public/web_dev_pic.png";
import appPic from "../../public/app_dev_pic.png";
import softPic from "../../public/software_dev_pic.png";

export default function Queries(): React.JSX.Element {
  const [info, setInfo] = useState("");
  const [data1, setData1] = useState<string[]>();
  const [fields, setFields] = useState<string[]>();
  const [option, setOption] = useState<string[]>();
  const [sField, setsFields] = useState(false);
  const picList = [webPic, appPic, softPic];
  const [pic, setpicList] = useState(picList);
  const webtext =
    "Web development is the process of creating websites that people can visit on the internet. It involves designing how the website looks and works using coding languages like HTML, CSS, and JavaScript. Once the website is built, it is checked to make sure it works correctly, is safe, and looks good on different devices. When the testing is done, the website is made available for people to use on the internet. To be successful in web development, it's important to keep learning and stay updated with the latest technology and trends.";
  const apptext =
    "App development, also called mobile app development, is the act of making software applications for mobile devices. It involves creating and building apps using programming languages like Java or Swift. Once the apps are built, they are checked to make sure they work and can be used on different devices. After testing, the apps are made available for people to download from app stores. In app development, it's important to keep learning and stay updated with mobile trends. There are many types of apps, like games, tools to help you be productive, and apps for buying and selling things.";

  const softtext =
    "Desktop app development is about creating computer programs that can be installed and used on desktop or laptop computers. It involves designing how the app looks and works, writing code using languages like Java or C#, and testing for issues. Once tested, the app is made available for users to install on their computers. Continuous learning and understanding user interfaces are important for beginners. Desktop app development offers a variety of options, like productivity tools or industry-specific software.";

  const devFields = [webtext, apptext, softtext];
  const [DevText, setDevText] = useState(devFields);

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
    setpicList(picList);
    setDevText(devFields);
    setsFields(true);
  };

  function handleWebSelection(index: number, option: string) {
    const webData = [
      ["frontend", "backend"],
      ["Android-Development", "IOS-Development", "Cross-Plateform"],
      ["software design", "development"],
    ];
    option === "Web development" && index === 0
      ? (setOptionAndData([option], webData[index]),
        setpicList([webPic]),
        setDevText([webtext]))
      : option === "Mobile development" && index === 1
      ? (setOptionAndData([option], webData[index]),
        setpicList([appPic]),
        setDevText([apptext]))
      : option === "Software development" && index === 2
      ? (setOptionAndData([option], webData[index]),
        setpicList([softPic]),
        setDevText([softtext]))
      : null;
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
      {/* Main */}
      <div className="h-screen flex items-center ">
        <Image
          className="-z-10 bg-blend-darken"
          src={"/mainBG2.jpg"}
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
        />

        <div className="card lg:card-side   flex justify-center  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white  mx-10">
          <div className="card-body max-w-[600px] border-r-indigo-500">
            <h2 className="card-title">Development</h2>
            <p>
              Software development is creating computer programs or apps to meet
              specific needs. It involves planning, designing, coding, testing,
              and maintenance. Developers gather requirements, design the
              software's structure and features, write code, test for issues,
              and make the software available. Maintenance keeps the software
              working and up-to-date. Collaboration, communication, and
              continuous learning are important in software development.
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

          <div className="divider lg:divider-horizontal mx-auto animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-both divide-white divide-y "></div>

          <div className="card-body  max-w-[600px] border-l-indigo-500">
            <h2 className="card-title">Designing</h2>
            <p>
              Designing is the act of creating things that look good and work
              well. It involves planning and arranging different parts to solve
              a problem or achieve a goal. Designing can be used in many areas
              like making graphics, websites, products, and rooms. It's
              important to think about how things will look, how they will be
              used, and who will use them. Designing requires being creative,
              solving problems, and understanding what people want. Sometimes
              special tools and computer programs are used to help with
              designing.
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
      </div>
      {/* Second Section render based on condition */}
      {sField && (
        <div>
          <div className="flex justify-center mt-10 ">
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
                    <p>{DevText[index]}</p>
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
      )}
      {/* Second time  Option  */}
      <div className="flex justify-center text-center mt-[60px] gap-[100px]">
        {data1?.map((data, index) => (
          <div key={index}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#fed32e] to-[#F50C8A] hover:bg-gradient-to-br  shadow-xl shadow-slate-400   font-medium rounded-lg text-sm px-24 py-6 hover:transition hover:ease-in-out hover:duration-500 "
              onClick={() => handleFieldSelection(data)}
            >
              <p className="text- xl font">{data}</p>
            </button>
          </div>
        ))}
      </div>

      {/* last time categories */}
      <div className="flex justify-center items-center gap-10 mt-10">
        {fields?.map((field, index) => (
          <div key={index}>
            <button
              className="btn btn-outline btn-primary transition ease-in duration-300 "
              onClick={() => handleDataSelection(field)}
            >
              {field}
            </button>
          </div>
        ))}
      </div>

      {info ? (
        <Link href={`/content/${info}`}>
          <button
            type="button"
            className="mx-auto my-[50px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5  flex justify-center align` "
          >
            Continue
          </button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
