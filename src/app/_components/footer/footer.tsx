import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-x-auto overflow-visible sm:-mb-4">
      {/* ================== bottom footer section ==================  */}
      <div className="fixed overflow-visible bg-[#0f0f0f] w-full py-[6px] border-t-[#161616] z-50 bottom-0 right-0 left-0">
        <div className="container overflow-visible flex justify-between items-center ">
          <ul className="flex [&>*]:text-[#e8e8e8] [&>*]:cursor-pointer justify-between items-center [&>*]:font-light md:[&>*]:ml-[2px]">
            <li className="hover:bg-[#242424] in py-[4px] px-2 transition-all rounded-md">
              <Link
                className="flex justify-center md:mt-auto items-center gap-1 md:-mr-2 text-nowrap text-[10px]"
                href={"#"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  width={"13px"}
                  height={"13px"}
                >
                  <path d="M15 20.5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2ZM19.5 3.5h-15a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1Z"></path>
                </svg>
                <p>آنلاین</p>
              </Link>
            </li>
            <li className="hover:bg-[#242424] py-[4px] px-2 transition-all rounded-md">
              <Link
                href={"#"}
                className="text-nowrap text-[10px]"
              >
                کانال ها
              </Link>
            </li>
            <li className="hover:bg-[#242424] py-[4px] px-2 transition-all rounded-md">
              <Link
                href={"#"}
                className="text-nowrap text-[10px]"
              >
                زمان پخش
              </Link>
            </li>
            <li className="hover:bg-[#242424] hidden md:block py-[4px] px-2 transition-all rounded-md">
              <Link
                href={"#"}
                className="text-nowrap text-[10px]"
              >
                اخبار صوتی
              </Link>
            </li>
            <li className="hover:bg-[#242424]  hidden md:block  py-[4px] px-2 transition-all rounded-md">
              <Link
                href={"#"}
                className="text-nowrap text-[10px]"
              >
                ویژه ها
              </Link>
            </li>
            <li className="hover:bg-[#242424] hidden md:block py-[4px] px-2 transition-all rounded-md">
              <Link
                href={"#"}
                className="text-nowrap text-[10px]"
              >
                آرشیو محتوایی
              </Link>
            </li>
            <li className="hover:bg-[#242424] mt-1 group flex md:hidden gap-1 justify-center items-center py-[4px] px-2 transition-all rounded-md">
              <p className="text-nowrap text-[10px] ">
                سایر لینک ها
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width={"13px"}
                height={"13px"}
                viewBox="0 0 24 24"
              >
                <path d="M17 16H7a1 1 0 0 1-.77-1.64l5-6a1 1 0 0 1 1.54 0l5 6A1 1 0 0 1 17 16Z"></path>
              </svg>
              <div className="w-[170px] -left-[400px] group-hover:opacity-100 group-hover:right-[150px] p-2 z-[1000] translate-y-[-90px] rounded-md absolute bg-[#0f0f0f] border border-[#282828]  ">
                <ul>
                  <li className="mb-2 hover:bg-[#242424] pr-2 py-[8px] text-[11px] md:text-[12px] flex justify-start transition-all rounded-md">
                    <Link href={"#"}>
                      <p>ویژه ها</p>
                    </Link>
                  </li>
                  <li className="mb-2 hover:bg-[#242424] pr-2 py-[8px] text-[11px] md:text-[12px]  flex justify-starttransition-all rounded-md">
                    <Link href={"#"}>
                      <p>اخبار صوتی</p>
                    </Link>
                  </li>
                  <li className="mb-2 flex justify-start pr-2 hover:bg-[#242424] py-[8px] text-[11px] md:text-[12px] transition-all rounded-md">
                    <Link href={"#"}>
                      <p>آرشیو محتوایی</p>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </li>
          </ul>
          <ul className="flex group relative overflow-visible [&>*]:text-[10px] [&>*]:text-[#e8e8e8] [&>*]:cursor-pointer [&>*]:font-light [&>*]">
            <li className="hover:bg-[#242424] py-[4px] flex justify-center items-center content-center gap-1 -ml-2 px-2 transition-all rounded-md">
              <p className="text-nowrap text-[10px] ">
                شبکه های اجتماعی
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width={"13px"}
                height={"13px"}
                viewBox="0 0 24 24"
              >
                <path d="M17 16H7a1 1 0 0 1-.77-1.64l5-6a1 1 0 0 1 1.54 0l5 6A1 1 0 0 1 17 16Z"></path>
              </svg>
            </li>
            <div className="w-[170px] right-[800px] group-hover:opacity-100 group-hover:-right-16 p-2 z-[1000] left-3 translate-y-[-187px] rounded-md absolute bg-[#0f0f0f] border border-[#282828]  ">
              <ul>
                <li className="mb-2 hover:bg-[#242424] pr-2 py-[8px] text-[11px] md:text-[12px] flex justify-start transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      width={"15px"}
                      height={"15px"}
                      viewBox="0 0 24 24"
                    >
                      <path d="m10.56 2.12-1.93-.51a3.25 3.25 0 0 0-4 2.31l-.46 1.82a10 10 0 0 1 6.39-3.62ZM2.08 13.59l-.47 1.78a3.25 3.25 0 0 0 2.31 4l1.85.49a10 10 0 0 1-3.69-6.27ZM20.08 4.65 18 4.1a9.94 9.94 0 0 1 3.81 6.67l.57-2.14a3.25 3.25 0 0 0-2.3-3.98ZM13.39 21.86l2 .53a3.25 3.25 0 0 0 4-2.31l.56-2.1a10 10 0 0 1-6.56 3.88Z"></path>
                      <path d="M12 2.9a9.1 9.1 0 1 0 9.1 9.1A9.09 9.09 0 0 0 12 2.9ZM6.84 7.44a2.6 2.6 0 1 1 2.07 3 2.6 2.6 0 0 1-2.07-3Zm3.79 7.86a2.6 2.6 0 1 1-2.06-3 2.6 2.6 0 0 1 2.06 3Zm.19-3.45a1.16 1.16 0 1 1 .91 1.35 1.15 1.15 0 0 1-.91-1.35Zm6.34 4.71a2.6 2.6 0 1 1-2.07-3 2.6 2.6 0 0 1 2.07 3Zm1.32-6.88a2.6 2.6 0 1 1-2.06-3 2.6 2.6 0 0 1 2.06 3Z"></path>
                    </svg>
                    <p>آپارات</p>
                  </Link>
                </li>
                <li className="mb-2 hover:bg-[#242424] pr-2 py-[8px] text-[11px] md:text-[12px]  flex justify-starttransition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      width={"15px"}
                      height={"15px"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.48 11 21.1 3.78c.9-.31 1.62.22 1.34 1.52l-3.17 14.94c-.23 1.06-.86 1.32-1.74.82L12.7 17.5l-2.33 2.24a1.23 1.23 0 0 1-1 .48l.35-4.92 9-8.08c.39-.34-.09-.54-.6-.2L7 14l-4.74-1.5c-1-.33-1.06-1 .22-1.53Z"></path>
                    </svg>
                    <p>تلگرام</p>
                  </Link>
                </li>
                <li className="mb-2 flex justify-start pr-2 hover:bg-[#242424] py-[8px] text-[11px] md:text-[12px] transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      width={"15px"}
                      height={"15px"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.63 5.33a8.51 8.51 0 0 1-2.47.7 4.4 4.4 0 0 0 1.9-2.45 8.53 8.53 0 0 1-2.74 1.08 4.21 4.21 0 0 0-6.07-.2 4.45 4.45 0 0 0-1.36 3.21 4.88 4.88 0 0 0 .11 1 12.1 12.1 0 0 1-8.87-4.58A4.49 4.49 0 0 0 4.45 10a4.21 4.21 0 0 1-1.95-.58v.05A4.4 4.4 0 0 0 6 13.8a4.24 4.24 0 0 1-2 .07 4.33 4.33 0 0 0 4 3.07 8.52 8.52 0 0 1-5.33 1.88 8.91 8.91 0 0 1-1-.07 12 12 0 0 0 6.61 2c7.91 0 12.22-6.7 12.23-12.52l.4-.92a8.81 8.81 0 0 0 1.72-1.98Z"></path>
                    </svg>
                    <p>توئیتر</p>
                  </Link>
                </li>
                <li className="mb-2 hover:bg-[#242424] pr-2 flex justify-start text-[11px] md:text-[12px] py-[8px] transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      width={"15px"}
                      height={"15px"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.44 7.68A7.69 7.69 0 0 0 22 5.13a5.32 5.32 0 0 0-3.08-3.08 7.59 7.59 0 0 0-2.54-.49c-1.16-.05-1.52-.06-4.38-.06-2.84 0-3.2 0-4.31.06a7.87 7.87 0 0 0-2.54.51 5.32 5.32 0 0 0-3.1 3.1 7.69 7.69 0 0 0-.49 2.55C1.51 8.84 1.5 9.19 1.5 12s0 3.2.06 4.32a8 8 0 0 0 .53 2.51A5.32 5.32 0 0 0 5.17 22a7.84 7.84 0 0 0 2.54.49c1.11 0 1.47.06 4.31.06s3.2 0 4.31-.06a7.84 7.84 0 0 0 2.54-.49A5.32 5.32 0 0 0 22 18.87a7.69 7.69 0 0 0 .49-2.55c0-1.12.06-1.48.06-4.32s-.05-3.2-.11-4.32Zm-1.94 8.56a5.9 5.9 0 0 1-.36 2 3.49 3.49 0 0 1-2 2 5.38 5.38 0 0 1-1.94.36c-1.1.06-1.43.07-4.23.07s-3.13 0-4.23-.07a5.38 5.38 0 0 1-1.94-.36 3.49 3.49 0 0 1-2-2 5.6 5.6 0 0 1-.36-1.94c-.08-1.11-.08-1.44-.08-4.24s0-3.13.06-4.24a5.63 5.63 0 0 1 .38-1.94 3.48 3.48 0 0 1 2-2 5.85 5.85 0 0 1 1.94-.36c1.1-.08 1.44-.08 4.23-.08s3.13 0 4.23.06a5.85 5.85 0 0 1 1.94.36 3.54 3.54 0 0 1 2 2 5.86 5.86 0 0 1 .36 1.95c.05 1.1.06 1.44.06 4.23s0 3.1-.06 4.2Z"></path>
                      <path d="M12 6.64A5.36 5.36 0 1 0 17.34 12 5.35 5.35 0 0 0 12 6.64Zm0 8.83A3.48 3.48 0 1 1 15.46 12 3.47 3.47 0 0 1 12 15.47ZM17.46 4.86a1.26 1.26 0 1 0 1.26 1.26 1.25 1.25 0 0 0-1.26-1.26Z"></path>
                    </svg>
                    <p>اینستاگرام</p>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};
