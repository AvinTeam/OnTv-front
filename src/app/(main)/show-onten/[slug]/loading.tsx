const loading = () => {
  return (
    <div className="w-full container h-full bg-gray-200 p-4">
      <div className="flex gap-4 mr-2 md:mr-12 mt-16 lg:mt-4 h-[150px] md:h-[180px]">
        <div className="h-32 md:h-40 w-32 md:w-40 bg-base-50 animate-pulse rounded-lg"></div>
        <div className="flex flex-col gap-4 mt-5">
          <div className="h-3 w-40 md::w-60 bg-base-50 animate-pulse rounded-lg"></div>
          <div className="h-2 w-32 md:w-40 bg-base-50 animate-pulse rounded-lg"></div>
          <div className="flex">
            <div className="ml-3 w-12 md:w-16 h-5 rounded-2xl bg-base-50"></div>
            <div className="w-12 md:w-16 h-5 rounded-2xl bg-base-50"></div>
          </div>
          <div className="h-2 w-32 bg-base-50 animate-pulse rounded-lg"></div>
        </div>
      </div>
      <div className="hidden md:block mt-32 lg:mt-2 h-[200px] w-full">
        <div className="h-2 w-20 bg-base-50 animate-pulse rounded-lg"></div>
        <div className="grid grid-cols-5 gap-4 h-20 lg:h-32 mt-3">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-base-50 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </div>
      <div className="md:hidden mt-12 h-[100px] w-full">
        <div className="h-2 w-20 bg-base-50 animate-pulse rounded-lg"></div>
        <div className="grid grid-cols-3 gap-4 h-20 lg:h-32 mt-3">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-base-50 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-12 lg:mt-2 h-[80px] md:h-[200px] flex justify-between">
        <div className="flex gap-3">
          <div className="bg-base-50 animate-pulse w-12 md:w-16 h-12 md:h-16 rounded-full"></div>
          <div className="mt-3">
            <div className="h-3.5 w-40 bg-base-50 animate-pulse rounded-lg"></div>
            <div className="h-3 w-60 mt-1.5 bg-base-50 animate-pulse rounded-lg"></div>
          </div>
        </div>
        <div className="hidden md:flex gap-3">
          <div className="bg-base-50 animate-pulse w-16 h-16 rounded-full"></div>
          <div className="mt-3">
            <div className="h-3.5 w-40 bg-base-50 animate-pulse rounded-lg"></div>
            <div className="h-3 w-60 mt-1.5 bg-base-50 animate-pulse rounded-lg"></div>
          </div>
        </div>
        <div className="hidden lg:flex gap-3">
          <div className="bg-base-50 animate-pulse w-16 h-16 rounded-full"></div>
          <div className="mt-3">
            <div className="h-3.5 w-40 bg-base-50 animate-pulse rounded-lg"></div>
            <div className="h-3 w-60 mt-1.5 bg-base-50 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
