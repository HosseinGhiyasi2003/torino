
import * as yup from "yup";

export const personalInfoSchema = yup.object().shape({
  firstName: yup
    .string()
    // .required("نام الزامی است")
    .min(2, "حداقل باید 2 کاراکتر باشد").max(25, "حداکثر باید 25 کاراکتر باشد"),
  lastName: yup
    .string()
    // .required("نام خانوادگی الزامی است")
    .min(2, "حداقل باید 2 کاراکتر باشد").max(25, "حداکثر باید 25 کاراکتر باشد"),
   nationalCode: yup
    .number()
    .typeError("کد ملی باید عددی باشد")
    .required("کد ملی الزامی است")
    .test("len", "کد ملی باید ۱۰ رقم باشد", (val) => val && val.toString().length === 10),
  gender: yup.string(),
  birthDate: yup.string(),
});