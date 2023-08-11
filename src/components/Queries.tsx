"use client";
// Sources
import Link from "next/link";
import React, { useState } from "react";
// Pictures
import Image from "next/image";
import webPic from "../../public/web_dev_picB.png";
import appPic from "../../public/app_dev_pic2.png";
import softPic from "../../public/software_dev_picB.png";
import fPic from "../../public/fP.png";
import bPic from "../../public/bP.png";
import androidPic from "../../public/androidP.png";
import iosPic from "../../public/iosP.png";
import crossPic from "../../public/crossP.png";
import softDesignPic from "../../public/softDesignPC.png";
import softDevelopPic from "../../public/softDeveloppB.png";

// Fonts
import {FaCode} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'



export default function Queries(): React.JSX.Element {
  const [info, setInfo] = useState("");
  const [data1, setData1] = useState<string[]>();
  const [fields, setFields] = useState<string[]>();
  const [option, setOption] = useState<string[]>();
  const [sField, setsFields] = useState(false);
  const [sCater, setsCater] = useState(false);
  const [slevel, setsLevel] = useState(false);
  const picList = [webPic, appPic, softPic];
  const [pic, setpicList] = useState(picList);
  const [webFieldsDesc,setFieldsDes] = useState (0);
  const [webDomainsPic,setWebDomainsPic] = useState([])

let webDP_frontend = fPic;  
let webDP_backtend = bPic;  
let appDP_android = androidPic;  
let iosDP_android = iosPic;  
let crossDP_android = crossPic;  
let softP_Design = softDesignPic;  
let softP_Develop = softDevelopPic;  

const webDomainZPic = [  [webDP_frontend,webDP_backtend] , [appDP_android,iosDP_android,crossDP_android],[softP_Design,softP_Develop]]

  const webtext =
    "Web development is the process of creating websites that people can visit on the internet. It involves designing how the website looks and works using coding languages like HTML, CSS, and JavaScript. Once the website is built, it is checked to make sure it works correctly, is safe, and looks good on different devices. When the testing is done, the website is made available for people to use on the internet. To be successful in web development, its important to keep learning and stay updated with the latest technology and trends.";
  const apptext =
    "App development, also called mobile app development, is the act of making software applications for mobile devices. It involves creating and building apps using programming languages like Java or Swift. Once the apps are built, they are checked to make sure they work and can be used on different devices. After testing, the apps are made available for people to download from app stores. In app development, its important to keep learning and stay updated with mobile trends. There are many types of apps, like games, tools to help you be productive, and apps for buying and selling things.";

  const softtext =
    "Desktop app development is about creating computer programs that can be installed and used on desktop or laptop computers. It involves designing how the app looks and works, writing code using languages like Java or C#, and testing for issues. Once tested, the app is made available for users to install on their computers. Continuous learning and understanding user interfaces are important for beginners. Desktop app development offers a variety of options, like productivity tools or industry-specific software.";



    const webDataDesc = [
      ["Frontend development is the process of creating and designing the user interface of a website or web application. It involves using programming languages like HTML, CSS, and JavaScript to build the visual elements and interactivity that users interact with directly on their web browsers.", "Backend development involves creating the behind-the-scenes functionality of a website or web application. It focuses on managing databases, handling server-side logic, and ensuring data is delivered to the frontend correctly. It usually involves using languages like Python, Ruby, Java, or Node.js."],
      ["Android development is the process of building mobile applications specifically for devices running the Android operating system. It involves designing the user interface, coding functionality, and integrating features using programming languages like Java or Kotlin, enabling apps to run smoothly on smartphones and tablets.", "iOS development refers to creating mobile applications for Apple devices like iPhones and iPads. It involves designing the app's interface, writing code in languages like Swift or Objective-C, and incorporating functionalities to make apps work seamlessly on Apple's operating system, providing a smooth experience for users.", "Cross-platform development in mobile refers to creating apps that can run on multiple operating systems like iOS and Android using a single codebase. This approach saves time and effort by allowing developers to write code once and deploy it on different platforms, streamlining the development process and reaching a wider audience."],
      ["Software designing involves planning the structure, layout, and components of a computer program or application before actually writing the code. It focuses on creating a blueprint that outlines how the software will work, its features, and how different parts will interact.", "Software development is the hands-on process of turning a planned software design into a functional and usable computer program or application. It encompasses writing code, testing, debugging, and refining the software to ensure it performs as intended and meets user requirements."],
    ];


  const devFields = [webtext, apptext, softtext];
  const [DevText, setDevText] = useState(devFields);

  const devOptions = ["Web Development","Mobile Development","Software Development",];

  const webDesOptions = ["web design", "UI/UX design", "graphic design"];

  const frontendOptions = ["frontend-basic","frontend-intermediate","frontend-advanced",  ];

  const backendOptions = ["backend-basic", "backend-advanced"];

  const setOptionAndData = (options: string[], data: string[]) => {


setInfo("")
    sCater ? setsCater(false) : false
    slevel ? (setsLevel(false),setInfo("")) :false 
    setOption(options);
    setData1(data);
    setFields([]);
    setpicList(picList);
    setDevText(devFields);
    setsFields(true);
  };

  function handleWebSelection(index: number, option: string) {

    const webData = [
      ["Frontend", "Backend"],
      ["Android-Development", "IOS-Development", "Cross-Plateform"],
      ["Software Design", "Software Development"],
    ];
    option === "Web Development" && index === 0
      ? (setOptionAndData([option], webData[index]),
          setFieldsDes(0),
        setpicList([webPic]),
        setDevText([webtext]),
        setsCater(true),
        setsLevel(false))

      : option === "Mobile Development" && index === 1
      ? (setOptionAndData([option], webData[index]),
      setFieldsDes(1),
        setpicList([appPic]),
        setDevText([apptext]),
        setInfo(" "),setsCater(true),setsLevel(false))
      : option === "Software Development" && index === 2
      ? (setOptionAndData([option], webData[index]),
      setFieldsDes(2),
        setpicList([softPic]),
        setDevText([softtext]),
        setInfo(" "),setsCater(true),setsLevel(false))
      : null;

  }

  const fieldsData: { [key: string]: string[] } = {
    frontend: frontendOptions,
    backend: backendOptions,
    "web design": ["web design option 1", "web design option 2"],
    "UI/UX design": ["UI/UX design option 1", "UI/UX design option2"],
    "graphic design": ["graphic design option 1", "graphic design option 2"],
  };

  const handleFieldSelection = (field: string) => {

setsLevel(true)
    setFields(fieldsData[field]);
   

    field === "Android-Development"
      ? (setInfo(field) , setsLevel(false))
      : field === "IOS-Development"
      ? (setInfo(field) , setsLevel(false) )
      : field === "Cross-Plateform"
      ? (setInfo(field) , setsLevel(false))
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
          src={"/scBG.png"}
          fill={true}
          style={{ objectFit: "cover"}}
          alt=""
        />

        <div className="card lg:card-side   flex justify-center  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white  mx-10">
          <div className="card-body max-w-[600px] border-r-indigo-500">
          <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white">
              <div className="stat">
                <div className="stat-value flex gap-6 justify-center">Development
              <span style={{fontSize:"45px"}}><FaCode/></span>
              </div>
    
              </div>
            </div>
 
                 <p>
              Software development is creating computer programs or apps to meet
              specific needs. It involves planning, designing, coding, testing,
              and maintenance. Developers gather requirements, design the
              softwares structure and features, write code, test for issues, and
              make the software available. Maintenance keeps the software
              working and up-to-date. Collaboration, communication, and
              continuous learning are important in software development.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn  bg-gradient-to-l from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg shadow-yellow-300/100 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setOptionAndData(devOptions, [])}
              >
                Continue with Development
              </button>
            </div>
          </div>
          <div className="divider lg:divider-horizontal mx-auto animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-both divide-white divide-y "></div>

          <div className="card-body  max-w-[600px] border-l-indigo-500">
          <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-white">
              <div className="stat">
                <div className="stat-value flex gap-6 justify-center">Designing
              <span style={{fontSize:"45px"}}><MdDesignServices/></span>
              </div>
    
              </div>
            </div>
            <p>
              Designing is the act of creating things that look good and work
              well. It involves planning and arranging different parts to solve
              a problem or achieve a goal. Designing can be used in many areas
              like making graphics, websites, products, and rooms. Its important
              to think about how things will look, how they will be used, and
              who will use them. Designing requires being creative, solving
              problems, and understanding what people want. Sometimes special
              tools and computer programs are used to help with designing.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn bg-gradient-to-l from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg shadow-yellow-300/100 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                <div className="card lg:card-side bg-base-100 shadow-xl w-[80%] container mx-auto hover:focus:shadow-outline">
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
                        className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg hove:shadow-yellow-300/100 hover:dark:shadow-lg hover:dark:shadow-yellow-400/100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => handleWebSelection(index, option)}
                      >
                        Lets Start with {option}
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


