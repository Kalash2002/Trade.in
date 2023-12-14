'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarMenu from './navbarMenu'
import SearchBar from './searchBar'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className="fixed flex flex-row w-full items-center justify-between bg-[#111827] text-white opacity-90 z-50">
      <div className="hover:cursor-pointer w-1/2 hover:shadow-3xl h-full md:w-1/5 p-2 rounded-r-full">
        <Link
          href="/"
          className="flex flex-row mr-2 pl-0 justify-start items-center md:justify-center"
        >
          <div className="relative h-12 w-12 ml-2 mr-4">
            <Image fill src="/logo.svg" alt="logo" />
          </div>
          <h1 className="text-violet-400 font-medium text-lg">Trade.in</h1>
        </Link>
      </div>
      {/* Deskop view navbar */}

      <div className=" hidden w-full md:flex md:flex-row md:justify-between ">
        <NavbarMenu />
        <SearchBar />
        <Button variant="premium" className="rounded-full mx-12">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Navbar
