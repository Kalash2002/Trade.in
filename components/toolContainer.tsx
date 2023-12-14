import React from "react";
import { ToolList } from "./constants";
import ToolBox from "./toolBox";

const ToolContainer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="text-4xl">Tools and Calculators</div>
      </div>

      <div className="w-10/12 h-[23rem] border border-slate-400 flex rounded-md">
        <div className="flex overflow-x-auto gap-6 ml-4 mr-4 rounded-md scrollbar-hide">
          {ToolList.map((tool) => (
            <ToolBox id={tool.id} toolName={tool.toolName} icon={tool.icon} url={tool.url}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolContainer;
