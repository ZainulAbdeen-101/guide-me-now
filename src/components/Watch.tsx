"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";
import { WatchProps } from "@/types";


const Watch=({ heading, url }: WatchProps):React.JSX.Element=> {
  const { userId } = useAuth();
  async function courseEnrollData() {
    try {
      const res = await axios.post(
        "/api/playlist",
        {
          heading: heading,
          userid: userId,
          url: url,
          cpercent: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        toast.success("Enrolled sucessfully");
      }
      console.log(res.data);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <>

      <button
        onClick={courseEnrollData}
        className="btn bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black  hover:bg-gradient-to-br focus:outline-none focus:ring-white dark:focus:ring-black shadow-lg  hover:dark:shadow-lgfont-medium rounded-lg text-sm  "
      >

{/* Old Design */}
{/* justify-end px-4 py-2  rounded-lg bg-[#1877f2] text-white */}


        <Link href={`/playlist/${heading}`}>watch playlist</Link>
      </button>
      <Toaster />
    </>
  );
}
export default Watch