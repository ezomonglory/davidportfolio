import React from 'react';

const IntersectingLines = () => {
  return (
    <div className="relative h-screen ">
      <div className="absolute inset-0 flex items-start justify-start ">
        {/* Horizontal Line */}
        <div className="absolute w-full  mt-[32px]  h-1 bg-gray-500"></div>
        
        {/* Vertical Line */}
        <div className="absolute h-full w-1 ml-[80px] bg-gray-500"></div>
        <div className="absolute h-full w-1 right-0 mr-[80px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default IntersectingLines;