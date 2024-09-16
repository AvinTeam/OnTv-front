import React from "react";

function Loading() {
  return (
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
  );
}

export default Loading;
