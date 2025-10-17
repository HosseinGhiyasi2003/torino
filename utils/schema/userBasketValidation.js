import * as yup from "yup";

export const userBasketSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "حداقل باید 2 کاراکتر باشد")
    .max(30, "حداکثر باید 30 کاراکتر باشد"),
  nationalCode: yup.string().matches(/^[0-9]{10}$/, "کد ملی باید ۱۰ رقم باشد"),
  gender: yup.string().required('لطفا جنسیت را انتخاب کنید'),
  birthDate: yup.string().required('تاریخ تولد الزامی است'),
});
