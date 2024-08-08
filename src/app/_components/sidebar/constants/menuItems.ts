import { SvgIconProps } from "./icons";

export interface MenuItem {
  href: string;
  text: string;
  icon: React.FC<SvgIconProps>;
}

export const menuItems: MenuItem[] = [
  {
    href: "/user/history",
    text: "خرید اشتراک",
    icon: require("./icons").SubscriptionIcon,
  },
  {
    href: "/user/edit-profile",
    text: "ویرایش پروفایل",
    icon: require("./icons").EditProfileIcon,
  },
  {
    href: "/user/history",
    text: "تاریخچه تماشا",
    icon: require("./icons").HistoryIcon,
  },
  {
    href: "/user/edit-profile",
    text: "نشان شده ها",
    icon: require("./icons").SavedItemsIcon,
  },
  {
    href: "/user/edit-profile",
    text: "سوابق خرید",
    icon: require("./icons").BuyHistory,
  },
  {
    href: "/user/edit-profile",
    text: "ادامه تماشا",
    icon: require("./icons").ContinueWatching,
  },
  {
    href: "/user/edit-profile",
    text: "تغییر کلمه عبور",
    icon: require("./icons").EditPassword,
  },
];
