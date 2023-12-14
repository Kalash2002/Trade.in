'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';


type ToolType={
    id:number,
    toolName:string,
    icon:StaticImageData,
    url:string
}

const ToolBox = ({id,toolName,icon,url}:ToolType) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="min-w-[18rem] w-[18rem] h-[20rem] bg-violet-950 border border-violet-800 rounded-md border-l hover:bg-violet-800 mt-auto mb-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={icon} alt="" width={250}/>
        <div>{toolName}</div>
      </div>
    </motion.div>
  );
}

export default ToolBox
