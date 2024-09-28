import { toast } from "react-toastify";
import moment from "jalali-moment";
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
export const show_toast = ({
  text,
  type,
}: {
  text: string;
  type: "success" | "error" | "info" | "warning";
}) => {
  switch (type) {
    case "success":
      toast.success(text);
      break;
    case "error":
      toast.error(text);
      break;
    case "info":
      toast.info(text);
      break;
    case "warning":
      toast.warning(text);
      break;
    default:
      toast(text);
  }
};
export function convertJalaliToGregorian(jalaliDate: string) {
  return moment
    .from(jalaliDate, "fa", "YYYY/MM/DD")
    .locale("en")
    .format("YYYY-MM-DD");
}
export function isPersianNumber(numString: string) {
  const persianDigits = /[۰-۹]/;
  return persianDigits.test(numString);
}
export function convertGregorianToJalaliFullTim(gregorianDate: string) {
   return moment(gregorianDate, "YYYY-MM-DD HH:mm:ss")
    .locale("fa")
    .format("YYYY/MM/DD");
}

export const calculateTimeAgo = (dateItem: string) => {
  const date = moment(dateItem);
  const now = moment();

  const diffInSeconds = now.diff(date, "seconds");
  const diffInMinutes = now.diff(date, "minutes");
  const diffInHours = now.diff(date, "hours");
  const diffInDays = now.diff(date, "days");
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = now.diff(date, "months");
  const diffInYears = now.diff(date, "years");

  if (diffInYears > 0) {
    return `${diffInYears} سال قبل`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} ماه قبل`;
  } else if (diffInWeeks > 0) {
    return `${diffInWeeks} هفته قبل`;
  } else if (diffInDays > 0) {
    return `${diffInDays} روز قبل`;
  } else if (diffInHours > 0) {
    return `${diffInHours} ساعت قبل`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} دقیقه قبل`;
  } else {
    return `${diffInSeconds} ثانیه قبل`;
  }
};
export function getAllDate(i: any) {
  try {
    if (i) {
      let m = i?.substring(0, i?.length - 8);
      return moment(m, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
    }
  } catch (e) {
    return "ثبت نشده";
  }
}
export function convertToJalali(dateString: string): string {
  const date = moment(dateString);
  const jalaliDate = date.format("jYYYY/jM/jD");
  const [jy, jm, jd] = jalaliDate.split("/").map(Number);

  return `${jd} ${months[jm - 1]} ${jy}`;
}
export function truncate(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
export function toLocaleNumber(number: string | number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function convertSecondToMinute(seconds: number) {
  if (seconds == null) {
    return "0:0";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}
export function openInNewTab(url: string){
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
};