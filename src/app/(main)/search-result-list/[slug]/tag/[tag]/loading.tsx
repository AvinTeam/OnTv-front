const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
      <div className="flex flex-col h-[250px] lg:flex-row items-center justify-between w-full lg:h-14 py-3 bg-base-50 mt-10 rounded-xl">
        <div className="flex w-full lg:flex-row flex-col gap-4 lg:mr-3">
          <div className="w-full lg:w-28 h-10 bg-base-25 rounded-lg"></div>
          <div className="w-full lg:w-28 h-10 bg-base-25 rounded-lg"></div>
          <div className="w-full lg:w-28 h-10 bg-base-25 rounded-lg"></div>
        </div>
        <div className="w-full lg:w-28 h-10 bg-base-25 rounded-lg  lg:ml-3"></div>
      </div>
      <div className="hidden lg:grid grid-cols-8 gap-4 h-full mt-3">
        {[...Array(24)].map((_, index) => (
          <div key={index}>
            <div className="bg-base-50 h-[210px] animate-pulse rounded-lg"></div>
            <div className="bg-base-50 w-20 h-3 mt-1 animate-pulse rounded-lg"></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:hidden gap-4 h-full mt-3">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div className="bg-base-50 h-[210px] animate-pulse rounded-lg"></div>
            <div className="bg-base-50 w-20 h-3 mt-1 animate-pulse rounded-lg"></div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-4 lg:hidden gap-4 h-full mt-3">
        {[...Array(12)].map((_, index) => (
          <div key={index}>
            <div className="bg-base-50 h-[210px] animate-pulse rounded-lg"></div>
            <div className="bg-base-50 w-20 h-3 mt-1 animate-pulse rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
