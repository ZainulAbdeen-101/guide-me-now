"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiEdit } from "./Icons";
import { Formik } from "formik";
import axios from "axios";
import useSWR, { mutate } from "swr";

export default function Profile({ user }: any) {
  const [edit, setedit] = useState(true);
  // const [data,setdata]=useState<{id:number,userid:string,about:string,skills:string,education:string}[]>()
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/profile", fetcher);
  console.log(data);
  function changeedit() {
    setedit(false);
  }

  interface MyFormValues {
    about: string;
    edu: string;
    com: string;
  }

  const initialValues: MyFormValues = { about: "", edu: "", com: "" };

  return (
    <>
    <div className="flex ">

      <div className="mb-20 w-[300px] shadow-lg   mt-20">
        <div className="">
          <Image
            className="rounded-full"
            src={`${user?.profileImageUrl}`}
            width={100}
            height={200}
            alt=""
          />
        </div>
        <h6 className="text-2xl font-font font-bold">{user?.firstName}</h6>
        <h6 className="text-gray-500 ">@{user?.username}</h6>
        <h6 className="text-base font-medium">
          {user?.emailAddresses[0].emailAddress}
        </h6>
        <hr />

        {edit ? (
          <div className="mt-5 flex justify-between ">
            {data?.map((info: any, index: number) => (
              <div>
                <h6 className=" text-2xl font-semibold font-font ">About</h6>
                {info.about}
                <h6 className="mt-5  text-2xl font-semibold font-font ">
                  Education
                </h6>
                <p>{info.education}</p>
                <h6 className="mt-5  text-2xl font-semibold font-font ">
                  Communication Skills
                </h6>
                <p>{info.skills}</p>
              </div>
            ))}
            <div>
              <BiEdit
                onClick={changeedit}
                className="cursor-pointer"
                size={20}
              />
            </div>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { resetForm }) => {
              try {
                if (user.id !== data[0].userid) {
                  const res = await axios.post(
                    "/api/profile",
                    {
                      userid: user.id,
                      about: values.about,
                      education: values.edu,
                      communication: values.com,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  console.log(res.status);
                } else {
                  const res = await axios.patch(
                    "/api/profile",
                    {
                      userid: user.id,
                      about: values.about,
                      education: values.edu,
                      communication: values.com,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  console.log(res.status);
                  mutate("/api/profile");
                }

                setedit(true);
              } catch (error: any) {
                if (error.response) {
                  console.log(error.response);
                  console.log("server responded");
                } else if (error.request) {
                  console.log("network error");
                } else {
                  console.log(error);
                }
              }

              console.log(values);
            }}
          >
            {({
              values,
              resetForm,
              handleChange,
             
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-baseline mt-5">
                  <h6 className=" text-2xl font-semibold font-font ">About</h6>
                  <BiEdit
                    onClick={changeedit}
                    className="cursor-pointer"
                    size={20}
                  />
                </div>
                <textarea
                  name="about"
                  onChange={handleChange}
                  value={values.about}
                  disabled={edit}
                  placeholder="Tell us About yourself"
                  className="mt-3 textarea textarea-bordered textarea-md w-[85%] max-w-xs"
                ></textarea>
                <h6 className="mt-5  text-2xl font-semibold font-font ">
                  Education
                </h6>
                <select
                  name="edu"
                  onChange={handleChange}
                  value={values.edu}
                  disabled={edit}
                  className="mt-5 mb-5 select select-bordered w-[85%] max-w-xs"
                >
                  <option selected>choose one</option>
                  <option>Middle</option>
                  <option>Matriculation</option>
                  <option>Intermediate</option>
                  <option>Bachelors</option>
                </select>

                <h6 className="mt-5  text-2xl font-semibold font-font ">
                  Communication Skills
                </h6>
                <select
                  onChange={handleChange}
                  value={values.com}
                  name="com"
                  disabled={edit}
                  className="mt-5 mb-5 select select-bordered w-[85%] max-w-xs"
                >
                  <option selected>choose one</option>
                  <option>Beginner</option>
                  <option>Elementary</option>
                  <option>Fluent</option>
                  <option>Expert</option>
                </select>

                <button type="submit" className="btn ">
                  save
                </button>
                <button
                  onClick={() => {
                    resetForm();
                    setedit(true);
                  }}
                  className="btn "
                >
                  cancel
                </button>
              </form>
            )}
          </Formik>
        )}
      </div>
      <div className="flex mt-20  bg-green-300">
<div className="">
<h1>Course</h1>

</div>
<div className="">
<h1>
  Quiz
</h1>
</div>
      </div>
    </div>
    </>
  );
}
