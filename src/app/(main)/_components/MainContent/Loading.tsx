function Loading() {
  return (
    <>
      <div className="hidden lg:block w-full container h-full bg-gray-200 p-4">
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
      <div className="block lg:hidden w-full container h-full bg-gray-200 p-4">
        <div className="flex flex-col gap-2 h-[60vh] w-full">
          <div className="h-[70%] bg-base-50 animate-pulse rounded-lg"></div>
          <div className="flex h-[30%] w-full gap-2">
            <div className="bg-base-50 h-auto w-[50%] animate-pulse rounded-lg"></div>
            <div className="bg-base-50 h-auto w-[50%] animate-pulse rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 h-32 mt-3">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-base-50 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Loading;
