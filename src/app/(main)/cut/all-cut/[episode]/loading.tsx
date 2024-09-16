import React from "react";

const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
      <div className="grid grid-cols-8 gap-4 h-full mt-3">
        {[...Array(24)].map((_, index) => (
          <div>
            <div
              key={index}
              className="bg-base-50 h-[210px] animate-pulse rounded-lg"
            ></div>
            <div
              key={index}
              className="bg-base-50 w-20 h-3 mt-1 animate-pulse rounded-lg"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
