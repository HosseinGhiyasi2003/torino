import * as yup from "yup";

export const creditCardValidationSchema = yup.object({
  debitCard_code: yup
    .string()
    .required("شماره کارت را وارد کنید")
    .matches(/^[0-9]{16}$/, "شماره کارت باید 16 رقم باشد"),
  shaba_code: yup
    .string()
    .required("شماره شبا را وارد کنید")
    .matches(/^[0-9]{24}$/, "شماره شبا باید 24 رقم باشد"),
})