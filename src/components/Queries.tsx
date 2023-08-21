"use client";
// Sources
import Link from "next/link";
import React, { useState } from "react";
// Pictures
import Image, { StaticImageData } from "next/image";
import webPic from "../../public/web_dev_picB.png";
import appPic from "../../public/app_dev_pic2.png";
import softPic from "../../public/software_dev_picB.png";
import graphPic from "../../public/graphic_des_pic.png";
import uiuxPic from "../../public/uiux_des_pic.png";
import typePic from "../../public/type_des_pic.png";
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
  const [checkFleids,setCheckFields] = useState(false)
  const [checkDomains,setCheckDomains] = useState(false)
  const [checkLevels,setCheckLevels] = useState(false)
  const picList_dev = [webPic, appPic, softPic];
  const picList_des = [graphPic, uiuxPic, typePic];
  const [pic, setpicList] = useState(picList_dev);  
  const [webFieldsDesc,setFieldsDes] = useState (0);
  // const [webDomainsPic,setWebDomainsPic] = useState([])

let webDP_frontend = fPic; let webDP_backtend = bPic;let appDP_android = androidPic;  
let iosDP_android = iosPic;  let crossDP_android = crossPic;  
let softP_Design = softDesignPic; let softP_Develop = softDevelopPic;  

