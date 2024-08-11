interface LoadingSpinnerProps {
    message?: string;
  }
  
  const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center mr-0 md:mr-52">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="animate-spin h-12 w-12 text-white"
          >
            <g fill="#ffffff" fillRule="evenodd" clipRule="evenodd">
              <path
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                opacity=".2"
              ></path>
              <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
            </g>
          </svg>
          {message && <p className="mt-4 text-white text-lg">{message}</p>}
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner; 