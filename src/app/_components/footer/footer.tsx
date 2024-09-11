import Link from "next/link";
import TvIcon from "../icons/Tv";
import {
  AparatIcon,
  ArrowTopIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

export const Footer = ({ footerMenueItems }: { footerMenueItems: any[] }) => {
  return (
    <footer className="fixed overflow-x-auto w-full overflow-visible sm:-mb-4  z-[1000]">
      {/* ================== bottom footer section ==================  */}
      <div className="fixed overflow-visible bg-[#0f0f0f] w-full py-[6px] border-t-[#161616] bottom-0 right-0 left-0">
        <div className="container overflow-visible flex justify-between items-center ">
          <ul className="flex [&>*]:text-[#e8e8e8] [&>*]:cursor-pointer justify-between items-center [&>*]:font-light md:[&>*]:ml-[2px]">
            <li className="hover:bg-[#242424] in py-[4px] px-2 transition-all rounded-md">
              <Link
                className="flex justify-center md:mt-auto items-center gap-1 md:-mr-2 text-nowrap text-[10px]"
                href={"#"}
              >
                <TvIcon />
                <p>آنلاین</p>
              </Link>
            </li>
            {footerMenueItems?.map((item, idx) => (
              <li
                key={item?.id}
                className={`hover:bg-[#242424] ${
                  idx > 1 ? "hidden" : ""
                } md:block py-[4px] px-2 transition-all rounded-md`}
              >
                <Link
                  href={`${
                    item?.url
                      ? item?.url
                      : `/all-program/${item?.service?.slug}/tag/all`
                  }`}
                  className="text-nowrap text-[10px]"
                >
                  {item?.name}
                </Link>
              </li>
            ))}
            {footerMenueItems?.length > 2 && (
              <li className="relative hover:bg-[#242424] mt-1 group flex md:hidden gap-1 justify-center items-center py-[4px] px-2 transition-all rounded-md">
                <p className="text-nowrap text-[10px] ">سایر لینک ها</p>
                <ArrowTopIcon />
                <div className="w-[170px] hidden p-2 z-[1000] group-hover:block rounded-md absolute bottom-10 bg-[#0f0f0f] border border-[#282828]  ">
                  <ul>
                    {footerMenueItems?.slice(2)?.map((item) => (
                      <>
                        <li
                          key={item?.id}
                          className="mb-2 flex justify-start pr-2 hover:bg-[#242424] py-[8px] text-[11px] md:text-[12px] transition-all rounded-md"
                        >
                          <Link
                            href={`${
                              item?.url
                                ? item?.url
                                : `/all-program/${item?.service?.slug}/tag/all`
                            }`}
                          >
                            <p> {item?.name}</p>
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </li>
            )}
          </ul>
          <ul className="flex group relative overflow-visible [&>*]:text-[10px] [&>*]:text-[#e8e8e8] [&>*]:cursor-pointer [&>*]:font-light [&>*]">
            <li className="hover:bg-[#242424] py-[4px] flex justify-center items-center content-center gap-1 -ml-2 px-2 transition-all rounded-md">
              <p className="text-nowrap text-[10px] ">شبکه های اجتماعی</p>
              <ArrowTopIcon />
            </li>
            <div className="w-[170px] right-[800px] group-hover:opacity-100 group-hover:-right-16 p-2 z-[1000] left-3 translate-y-[-187px] rounded-md absolute bg-[#242424] border border-[#282828]">
              <ul>
                <li className="mb-2 hover:bg-[#101010] pr-2 py-[8px] text-[11px] md:text-[12px] flex justify-start transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <AparatIcon />

                    <p>آپارات</p>
                  </Link>
                </li>
                <li className="mb-2 hover:bg-[#101010] pr-2 py-[8px] text-[11px] md:text-[12px]  flex justify-starttransition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <TelegramIcon />
                    <p>تلگرام</p>
                  </Link>
                </li>
                <li className="mb-2 flex justify-start pr-2 hover:bg-[#101010] py-[8px] text-[11px] md:text-[12px] transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <TwitterIcon />
                    <p>توییتر</p>
                  </Link>
                </li>
                <li className="mb-2 hover:bg-[#101010] pr-2 flex justify-start text-[11px] md:text-[12px] py-[8px] transition-all rounded-md">
                  <Link
                    href={"#"}
                    className="flex justify-center items-center gap-1"
                  >
                    <InstagramIcon />
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
