import Link from "next/link";
import Image from "next/image";
export const Header: React.FC = () => {
  return (
    <header className="to-80% md:to-40% bg-gradient-to-r from-gradient-second to-gradient-first overflow-auto">
      <div className="container mx-auto grid grid-cols-[auto_auto] md:grid-cols-[auto_1fr_auto] justify-between items-center gap-4">
        {/* ================= mobole menue =============== */}
        <div className="md:hidden mr-6 bg-base-content-bg p-2 text-base-content rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width={"30px"}
            height={"30px"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="flex md:mr-10 ml-2 h-[78px] mr-auto w-20 py-2.5 justify-center items-center md:dark:bg-primary">
          <Image
            alt="OnTVLogo"
            width={60}
            height={60}
            src={"/images/android-chrome-192x192.png"}
          />
        </div>
        <nav className="hidden md:flex justify-start">
          <ul className="flex justify-between gap-4 text-primary-content">
            <li className="mr-4">
              <Link href="#" className="hover:underline">
                آن لاین
              </Link>
            </li>
            {/* <li className="flex justify-center items-center gap-1">
              <Link href="#" className="hover:underline">
                کانال ها
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "}
            </li>
            <li>
              <Link href="#" className="hover:underline">
                زمان پخش
              </Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link href="#" className="hover:underline">
                اخبار صوتی
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "}
            </li>
            <li>
              <Link href="#" className="hover:underline">
                ویژه ها
              </Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link href="#" className="hover:underline">
                آرشیو محتوای
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "}
            </li> */}
          </ul>
        </nav>
        <div className="hidden md:flex text-primary-content justify-end ml-10">
          پخش آزمایشی
          {/* <Link
            href="/signin"
            className="px-4 py-2 bg-transparent text-secondary-content border border-text-secondary-content border-spacing-1 text-black rounded-md hover:bg-gray-100"
          >
            ورود/ثبت نام
          </Link> */}
        </div>
      </div>
    </header>
  );
};
