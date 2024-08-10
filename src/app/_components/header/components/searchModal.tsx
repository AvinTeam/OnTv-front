import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Slider } from "../../slider/slider";
import { CloseIcon } from "../../icons";
const dataDec5: any[] = [
  { title: "سیاسی" },
  { title: "اجتماعی" },
  { title: "فرهنگی" },
  { title: "تخیلی" },
  { title: "علمی" },
  { title: "هنری" },
  { title: "انتخابات" },
  { title: "انتخابات" },
  { title: "انتخابات" },
  { title: "انتخابات" },
];
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
    <div className="fixed bg-[black] w-full h-full z-[1000] left-0 bottom-0 top-0 right-0 flex items-center justify-around">
      <div className="mx-auto flex items-start justify-center w-full h-full mt-48 p-4 text-white relative">
        <div className="flex relative ">
          <div className="h-[400px]">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-[350px] md:w-[600px] lg:w-[900px] h-[20px] lg:h-[45px] p-4 rounded-md bottom-1 border border-base-content-bg text-black bg-[transparent] outline-none"
            />
            <div className="h-16 mt-6 w-[350px] md:w-[600px] lg:w-[900px]">
              <Slider
                isShowIcon
                Component={({ title }: any) => (
                  <div className="border cursor-pointer rounded-md py-2 flex justify-center items-center hover:border-white border-[gray]">
                    {title}
                  </div>
                )}
                data={dataDec5}
                displayCount={8}
              />
            </div>
            <p className="pt-4 font-bold">تاریخچه جستجو</p>
            <p className="pt-4 text-base-content text-md">
              در این لیست فیلم هایی که جستجو میکنید ذخیره میشود
            </p>
          </div>
          <button
            className="absolute cursor-pointer mr-[90%] md:mr-[95%] -mt-16 w-10 h-10 flex justify-center items-center rounded-[50%] bg-[hsla(0,0%,100%,.12)] text-2xl"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default SearchModal;
