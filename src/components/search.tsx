"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const [searchText, setsearchText] = useState("");
  const initialRender = useRef(true);
  const [query] = useDebounce(searchText, 500);
  console.log("searchText", searchText);
  useEffect(() => {
    // if (initialRender.current) {
    //     initialRender.current = false
    //     return
    //   }
    if (query) {
      router.push(`/documentations?search=${searchText}`);
    } else {
      router.push("/documentations");
    }
  }, [query, router, searchText]);

  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-2 w-[300px] p-1 rounded-lg focus:border-black"
          placeholder="search..."
          onChange={(e) => setsearchText(e.target.value)}
          value={searchText}
        />
      </div>
    </>
  );
};

export default Search;
