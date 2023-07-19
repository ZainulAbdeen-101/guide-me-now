"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Page(): React.JSX.Element {
  const [info, setInfo] = useState("");
  const [data1, setData1] = useState<string[]>();
  const [fields, setFields] = useState<string[]>();
  const [option, setOption] = useState<string[]>();

  const devOptions = [
    "web development",
    "mobile development",
    "Software development",
  ];
  const frontendOptions = [
    "frontend-basic",
    "frontend-intermediate",
    "frontend-advanced",
  ];
  const backendOptions = ["backend-basic", "backend-advanced"];
  const webDesOptions = ["web design", "UI/UX design", "graphic design"];

  const setOptionAndData = (options: string[], data: string[]) => {
    setOption(options);
    setData1(data);
    setFields([]);
  };

  function handleWebSelection(index: number) {
    const webData = [
      ["frontend", "backend"],
      ["Android-Development", "IOS-Development", "Cross-Plateform"],
      ["software design", "development"],
    ];
    if(index==0){

      setOptionAndData(["Web development"], webData[index]);
    }else  if(index==1){

      setOptionAndData(["Mobile development"], webData[index]);
    }else if(index==2){

      setOptionAndData(["software development"], webData[index]);
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
      <button onClick={() => setOptionAndData(devOptions, [])}>
        Development
      </button>
      <button onClick={() => setOptionAndData([], webDesOptions)}>
        Designing
      </button>

      {option?.map((option, index) => (
        <div key={index}>
          <button onClick={() => handleWebSelection(index)}>{option}</button>
        </div>
      ))}

      {data1?.map((data, index) => (
        <div key={index}>
          <button onClick={() => handleFieldSelection(data)}>{data}</button>
        </div>
      ))}

      {fields?.map((field, index) => (
        <div key={index}>
          <button onClick={() => handleDataSelection(field)}>{field}</button>
        </div>
      ))}

      <Link href={`/content/${info}`}>Continue</Link>
    </>
  );
}
