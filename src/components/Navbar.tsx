import React from "react";
import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className=" bg-[#1877f2]  flex justify-between items-center text-white  fixed top-0 left-0 w-[100%] z-10">
  <div>
    <h1 className="font-font text-[#fed32e] text-[36px] font-semibold cursor-pointer">
      <Link href={'/'}>
      
      Guide Me Now
      </Link>
    </h1>
  </div>
  <div className="flex gap-10 items-center">

      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={'/profile'}
      >
        profile
      </Link>
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={""}
      >
        Categories
      </Link>
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={"/documentations"}
      >
        Documentations
      </Link>
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={""}
      >
        Contact us
      </Link>
      <div>
        <SignedIn>
          <UserButton  afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
  </div>
    </div>
  );
}
