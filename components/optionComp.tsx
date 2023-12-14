'use client'

import Image, { StaticImageData } from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'


type option = {
  id: number;
  optionName: string;
  icon: StaticImageData
};

const OptionComp = ({id,optionName,icon}:option) => {

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-[16rem] h-[14rem] flex flex-col items-center justify-center gap-5 rounded-md bg-violet-950 hover:bg-violet-900"
    >
      <Image src={icon} width={120} alt="" />
      <div className="font-medium text-xl">{optionName}</div>
    </motion.div>
  );
}

export default OptionComp
