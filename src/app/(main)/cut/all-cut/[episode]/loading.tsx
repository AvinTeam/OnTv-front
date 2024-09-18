const loading = () => {
  return (
    <div className="w-full container h-screen bg-gray-200 p-4">
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