{sCater&&(
<div>
  {/* Heading */}
  <div className="flex justify-center mt-10 ">
            <div className="stats shadow-md">
              <div className="stat">
                <div className="stat-value">Select your Category</div>
              </div>
            </div> 
            </div>

      {/* Wrapper */}
      <div className=" flex justify-center">
        
           <div className="flex flex-wrap justify-center text-center mt-[60px] gap-[90px] w-[100%] h-[500px]">
        
        
        {data1?.map((data, index) => (
          <div key={index}>
        
<div className="card card-compact w-96 bg-base-100   shadow-[3px_3px_#fed32e,_6px_6px_#ffdc50,_9px_9px_#ffe477,_15px_15px_#fae8a0,_18px_18px_#fff4c8] overflow-hidden">
  <figure><Image src={webDomainZPic[webFieldsDesc][index]} alt="Shoes" width={200} height={100} ></Image></figure>
  <div className="card-body bg-[#1877f2]">
    <h2 className="card-title font-font text-white text-2xl">{data}</h2>
    <p className="text-white">{webDataDesc[webFieldsDesc][index]}</p>
    <div className="card-actions justify-center ">
      <button className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  onClick={() => handleFieldSelection(data)}>Select</button>
    </div>
  </div>
</div>

          </div>
        ))}

      </div>
      </div>

</div>
)}


{slevel&&(
<div>

<div className="flex justify-center mt-10 ">
            <div className="stats shadow-md">
              <div className="stat">
                <div className="stat-value">Choose your Level</div>
              </div>
            </div> 
            </div>

      {/* last time categories */}
      <div className="flex justify-center items-center gap-10 mt-10">
        {fields?.map((field, index) => (
          <div key={index}>
            <button className="btn btn-outline text-black btn-warning transition-none focus:bg-[#fed32e] focus:outline-[#fed32e] border-[#fed32e] focus:text-black checked:text-black "
              onClick={() => handleDataSelection(field)}
            >
              {field}
  
            </button>
          </div>
        ))}
      </div>
      </div>
)}
      

      {info ? (
        <Link href={`/content/${info}`}>
          <button
            type="button"
            className="mx-auto my-[50px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5  flex justify-center align "
          >
            Continue
            <svg className="w-3.5 h-3.5 ml-2 mt-[4px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
          </button>
        </Link>
      ) : (
        ""
      )}


    </>
  );
}
