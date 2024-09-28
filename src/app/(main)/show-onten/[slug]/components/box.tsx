"use client";

import { useEffect } from "react";

const Box = (data: any) => {
  const { name, family, position } = data?.data;
  useEffect(() => {}), [];
  return (
    <div className="flex gap-4 w-full">
      <div className="h-12 w-12 md:w-16 md:h-16 bg-white rounded-[50%]"></div>
      <div>
        <h5 className="text-white text-sm md:text-md lg:text-xl text-nowrap">
          {`${name} ${family}`}{" "}
        </h5>
        <p className="font-light text-nowrap text-sm md:text-lg">{position}</p>
      </div>
    </div>
  );
};
export default Box;
