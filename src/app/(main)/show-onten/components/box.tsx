"use client"
import React from "react"
const Box: React.FC<{ name: string; title: string }>  = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="h-12 w-12 md:w-16 md:h-16 bg-white rounded-[50%]"></div>
      <div>
        <h5 className="text-white text-md md:text-md lg:text-xl text-nowrap">{name} </h5>
        <p className="font-light text-nowrap text-sm md:text-lg">{title}</p>
      </div>
    </div>
  );
};
export default Box;
