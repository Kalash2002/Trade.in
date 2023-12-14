import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-[#111827] overflow-x-auto text-white">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default layout
