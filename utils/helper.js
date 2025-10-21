import { jalaliMonths } from "@/constants/jalaliMonths";
import weekDays from "@/constants/weekDays";
import { toJalaali } from "jalaali-js";

const formatJalaliDate = (date) => {
  const jDate = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  return {
    year: jDate.jy,
    month: jalaliMonths[jDate.jm - 1],
    day: jDate.jd,
    weekDay: weekDays[date.getDay()],
    hour,
    minute,
  };
};

const toPersianDigits = (value) => {
  if (value === null || value === undefined) return "";
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};


export { formatJalaliDate, toPersianDigits };
