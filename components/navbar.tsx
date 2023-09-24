'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarMenu from './navbarMenu'

const Navbar = () => {
  return (
    <div className=" flex flex-row w-full items-center justify-between">
      <div className="hover:bg-black hover:shadow-3xl h-full p-2 rounded-r-full">
        <Link
          href="/"
          className="flex flex-row mr-2 pl-0 items-center justify-center"
        >
          <div className="relative h-12 w-12 ml-2 mr-4">
            <Image fill src="/logo.svg" alt="logo" />
          </div>
          <h1 className="text-violet-400 font-medium text-lg">Trade.in</h1>
        </Link>
      </div>
      <NavbarMenu/>
      <div>search</div>
      <div>signIN</div>
    </div>
  );
}

export default Navbar
