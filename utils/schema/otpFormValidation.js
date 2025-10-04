import * as yup from "yup";

export const otpFormSchema = yup.object({
  mobile: yup
    .string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^09\d{9}$/ , "شماره موبایل معتبری وارد کنید")
});
