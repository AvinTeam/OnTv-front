import moment from "jalali-moment";
import { toast } from "react-toastify";

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
    return moment.from(jalaliDate, "fa", "YYYY/MM/DD").locale("en").format("YYYY-MM-DD");
}

export function convertGregorianToJalaliFullTim(gregorianDate: string) {
  return moment(gregorianDate, "YYYY-MM-DD HH:mm:ss")
    .locale("fa")
    .format("YYYY/MM/DD");
}
