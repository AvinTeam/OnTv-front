import React from "react";

const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
      <div className="flex gap-2 flex-col lg:flex-row h-full">
        <div className="w-full lg:w-[80%] h-full my-8 lg:my-0">
          <div className="bg-base-50 h-[70%] animate-pulse rounded-lg"></div>
          <div className="w-full h-30% mt-8 lg:mt-3">
            <div className="w-40 h-3 rounded-md bg-base-50 animate-pulse"></div>
            <div className="w-32 h-3 rounded-md bg-base-50 animate-pulse my-3"></div>
            <div className="w-full h-full flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="w-12 h-12 bg-base-50 animate-pulse rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <div className="w-28 rounded-md h-3 bg-base-50 animate-pulse"></div>
                  <div className="w-16 rounded-md h-3 bg-base-50 animate-pulse"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 lg:w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
                <div className="w-10 lg:w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
                <div className="w-10 lg:w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full hidden lg:flex flex-col gap-2">
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
        </div>
        <div className="grid grid-cols-2 lg:hidden gap-4 h-full mt-3">
          {[...Array(2)].map((_, index) => (
            <div key={index}>
              <div className="bg-base-50 h-[210px] animate-pulse rounded-lg"></div>
              <div className="bg-base-50 w-20 h-3 mt-1 animate-pulse rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
