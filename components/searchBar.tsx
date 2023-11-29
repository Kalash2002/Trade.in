import React from "react";
import Image from "next/image";
import Search from "@/public/search.svg";
import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  const OnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 bg-white px-1 rounded-lg">
          <Image src={Search} width={22} alt="search icon" />
          <input
            placeholder="search...."
            className="px-2 outline-none text-black py-1 rounded-lg"
            onChange={OnChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
