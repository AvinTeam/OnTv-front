import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="bg-[#F0F2F5] ">
        <div className="dark:bg-base-70 ">
          <div className="container h-[180px] flex justify-center items-center py-4">
            <div className="flex justify-center items-center flex-col">
              <h1 className="mb-3 text-primary text-2xl">درباره آن</h1>
              <p>صفحه اصلی / درباره ما</p>
            </div>
          </div>
        </div>
        <main className="container bg-white p-8 rounded-[5px]">
          <div className="bg-primary">
            <img src="/images/Rectangle 513.png" />
          </div>
          <div className="grid grid-cols-3 items-center justify-center mt-10 mb-20">
            <div className="col-span-1 flex flex-col justify-center items-center">
              <div className="w-[50px] md:w-[61px] md:h-[61px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="6.073 5.162 63.487 64.456"
                >
                  <path
                    d="M37.815 69.618c-15.843 0-28.732-12.89-28.732-28.732 0-15.842 12.89-28.73 28.732-28.73 15.842 0 28.731 12.888 28.731 28.73 0 15.843-12.889 28.732-28.731 28.732Zm0-51.079c-12.322 0-22.347 10.025-22.347 22.347 0 12.321 10.025 22.345 22.347 22.345 12.322 0 22.347-10.024 22.347-22.345 0-12.322-10.025-22.347-22.347-22.347Zm11.972 34.636-.003-.002-15.161-9.097V24.923h4.786v16.76L52.18 49.25l-2.391 3.922-.002.003Zm15.687-30.838-.002-.002L50.755 10.07l4.097-4.907L69.56 17.436l-4.084 4.899-.002.002Zm-55.316 0-.002-.002-4.083-4.902L20.777 5.162l4.092 4.904-14.708 12.27-.003.001Z"
                    fill="#3999a0"
                    fillRule="evenodd"
                    data-name="Icon"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-primary text-sm md:text-lg">زمان کاری</p>
                <p className="text-xs md:text-sm md:w-[102px] text-center mt-2">
                  7 روز در هفته از 10 صبح تا 6 عصر
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <div className="w-[50px] md:w-[61px] md:h-[61px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                  style={{ color: "#B8D958", width: "100%", height: "100%" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-primary text-sm md:text-lg">آدرس ما</p>
                <p className="text-xs md:text-sm md:w-[152px] text-center mt-2">
                  تهران، خیابان هشت آسمان، کوچه 22 ، فرعی25
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <div className="w-[50px] md:w-[61px] md:h-[61px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="462 807 81 81"
                >
                  <g data-name="local_phone">
                    <path
                      d="M462 807h81v81h-81v-81z"
                      fill="rgba(0,0,0,0 )"
                      fillRule="evenodd"
                      data-name="Path"
                    />
                    <path
                      d="M529.611 878c-15.39 0-29.858-5.993-40.738-16.874-10.88-10.88-16.873-25.348-16.873-40.738a3.392 3.392 0 0 1 3.389-3.388h11.861a3.392 3.392 0 0 1 3.389 3.388c0 4.143.65 8.213 1.933 12.096a3.388 3.388 0 0 1-.848 3.46l-7.457 7.454c4.832 9.496 12.764 17.429 22.335 22.331l7.454-7.454a3.48 3.48 0 0 1 2.407-.982c.423 0 .766.055 1.05.168a38.53 38.53 0 0 0 12.098 1.93 3.393 3.393 0 0 1 3.389 3.39v11.827c0 1.87-1.52 3.392-3.389 3.392Zm-12.2-13.49-4.065 4.031a52.305 52.305 0 0 0 12.877 2.544v-5.05a43.103 43.103 0 0 1-8.811-1.526Zm-38.53-40.737a50.432 50.432 0 0 0 2.574 12.847l4.066-4.069a41.734 41.734 0 0 1-1.522-8.778h-5.118Z"
                      fill="#b7d854"
                      fillRule="evenodd"
                      data-name="Icon"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-primary text-sm md:text-lg">نشانی تماس</p>
                <p className="text-xs md:text-sm md:w-[102px] text-center mt-2">
                  +9811346955 +9831246955
                </p>
              </div>
            </div>
          </div>
          <div className="my-14 text-justify">
            <span>
              کاربر گرامی، لطفاً در صورت وجود هرگونه سوال یا ابهامی، قبل از
              استفاده از فرم زیر بخش پرسش‏های متداول سایت را مطالعه بفرمایید و
              در صورتی که پاسخ پرسش خود را نیافتید حتماً با ما تماس بگیرید.
              <span className="text-base-content font-bold">
                درصورت لزوم پاسخ شما از طریق ایمیل و یا شماره تلفنی که در فرم
                زیر ثبت می کنید ارسال خواهد شد.
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center md:gap-4">
            <div className="col-span-6 md:col-span-5 flex flex-col gap-1">
              <select
                name="test"
                className="h-[37px] px-6 rounded-[2px] border focus:outline-none font-normal"
              >
                <option value="volvo">موضوع پیام شما</option>
                <option value="volvo"> آیتم تست </option>
              </select>
              <input
                type="text"
                className="w-full h-[37px] focus:outline-none bg-input-bg rounded-[2px] text-input-text p-6 font-normal"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
              />
              <input
                type="text"
                className="w-full h-[37px] focus:outline-none bg-input-bg rounded-[2px] text-input-text p-6 font-normal"
                placeholder="ایمیل خود را وارد کنید"
              />
              <input
                type="text"
                className="w-full h-[37px] focus:outline-none bg-input-bg rounded-[2px] text-input-text p-6 font-normal"
                placeholder="شماره تلفن خود را وارد کنید"
              />
            </div>
            <div className="col-span-7 flex flex-col gap-1 mt-2 md:mt-0">
              <textarea
                className="w-full md:h-[153px] focus:outline-none bg-input-bg rounded-[2px] text-input-text p-6 font-normal"
                placeholder="پیام خود را وارد کنید"
                name=""
                id=""
              ></textarea>
              <Link
                className="md:w-[150px] h-[40px]  flex text-xs md:text-sm bg-gradient-to-r from-gradient-first to-gradient-second  text-white items-center text-center justify-center rounded-[4px] "
                href={"/"}
              >
                ارسال پیام
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
