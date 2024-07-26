import { useEffect } from "react";
import { createPortal } from "react-dom";

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);
  const handleClose = () => {
    onClose();
    document.body.style.overflow = "auto";
  };
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed bg-[black] w-full h-full bg-opacity-90 z-[1000] flex items-center justify-around">
      <div className="container flex items-start justify-center w-full h-full mt-48 mx-auto p-4 text-white relative">
        <div className="flex flex-row-reverse">
          <input
            type="text"
            placeholder="جستجو..."
            className="lg:w-[900px] lg:h-[45px] p-4 rounded-md bottom-1 border border-base-content-bg text-black bg-[transparent] outline-none"
          />
          <button
            className="absolute cursor-pointer mr-[80%] -mt-16 w-10 h-10 flex justify-center items-center rounded-[50%] bg-[hsla(0,0%,100%,.12)] text-2xl"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="m13.41 12 6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default SearchModal;