const webDomainZPic = [  [webDP_frontend,webDP_backtend] , [appDP_android,iosDP_android,crossDP_android],[softP_Design,softP_Develop]]

  const webtext =
    "Web development is the process of creating websites that people can visit on the internet. It involves designing how the website looks and works using coding languages like HTML, CSS, and JavaScript. Once the website is built, it is checked to make sure it works correctly, is safe, and looks good on different devices. When the testing is done, the website is made available for people to use on the internet. To be successful in web development, its important to keep learning and stay updated with the latest technology and trends.";
  const apptext =
    "App development, also called mobile app development, is the act of making software applications for mobile devices. It involves creating and building apps using programming languages like Java or Swift. Once the apps are built, they are checked to make sure they work and can be used on different devices. After testing, the apps are made available for people to download from app stores. In app development, its important to keep learning and stay updated with mobile trends. There are many types of apps, like games, tools to help you be productive, and apps for buying and selling things.";

  const softtext =
    "Desktop app development is about creating computer programs that can be installed and used on desktop or laptop computers. It involves designing how the app looks and works, writing code using languages like Java or C#, and testing for issues. Once tested, the app is made available for users to install on their computers. Continuous learning and understanding user interfaces are important for beginners. Desktop app development offers a variety of options, like productivity tools or industry-specific software.";


    const graphtext = "Graphic design is the art of creating visually appealing and communicative designs using a combination of images, text, colors, and layout techniques. It involves crafting designs for various purposes, such as logos, posters, websites, and packaging. Beginners in graphic design learn to balance elements like imagery and text to convey messages effectively and aesthetically. They explore principles like composition, color theory, and typography to create visually engaging and impactful designs that capture attention and convey information or emotions clearly. Graphic design is a versatile skill used in advertising, branding, and various forms of visual communication.";

    const uiuxtext = "(User Interface) and UX (User Experience) are important aspects of graphic design that focus on creating user-friendly and engaging digital experiences. UI involves designing the visual elements and interactive components of a website or app, like buttons, menus, and layouts, to ensure they are visually appealing and easy to navigate. UX, on the other hand, concentrates on the overall experience a user has while interacting with the product, aiming to make it intuitive, enjoyable, and efficient. Beginners should understand that UI deals with how things look, while UX deals with how they work. Both UI and UX collaborate to create seamless and satisfying digital interactions that keep users happy and engaged.";


    const typetext = "Typography in graphic design refers to the art and technique of arranging text in a visually appealing and effective manner. It involves choosing fonts, adjusting their size, spacing, and alignment to convey a specific message or evoke a particular feeling. Typography plays a crucial role in communication by enhancing readability and establishing the overall tone of a design. Beginners should focus on selecting appropriate fonts that match the project's purpose, ensuring legibility, maintaining consistent spacing, and experimenting with font combinations to create harmony in their designs. Mastering typography allows designers to create more engaging and impactful visual content."



    const webDataDesc = [
      ["Frontend development is the process of creating and designing the user interface of a website or web application. It involves using programming languages like HTML, CSS, and JavaScript to build the visual elements and interactivity that users interact with directly on their web browsers.", "Backend development involves creating the behind-the-scenes functionality of a website or web application. It focuses on managing databases, handling server-side logic, and ensuring data is delivered to the frontend correctly. It usually involves using languages like Python, Ruby, Java, or Node.js."],
      ["Android development is the process of building mobile applications specifically for devices running the Android operating system. It involves designing the user interface, coding functionality, and integrating features using programming languages like Java or Kotlin, enabling apps to run smoothly on smartphones and tablets.", "iOS development refers to creating mobile applications for Apple devices like iPhones and iPads. It involves designing the app's interface, writing code in languages like Swift or Objective-C, and incorporating functionalities to make apps work seamlessly on Apple's operating system, providing a smooth experience for users.", "Cross-platform development in mobile refers to creating apps that can run on multiple operating systems like iOS and Android using a single codebase. This approach saves time and effort by allowing developers to write code once and deploy it on different platforms, streamlining the development process and reaching a wider audience."],
      ["Software designing involves planning the structure, layout, and components of a computer program or application before actually writing the code. It focuses on creating a blueprint that outlines how the software will work, its features, and how different parts will interact.", "Software development is the hands-on process of turning a planned software design into a functional and usable computer program or application. It encompasses writing code, testing, debugging, and refining the software to ensure it performs as intended and meets user requirements."],
    ];


  const devFields = [webtext, apptext, softtext];
  const desFields = [graphtext, uiuxtext, typetext];
  const [DevText, setDevText] = useState(devFields);
  const [DesText, setDesText] = useState(desFields);

  const devOptions = ["Web Development","Mobile Development","Software Development",];

  const webDesOptions = ["Graphic Design", "UI/UX Design", "Typography Design"];

  const frontendOptions = ["frontend-basic","frontend-intermediate","frontend-advanced",  ];

  const backendOptions = ["backend-basic", "backend-advanced"];



  // For Designing field Definations 

  const designFieldsText = [ 

    "Graphic design is the art of creating visually appealing and communicative designs using a combination of images, text, colors, and layout techniques. It involves crafting designs for various purposes, such as logos, posters, websites, and packaging. Beginners in graphic design learn to balance elements like imagery and text to convey messages effectively and aesthetically. They explore principles like composition, color theory, and typography to create visually engaging and impactful designs that capture attention and convey information or emotions clearly. Graphic design is a versatile skill used in advertising, branding, and various forms of visual communication.",
    
    "(User Interface) and UX (User Experience) are important aspects of graphic design that focus on creating user-friendly and engaging digital experiences. UI involves designing the visual elements and interactive components of a website or app, like buttons, menus, and layouts, to ensure they are visually appealing and easy to navigate. UX, on the other hand, concentrates on the overall experience a user has while interacting with the product, aiming to make it intuitive, enjoyable, and efficient. Beginners should understand that UI deals with how things look, while UX deals with how they work. Both UI and UX collaborate to create seamless and satisfying digital interactions that keep users happy and engaged.",
    
    "Typography in graphic design refers to the art and technique of arranging text in a visually appealing and effective manner. It involves choosing fonts, adjusting their size, spacing, and alignment to convey a specific message or evoke a particular feeling. Typography plays a crucial role in communication by enhancing readability and establishing the overall tone of a design. Beginners should focus on selecting appropriate fonts that match the project's purpose, ensuring legibility, maintaining consistent spacing, and experimenting with font combinations to create harmony in their designs. Mastering typography allows designers to create more engaging and impactful visual content."


  ]

  const setOptionAndData = (options: string[], data: string[]) => {

    setInfo("")
   


    setOption(options);
    setData1(data);
    setFields([]);

  if(data[0]=="Graphic Design")  {
    
    setpicList(picList_des);
    setDesText(desFields);

  }else if (data[0]=="Web Development"){

setpicList(picList_dev);
    setDevText(devFields);

  }
    

    setCheckFields(true);
    
    
    checkDomains  && setCheckDomains(false)  
  };

  function handleWebSelection(index: number, option: string) {

    setCheckDomains(true)
    setCheckLevels(false);


    const webData = [
      ["Frontend", "Backend"],
      ["Android-Development", "IOS-Development", "Cross-Plateform"],
      ["Software Design", "Software Development"],
    ];
    option === "Web Development" && index === 0
      ? (setOptionAndData([option], webData[index]),
          setFieldsDes(0),
        setpicList([webPic]),
        setDevText([webtext])
     )

      : option === "Mobile Development" && index === 1
      ? ( info && setInfo(''), setOptionAndData([option], webData[index]),
      setFieldsDes(1),
        setpicList([appPic]),
        setDevText([apptext])
    
        )
      : option === "Software Development" && index === 2
      ? (setOptionAndData([option], webData[index]),
      setFieldsDes(2),
        setpicList([softPic]),
        setDevText([softtext])
       )
      : null;

  }

  const fieldsData: { [key: string]: string[] } = {
    Frontend: frontendOptions,
    Backend: backendOptions,
    "web design": ["web design option 1", "web design option 2"],
    "UI/UX design": ["UI/UX design option 1", "UI/UX design option2"],
    "graphic design": ["graphic design option 1", "graphic design option 2"],
  };

  const handleFieldSelection = (field: string) => {

    if (field==="Frontend" || field==="Backend" ){
      setCheckLevels(true)
      setInfo("");
  
    }

    setFields(fieldsData[field]);

    field === "Android-Development"
      ? (setInfo(field))
      : field === "IOS-Development"
      ? (setInfo(field) )
      : field === "Cross-Plateform"
      ? (setInfo(field))
      : field;


  };

  const handleDataSelection = (data: string) => {
    setInfo(data);
  };

  return (
    <>

    

      {/* Main */}
      <div className="h-screen flex items-center">
        <Image
          className="-z-10 bg-blend-darken"
          src={"/mainD3.jpg"}
          fill={true}
          style={{ objectFit: "cover"}}
          alt=""
        />

        <div className="card lg:card-side shadow-white  flex justify-center  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-black  mx-10">
          <div className="card-body max-w-[600px] border-r-indigo-500">
          <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-black">
              <div className="stat">
                <div className="stat-value flex gap-6 justify-center">Development
              <span style={{fontSize:"45px"}}><FaCode/></span>
              </div>
    
              </div>
            </div>
 
                 <p>
                 Development in the IT field refers to building and improving computer programs, apps, and systems. It's like constructing a digital world where everything works smoothly. Just as you upgrade your phone's apps for new features, IT development involves updating software, fixing bugs, and making tech things even better. Think of it as crafting a digital masterpiece that helps people do things faster and smarter with their devices.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn  bg-gradient-to-l from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setOptionAndData(devOptions, [])}
              >
                Continue with Development
              </button>
            </div>
          </div>
          <div className="divider lg:divider-horizontal mx-auto animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-both divide-white divide-y "></div>

          <div className="card-body  max-w-[600px] border-l-indigo-500">
          <div className="stats shadow-md  backdrop-filter bg-white/10 backdrop-blur-xl drop-shadow-lg text-black">
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
                className="btn bg-gradient-to-l from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setOptionAndData(webDesOptions,[])}
              >
                Continue with Designing
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section render based on condition */}
  
      {checkFleids && (
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
                        className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg  hover:dark:shadow-lgfont-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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


{checkDomains&& (
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

<div className="card card-compact w-96 bg-base-100 shadow-[5px_5px_0px_0px_#1877f2] overflow-hidden">
  <figure className=" bg-[#1877f2]"><Image src={webDomainZPic[webFieldsDesc][index]} alt="Shoes" width={200} height={100} ></Image></figure>
  <div className="card-body">
    <h2 className="card-title font-font text-black text-2xl">{data}</h2>
    <p className="text-black">{webDataDesc[webFieldsDesc][index]}</p>
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


{checkLevels && (
<div>



<div className="flex justify-center mt-10 ">
            <div className="stats shadow-md">
              <div className="stat">
                <div className="stat-value">Choose your Level</div>
              </div>
            </div> 
            </div>
{/* 

            <button className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" ></button> */}

      {/* last time categories */}
      <div className="flex justify-center items-center gap-10 mt-10">
      {/* transition-none */}
        {fields?.map((field, index) => (
          <div key={index}>
  <button className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg focus:shadow-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
