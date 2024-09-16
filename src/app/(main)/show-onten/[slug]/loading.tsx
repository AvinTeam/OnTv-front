import React from "react";

const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
      <div className="flex gap-4 mr-24 mt-12">
        <div className="h-80 w-60 bg-base-50 animate-pulse rounded-lg"></div>
        <div className="flex flex-col gap-4 mt-28">
        <div className="h-4 w-60 bg-base-50 animate-pulse rounded-lg"></div>
        <div className="h-3 w-40 bg-base-50 animate-pulse rounded-lg"></div>
           <div className="flex">
           <div className="ml-3 w-20 h-6 rounded-2xl   bg-base-50"></div>
           <div className="w-20 h-6 rounded-2xl   bg-base-50"></div>
           </div>
         <div className="h-2 w-32 bg-base-50 animate-pulse rounded-lg"></div>
        </div>
         
      </div>
 
    </div>
  );
};

export default loading;
