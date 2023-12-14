import React from 'react'
import { MultipleOptionList } from './constants'
import OptionComp from './optionComp'
import { StaticImageData } from 'next/image';



type optionType = {
  id: number;
  optionName: string;
  icon: StaticImageData;
};
const MultipleOptionComp = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-4xl">One Platform, Multiple Choices!</div>
        <div className='flex'>
          <div className='font-bold'>#KhaataKholaKya </div> - We've got something for everyone
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-7/12">
        {MultipleOptionList.map((option) => (
          <OptionComp
            id={option.id}
            optionName={option.optionName}
            icon={option.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default MultipleOptionComp
