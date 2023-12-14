"use client";

import React from "react";
import DashGIF from "@/public/DashImage.gif";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const DashboardGetStart = () => {
  return (
    <div className="my-10 w-10/12">
      <div className="flex gap-12 justify-evenly items-center">
        <div className="w-9/12">
          <Image
            src={DashGIF}
            alt=""
            width={800}
            className="brightness-100 rounded-2xl "
          />
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black h-[10rem]">
            All things finance, right here.
          </p>

          <motion.button
            className="mx-16 my-4 px-3 py-3 text-xl rounded-full font-normal bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 text-white w-[10rem]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
          {/* <Button variant="getStarted">Get Started</Button> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardGetStart;
