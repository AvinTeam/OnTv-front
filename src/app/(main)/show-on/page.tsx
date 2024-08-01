import Image from "next/image";
import Live from "./_components/live";
import dataDec1 from "../../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../../public/images/Mask Group 33.png";
import { Slider } from "@/app/_components/slider/slider";
import { SpecialCard } from "@/app/_components/cards/special-card";
import Link from "next/link";
import { NewestCard } from "@/app/_components/cards/newest-card";
const dataDec: any[] = [
  {
    path: dataDec1,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec2,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
export default function ShowOn() {
  return (
    <main>
      <div className="bg-base-75">
        <div className="bg-gradient-to-l to-80% from-[#341173] to-[#221D1F] h-[460px] md:h-[620px] lg:h-[140vh]">
          <div className="container mx-auto my-5 lg:grid lg:grid-cols-12 gap-2 min-h-screen">
            <div className="flex flex-col lg:col-span-9">
              <div className="sm:mt-2">
                <Live />
              </div>
              <div className="mt-2 text-white rounded-[12px] py-3 px-4 mg:px-6">
                <div className="flex flex-col justify-between">
                  <h1 className="text-link-footer-title text-[11px] md:text-sm lg:text-xl">
                    مجری شبکه ورزش به حواشی پرونده فساد در فوتبال واکنش نشان داد
                  </h1>
                  <p className="text-[#606770] text-xs md:text-sm mt-3">
                    طلب آمرزش، عرض تسلیت، ابراز همدردی، توجه به حضور پرشور مردم
                    در مراسم تشییع شهدای خدمت، حمایت شهید جمهور از فلسطین و
                    معمای انگشتر ایشان
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="w-10 h-10 bg-white rounded-[50%]"></div>
                      <div>
                        <h5 className="text-xs lg:text-lg text-nowrap">
                          برنامه تکیه
                        </h5>
                        <p className="text-[#B3BAC4] text-xs lg:text-sm text-nowrap">
                          شبکه آن هیئت
                        </p>
                      </div>
                    </div>
                    <div className="flex sm:flex-col md:flex-row flex-col-reverse items-end gap-3 justify-center md:items-center">
                      <div className="flex gap-1 text-[#B3BAC4] text-sm cursor-pointer ">
                        <span>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                                stroke="#B3BAC4"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                              <path
                                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                                stroke="#B3BAC4"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <p className="text-xs lg:text-sm text-nowrap">دانلود</p>
                      </div>
                      <div className="flex gap-1 text-[#B3BAC4] text-sm cursor-pointer">
                        <span>
                          <svg
                            viewBox="0 0 24 24"
                            width={20}
                            height={20}
                            fill="#B3BAC4"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                                fill="B3BAC4"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p className="text-xs lg:text-sm text-nowrap">
                          اشتراک گزاری
                        </p>
                      </div>
                      <div className="md:bg-box-slider-bg-text text-nowrap h-7 text-box-slider-text-l md:py-1.5 md:px-6 text-[11px] md:mr-auto md:rounded-[20px]">
                        <span>22 دقیقه پیش</span> <span> | </span>
                        <span> 17,526 نمایش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-screen md:w-full container px-3 md:px-0 overflow-auto pt-16 pb-4 mb-4">
                <div className="flex w-full justify-between my-3  md:pb-1 items-center">
                  <p className="text-white text-sm md:text-lg">
                    برش های برنامه
                  </p>
                  <Link
                    href={"#"}
                    className="text-[#3FB2DA] text-[11px] md:text-[13px] lg:text-[13px] flex gap-1 justify-center items-center"
                  >
                    نمایش همه
                    <div className="rotate-180">
                      <svg
                        fill="#3FB2DA"
                        height="8px"
                        width="8px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.005 512.005"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="h-[170px] md:h-[150px] lg:h-[160px] 2xl:h-[200px] w-full">
                  <Slider
                    Component={SpecialCard}
                    data={dataDec}
                    displayCount={5}
                    isShowIcon
                  />
                </div>
              </div>
              <div className="w-screen lg:hidden md:w-full container px-3 md:px-0 overflow-auto pt-2 pb-10 mb-9">
                <div className="flex w-full justify-between my-3  md:pb-1 items-center">
                  <p className="text-white text-sm md:text-lg">جدیدترین ها </p>
                  <Link
                    href={"#"}
                    className="text-[#3FB2DA] text-[11px] md:text-[13px] lg:text-[13px] flex gap-1 justify-center items-center"
                  >
                    نمایش همه
                    <div className="rotate-180">
                      <svg
                        fill="#3FB2DA"
                        height="8px"
                        width="8px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.005 512.005"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="h-[210px] md:h-[270px] lg:h-[160px] 2xl:h-[200px] w-full">
                  <Slider
                    Component={NewestCard}
                    data={dataDec}
                    smCount={1.5}
                    mdCount={2.5}
                    displayCount={5}
                    isShowIcon
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block col-span-10 lg:col-span-3 rounded-[12px] overflow-auto p-2 md:h-[500px] lg:h-[1100px] xl-h-[1500px]">
              <p className="mb-2 text-base-content-slider">جدیدترین ها</p>
              <div className="mt-4">
                {dataDec?.map((item, idx) => (
                  <div key={idx} className="rounded-md mb-2 overflow-auto">
                    <div className="rounded-md overflow-auto h-[140px]">
                      <Image
                        src={item.path}
                        width={0}
                        height={0}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pb-[9px] md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                      <div className=" flex flex-col md:mt-4 md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-4">
                        <div className="col-span-3 mb-1 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-1 md:flex md:justify-center text-[10px] md:rounded-[20px]">
                          {item?.descriptions?.title}
                        </div>
                        <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                          <span>22 دقیقه پیش</span> <span> | </span>{" "}
                          <span> 17,526 نمایش</span>
                        </div>
                      </div>
                      <div className=" mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                        <h3 className="mb-1 text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                          {item?.descriptions?.dec}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
