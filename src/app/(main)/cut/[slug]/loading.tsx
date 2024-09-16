import React from "react";

const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
      <div className="flex gap-2 h-full">
        <div className="w-[80%] h-full">
          <div className="bg-base-50 h-[70%] animate-pulse rounded-lg"></div>
          <div className="w-full h-30% mt-6">
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
                <div className="w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
                <div className="w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
                <div className="w-16 h-6 rounded-md bg-base-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full flex flex-col gap-2">
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
          <div className="bg-base-50 w-full h-full animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
