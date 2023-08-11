"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";
import { WatchProps } from "@/types";


export default function Watch({ heading, url }: WatchProps) {
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
        className=" justify-end px-4 py-2  rounded-lg bg-[#1877f2] text-white"
      >
        <Link href={`/playlist/${heading}`}>watch playlist</Link>
      </button>
      <Toaster />
    </>
  );
}
