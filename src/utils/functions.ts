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

  if (diffInHours > 0) {
    return `${diffInHours} ساعت قبل`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} دقیقه قبل`;
  } else {
    return `${diffInSeconds} ثانیه قبل`;
  }
};

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
