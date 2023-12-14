'use client'
import React from "react";
import Image from "next/image";
import BGImage from "@/public/dashboardCompImg.png";
import StockBG from "@/public/StockBG.png"
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const DashImageComp = () => {
  return (
    <div className="static w-full flex justify-center items-center">
      <div className="relative">
        <Image
          src={StockBG}
          alt=""
          width={1000}
          className="rounded-xl static brightness-50 shadow-sm shadow-indigo-500 "
        />
        <div className="absolute top-[25rem] z-20">
          <div className="px-16 text-7xl text-white-200">
            #InvestRightInvestNow
          </div>
          <motion.button
            className="mx-16 my-4 px-3 py-3 border rounded-full font-medium hover:bg-indigo-900 hover:opacity-80 hover:transition hover:duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Know About Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DashImageComp;
