import React from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex gap-16  justify-center text-white py-[12px] fixed top-0 left-0 w-[100%] z-10">
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={""}
      >
        Home
      </Link>
      <Link
        className="transition ease-in-out duration-200 hover:text-[#fed32e] font-semibold"
        href={""}
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
        href={""}
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
  );
}
