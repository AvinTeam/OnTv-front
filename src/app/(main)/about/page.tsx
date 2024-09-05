import {
  HelpIcon,
  PhoneIcon,
  SmsIcon,
  TelegramIcon,
} from "@/app/_components/icons";
import Image from "next/image";
import Link from "next/link";
import enamad from "../../../../public/images/EnamadBackground.png";
import enamadD from "../../../../public/images/samandehi.png";

export default function About() {
  return (
    <>
      <div className="bg-[black] flex justify-between mb-14 flex-col">
        <div className="w-full lg:h-[130vh] xl:h-[125vh] bg-[#3a3a3a] pt-8 pb-10 flex justify-center items-center">
          <div className="max-w-[770px] h-full">
            <div className="flex justify-center items-center flex-col px-1">
              <p className="text-[#e3e3e3] mt-3 text-[0.8rem] md:text-[1rem]">
                پاسخ سوال خود را پیدا نکرده‌اید؟
              </p>
              <p className="mt-3 text-[#d0d0d0] text-[0.9rem] md:text-[1.2rem]">
                با ما گفتگو کنید یا از طریق ارسال ایمیل تماس بگیرید.
              </p>
              <div className="bg-primary w-[60%] md:w-[40%] gap-1.5 h-[36px] flex justify-center items-center mt-4 rounded-3xl text-xs text-[#151515]">
                <HelpIcon width={15} height={15} />
                <p>راهنمای آنلاین آن</p>
              </div>
              <p className="mt-8 text-[#e3e3e3] text-[1rem]">تماس با ما</p>
              <p className="mt-3 text-center text-[#e3e3e3] text-[0.9rem] md:text-[1.1rem]">
                با ارسال ایمیل به بخش مورد نظر خود می‌توانید با فیلیمو در تماس
                باشید
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row mt-3 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:bg-[#282828] [&>*]:py-3 [&>*]:px-3 gap-4 [&>*]:rounded-[4px]">
              <div className="w-[96%] lg:w-[55%] mx-auto">
                <div className="flex w-full flex-col justify-center items-center">
                  <div className="w-12 mb-3 h-12 flex justify-center items-center rounded-full bg-[#3a3a3a]">
                    <SmsIcon width={22} height={22} fill="gray" />
                  </div>
                  <p className="text-[12px] text-center mt-1 text-[#a1a1a1]">
                    با ارسال ایمیل به بخش مورد نظر خود می‌توانید با فیلیمو در
                    تماس باشید.
                  </p>
                </div>
                <div className="w-full gap-3 mt-2 px-3 h-full flex flex-col justify-center items-center">
                  <div className="w-full flex justify-between">
                    <p className="text-[0.8rem] md:text-[0.9rem]">
                      پیشنهادات و انتقادات
                    </p>
                    <p className="text-[0.8rem] md:text-[0.9rem] text-[#e3e3e3] font-light">
                      info [at] filimo [dot] com
                    </p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-[0.8rem] md:text-[0.9rem]">
                      {" "}
                      پشتیبانی سایت{" "}
                    </p>
                    <p className="text-[0.8rem] md:text-[0.9rem] text-[#e3e3e3] font-light">
                      support [at] filimo [dot] com
                    </p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-[0.8rem] md:text-[0.9rem]">
                      {" "}
                      پیگیری پرداخت‌ها{" "}
                    </p>
                    <p className="text-[0.8rem] md:text-[0.9rem] text-[#e3e3e3] font-light">
                      info [at] filimo [dot] com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[96%] mx-auto lg:w-[25%]">
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <div className="w-12 mb-4 h-12 flex justify-center items-center rounded-full bg-[#3a3a3a]">
                    <PhoneIcon width={22} height={22} fill="gray" />
                  </div>
                  <p className="text-[#e3e3e3] cursor-pointer hovexr:text-primary transition-all">
                    021-74524
                  </p>
                </div>
                <div className="w-full px-[21px] -mt-3 py-9 h-full flex flex-col justify-center items-center">
                  <p className="text-[11px] mt-0 md:mt-4 text-center text-[#a1a1a1]">
                    برای پاسخگویی به سوالات شما، همه روزه به صورت 24 ساعته در
                    کنار شما هستیم.
                  </p>
                </div>
              </div>
              <div className="w-[96%] mx-auto lg:w-[20%]">
                <div className="flex flex-col w-full gap-4 justify-center items-center">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#3a3a3a]">
                    <TelegramIcon width={22} height={22} fill="gray" />
                  </div>
                  <p className="text-[#e3e3e3] cursor-pointer hover:text-primary transition-all">
                    ontv-support@
                  </p>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="px-4 py-2">
                    <p className="text-[11px] mt-4 text-center text-[#a1a1a1]">
                      همچنین از طریق تلگرام از ۸ صبح تا ۲ بامداد، پاسخگوی سوالات
                      شما هستیم.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[96%] mx-auto flex flex-col md:flex-row justify-between p-4 mt-4 items-center bg-[#282828] rounded-[4px]">
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="font-bold text-[#e3e3e3]">
                  درخواست اشتراک سازمانی آن
                </p>
                <p className="text-[#e3e3e3] font-light mb-4 md:mb-0">
                  کارکنان، مشتریان و شرکای تجاریتون رو سوپرایز کنید!
                </p>
              </div>
              <div className="">
                <div className="w-[120px] h-[40px] font-bold flex justify-center text-[13px] items-center rounded-3xl overflow-auto bg-[#f1f1f1f1] cursor-pointer hover:bg-[#cecdcd] transition-all text-[#151515]">
                  اطلاعات بیشتر
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[160px] flex flex-col justify-around items-center content-center py-6 bg-[#606060]">
          <p className="text-white -mt-2 text-xs font-light">
            دیگر سرویس‌های صباایده (شرکت فناوران ایده پرداز صبا)
          </p>
          <div className="flex gap-2 -mt-4 justify-center items-center">
            <div>
              <Link
                href={
                  "https://trustseal.enamad.ir/?id=20008&Code=3esN0ssIHUU2WbETYCs"
                }
              >
                <Image src={enamad} width={70} height={70} alt="enamad" />
              </Link>
            </div>
            <div className="mt-3">
              <Link
                href={
                  "https://trustseal.enamad.ir/?id=20008&Code=3esN0ssIHUU2WbETYCs"
                }
              >
                <Image src={enamadD} width={70} height={70} alt="enamad" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
