import Link from "next/link";
import React from "react";
const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="bg-base-70 w-72 mt-4 rounded-lg mr-7 h-[500px] p-4 self-stretch">
        <div className="flex flex-col gap-4 h-[80%] select-none">
          <ul className="flex flex-col gap-4 text-sm justify-center items-center">
            <div className="w-14 overflow-hidden h-14 bg-[gray] flex justify-center items-center rounded-full">
              <svg
                width={60}
                height={60}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#5C5C5C"></circle>
                <path
                  d="M32.0002 35.3346C37.8912 35.3346 42.6668 30.2605 42.6668 24.0013C42.6668 17.7421 37.8912 12.668 32.0002 12.668C26.1091 12.668 21.3335 17.7421 21.3335 24.0013C21.3335 30.2605 26.1091 35.3346 32.0002 35.3346Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2725 55.4949C11.4345 52.5268 13.2034 49.7996 15.5008 47.5021C19.8767 43.1263 25.8116 40.668 32 40.668C38.1884 40.668 44.1233 43.1263 48.4991 47.5021C50.7963 49.7993 52.5651 52.5262 53.7271 55.4939C48.0208 60.7741 40.3869 64.0011 31.9993 64.0011C23.6122 64.0011 15.9787 60.7745 10.2725 55.4949Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <li>09901052798</li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm justify-between [&>*]:transition-all">
            <hr />
            <Link
              href={"/user/history"}
              className="flex gap-2 mt-4 p-3 hover:bg-[#434444] rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15V18C16 19.1046 15.1046 20 14 20H2C0.895431 20 0 19.1046 0 18V15C0.552285 15 1 14.5523 1 14C1 13.4477 0.552285 13 0 13V2ZM10.5192 5.63622C11.1807 6.0221 11.1807 6.9779 10.5192 7.36378L7.50387 9.12274C6.83721 9.51163 6 9.03075 6 8.25896L6 4.74104C6 3.96925 6.83721 3.48837 7.50387 3.87726L10.5192 5.63622ZM4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15ZM9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p> خرید اشتراک</p>
            </Link>
            <Link
              href={"/user/edit-profile"}
              className="flex gap-2 p-3 hover:bg-[#434444] rounded-md"
            >
              <span>
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99999 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 7.99999 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 7.99999 8Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8 10C10.1217 10 12.1566 10.8429 13.6569 12.3431C14.9201 13.6064 15.7172 15.2486 15.9376 17.0026C16.0065 17.5505 15.5523 18 15 18H1C0.447715 18 -0.00645391 17.5505 0.0623925 17.0026C0.282756 15.2486 1.0799 13.6064 2.34315 12.3431C3.84344 10.8429 5.87827 10 8 10Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p> ویرایش پروفایل</p>
            </Link>
            <Link
              href={"/user/history"}
              className="flex gap-2 p-3 hover:bg-[#434444] rounded-md"
            >
              <span>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00485 2.76221C7.66239 2.76221 7.38477 3.03983 7.38477 3.38229V7.76825C7.38477 7.97977 7.49258 8.17669 7.67077 8.29065L11.0729 10.4664C11.375 10.6596 11.7776 10.557 11.9504 10.2428L12.0657 10.0331C12.2231 9.74687 12.1314 9.38761 11.8562 9.21175L9.15922 7.48878C8.98089 7.37485 8.87298 7.17785 8.87298 6.96623V3.38229C8.87298 3.03983 8.59536 2.76221 8.25289 2.76221H8.00485Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.3801 7.44102C15.3801 11.2081 12.3262 14.2619 8.55912 14.2619C6.34611 14.2619 4.37925 13.208 3.13306 11.5748C3.07067 11.493 2.97442 11.4434 2.87156 11.4434C2.61785 11.4434 2.46708 11.7223 2.6201 11.9247C3.9785 13.7212 6.13324 14.882 8.55912 14.882C12.6687 14.882 16.0001 11.5506 16.0001 7.44102C16.0001 3.33146 12.6687 0 8.55912 0C5.12634 0 2.23648 2.32453 1.37775 5.48539C1.32541 5.67806 1.47435 5.86265 1.674 5.86265C1.8192 5.86265 1.94464 5.76254 1.98326 5.62258C2.7791 2.73827 5.42174 0.620085 8.55912 0.620085C12.3262 0.620085 15.3801 3.67392 15.3801 7.44102Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.95976 5.09972C3.89123 4.94332 3.70832 4.8714 3.55135 4.94018L1.56353 5.81123L0.692477 3.82341C0.62394 3.667 0.441028 3.59509 0.284065 3.66387C0.127103 3.73265 0.0559889 3.91587 0.124526 4.07228L1.12001 6.34408C1.18855 6.50049 1.37146 6.5724 1.52842 6.50362L3.80023 5.50813C3.95719 5.43935 4.0283 5.25613 3.95976 5.09972Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <p> تاریخچه تماشا</p>
            </Link>
            <Link
              href={"/user/edit-profile"}
              className="flex gap-2 p-3 hover:bg-[#434444] rounded-md"
            >
              <span>
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 3C-0.000488281 1.34315 1.34266 0 2.99951 0H20.9995C22.6564 0 23.9995 1.34315 23.9995 3V26.6719C23.9995 29.0102 21.4431 30.4496 19.4438 29.237L13.5552 25.6656C12.5991 25.0858 11.3999 25.0858 10.4438 25.6656L4.55523 29.237C2.55593 30.4496 -0.000488281 29.0102 -0.000488281 26.6719V3Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p> نشان شده ها </p>
            </Link>
          </ul>
          <ul className="mt-10">
            <hr />
            <li className="text-xs mt-3 flex gap-1 p-3 hover:bg-[#434444] rounded-md">
              <span>
                <svg
                  width={16}
                  height={16}
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
                    <path
                      d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                      stroke="#868e98"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              <button className="cursor-pointer">خروج از حساب کاربری</button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
