  import * as yup from "yup";

export const emailValidationSchema = yup.object({
  email: yup
    .string()
    .required("ایمیل را وارد کنید")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "ایمیل معتبری وارد کنید"),
});
