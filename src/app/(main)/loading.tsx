import React from 'react'

const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
       <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 h-[55vh] 2xl:h-[70vh] ">
         <div className="lg:col-span-2 row-span-3 lg:row-span-2 lg:h-full bg-base-50 animate-pulse rounded-lg"></div>
         <div className="bg-base-50 h-auto animate-pulse rounded-lg"></div>
        <div className="bg-base-50 h-auto animate-pulse rounded-lg"></div>
      </div>

       <div className="grid grid-cols-5 gap-4 h-24 lg:h-32 mt-3">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="bg-base-50 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </div>
   )
}

export default loading