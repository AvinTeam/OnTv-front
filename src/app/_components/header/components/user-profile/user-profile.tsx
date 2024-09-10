"use client";
import {
  AccountIcon,
  HistoryIcon,
  BuySubscriptionIcon,
  ProfileIcon,
  ProfileManagementIcon,
  EditPasswordIcon,
  ArrowIcon,
  BuyHistoryIcon,
} from "@/app/_components/icons";
import LogoutIcon from "@/app/_components/icons/Logout";
import SavedIcon from "@/app/_components/icons/Saved";
import SettingIcon from "@/app/_components/icons/Setting";
import { useUserStore } from "@/stores/user.store";
import axios from "@/core/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const UserProfile = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: (item: boolean) => void;
}) => {
  const user = useUserStore((store) => store.user);
  const addUser = useUserStore((store) => store.addUser);
  const Logout = useUserStore((store) => store.logout);
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const getUserInfo = () => {
    axios.get(`profile/${user?.id}`).then(({ data }) => {
      addUser(data?.user);
    });
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (
          imageRef.current &&
          !imageRef.current.contains(event.target as Node)
        ) {
          setIsShowMenu(false);
        }
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (!user?.id) return;
    getUserInfo();
  }, [user?.id]);

  return (
    <div className="relative">
      <div
        ref={imageRef}
        className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center bg-[gray] cursor-pointer "
        onClick={() => setIsShowMenu((prev) => !prev)}
      >
        <Image
          src={user?.avatar?.[0]?.url ?? "/images/avatar/avatar.jpg"}
          className="object-cover w-full h-full"
          width={0}
          height={0}
          alt="avatar"
        />
      </div>

      <div
        ref={menuRef}
        className={`${
          isShowMenu ? "flex" : "hidden"
        } mt-3 w-64 h-[530px] lg:h-[460px] -left-3 p-2 z-[1000] rounded-md absolute bg-base-70 shadow-xl`}
      >
        <div className="group-hover:flex w-full [&>*]:text-[#e4e4e4] overflow-hidden [&>*]:transition-all flex-col ">
          <div className="flex w-full flex-col gap-3 mt-3 text-center text-sm">
            {user?.mobile}
          </div>
          <Link
            href={"/user/packages"}
            style={{ color: "#3899a0" }}
            className="w-full mb-4 text-xs h-8 flex py-4 mt-2 justify-center border my-1 rounded-md items-center"
          >
            {user?.subscribe ? (
              "تمدید اشتراک"
            ) : (
              <span className="flex gap-2 justify-center items-center">
                <p> خرید اشتراک</p>

                <ArrowIcon
                  className="rotate-180"
                  width={10}
                  height={10}
                  fill="#3899a0"
                />
              </span>
            )}
          </Link>
          <p className="text-[11px] mb-4 text-center">
            {user?.subscribe
              ? `${user?.subscribe} روز از اشتراک شما باقی مانده است`
              : "شما در حال حاضر اشتراکی ندارید"}
          </p>
          <hr />

          <Link
            href={"/user/edit-profile"}
            className="flex mb-1.5 hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-1.5 mr-2 pb-2 justify-start items-center"
          >
            <ProfileIcon />
            <span className="text-sm">خودم</span>
            <div className="mr-auto hover:scale-150 hover:transition-all hover:ease-in-out hover:delay-75">
              <SettingIcon />
            </div>
          </Link>
          <hr />

          <div className="w-[320px] pb-5 lg:pb-0 overflow-y-auto">
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/packages"}
              className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-4 mr-2 pb-2 justify-start items-center"
            >
              <BuySubscriptionIcon />
              <span className="text-sm">خرید اشتراک</span>
            </Link>
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/subscriptions"}
              className="flex lg:hidden hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-4 mr-2 pb-2 justify-start items-center"
            >
              <BuyHistoryIcon />
              <span className="text-sm">سوابق خرید</span>
            </Link>
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/bookmarks"}
              className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
            >
              <SavedIcon />
              <span className="text-sm">نشان شده ها</span>
            </Link>
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/history"}
              className="flex lg:hidden hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
            >
              <HistoryIcon />
              <span className="text-sm">تاریخچه تماشا</span>
            </Link>
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/edit-mobile"}
              className="flex lg:hidden hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
            >
              <EditPasswordIcon />
              <span className="text-sm">تغییر شماره موبایل</span>
            </Link>
            <Link
              onClick={() => setIsShowMenu(false)}
              href={"/user/edit-profile"}
              className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
            >
              <ProfileManagementIcon />
              <span className="text-sm">مدیریت پروفایل ها</span>
            </Link>
            <Link
              href={"/user/edit-profile"}
              onClick={() => setIsShowMenu(false)}
              className="flex hover:bg-[#434444] py-2 rounded-md px-3 gap-2 mt-3 mr-2 pb-2 justify-start items-center"
            >
              <AccountIcon />
              <span className="text-sm">حساب کاربری</span>
            </Link>
          </div>
          <hr className="lg:hidden" />
          <div
            onClick={() => {
              Logout();
              router.push("/");
              setIsShowMenu(false);
              setIsLoggedIn(false);
            }}
            className="flex gap-2 mt-3 hover:bg-[#434444] py-2 rounded-md px-3 cursor-pointer mr-2 justify-start items-center"
          >
            <LogoutIcon />
            <span className="text-sm">خروج ار حساب کاربری</span>
          </div>
        </div>
        <div
          data-popper-arrow="true"
          style={{
            transform: "rotate(45deg)",
            width: 8,
            height: 8,
          }}
          className="absolute left-7 -top-1 bg-base-70"
        ></div>
      </div>
    </div>
  );
};
export default UserProfile;
