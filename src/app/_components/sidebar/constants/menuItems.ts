import React from "react";
import {
  BuySubscriptionIcon,
  ProfileManagementIcon,
  HistoryIcon,
  EditPasswordIcon,
  BuyHistoryIcon,
  WatchingIcon,
} from "../../icons";
import SavedIcon from "../../icons/Saved";
export interface MenuItem {
  href: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const menuItems: MenuItem[] = [
  {
    href: "/user/history",
    text: "خرید اشتراک",
    icon: BuySubscriptionIcon,
  },
  {
    href: "/user/edit-profile",
    text: "ویرایش پروفایل",
    icon: ProfileManagementIcon,
  },
  {
    href: "/user/history",
    text: "تاریخچه تماشا",
    icon: HistoryIcon,
  },
  {
    href: "/user/bookmarks",
    text: "نشان شده ها",
    icon: SavedIcon,
  },
  {
    href: "/user/edit-profile",
    text: "سوابق خرید",
    icon: BuyHistoryIcon,
  },
  // {
  //   href: "/user/edit-profile",
  //   text: "ادامه تماشا",
  //   icon: WatchingIcon,
  // },
  {
    href: "/user/edit-mobile",
    text: "تغییر شماره موبایل",
    icon: EditPasswordIcon,
  },
];
