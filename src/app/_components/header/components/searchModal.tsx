import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Slider } from "../../slider/slider";
import { CloseIcon } from "../../icons";
import Link from "next/link";
import axios from "axios";
import Nodata from "./no-data";
import { API_URL } from "@/configs/global";

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [serviceList, setServiceList] = useState<any[]>([]);
  const [value, setValue] = useState<string>("")
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);
  useEffect(()=>{
    axios.get(`${API_URL}service/publicIndex`).then(({data})=>{
      console.log(data)
      setServiceList(data?.services)
    })
  },[])
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
              className="w-[350px] md:w-[600px] lg:w-[900px] text-base-content-bg font-light h-[20px] lg:h-[45px] p-3 rounded-md bottom-1 border border-base-25 text-black bg-[transparent] outline-none"
            />
            {false ? (
              <div className="flex justify-center items-center mt-16">
              <Nodata />
              </div>
            ) : (
              <>
                <div className="h-16 mt-6 w-[350px] md:w-[600px] lg:w-[900px]">
                  <Slider
                    isShowIcon
                    Component={({ data }) => {
                      return (
                        <Link
                          href={`/all-program/${data?.name}`}
                          onClick={handleClose}
                          className="border cursor-pointer text-sm font-light rounded-md text-[#b3b3b3] py-1.5 flex justify-center items-center hover:border-[gray] border-base-25"
                        >
                          {data?.name}
                        </Link>
                      );
                    }}
                    data={serviceList}
                    displayCount={6}
                    smCount={3.5}
                  />
                </div>
                <p className="pt-4 text-xs lg:text-lg text-base-content-bg">
                  تاریخچه جستجو
                </p>
                <p className="pt-4 text-base-content text-xs lg:text-[1rem] font-light">
                  در این لیست فیلم هایی که جستجو میکنید ذخیره میشود
                </p>
              </>
            )}
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
