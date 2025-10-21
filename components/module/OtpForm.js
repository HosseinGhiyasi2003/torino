import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpFormSchema } from "@/utils/schema/otpFormValidation";
import { useMutation } from "@tanstack/react-query";
import { sendOtpCode } from "@/services/authApi";
import toast from "react-hot-toast";
import { toPersianDigits } from "@/utils/helper";

function OtpForm({ setIsOtpFormOpen, setStep, setOtpCode, setUserNumber }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobile: "",
    },
    resolver: yupResolver(otpFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => sendOtpCode(data),
    onSuccess: (data) => {
      setOtpCode(data.code);
      setStep(2);
      toast.success(data.code);
    },
    onError: (err) => {
      toast.error("مشکلی پیش امده لطفا دوباره امتحان کنید");
    },
  });

  const formSubmitting = (data) => {
    setUserNumber(data.mobile);
    mutate(data);
  };

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-[#00000029] inset-0 backdrop-blur-[1px] px-3">
      <div className="bg-white max-w-[358px] w-full rounded-[20px] p-3 lg:max-w-[561px]">
        <div>
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setIsOtpFormOpen(false)}
          >
            <Image
              src="/icons/close-icon.png"
              width={24}
              height={24}
              alt="close"
              className="size-10"
            />
          </div>
          <h3 className="text-center text-[22px] text-secondary font-semibold mt-[13px] lg:text-[28px]">
            ورود به تورینو
          </h3>
          <form onSubmit={handleSubmit(formSubmitting)}>
            <div className="flex flex-col mt-[45px] px-10 pb-10">
              <label htmlFor="otp" className="text-[#00000080]">
                شماره موبایل خود را وارد کنید
              </label>
              <input
                {...register("mobile")}
                placeholder={`${toPersianDigits(4253)}***${toPersianDigits(0)}${toPersianDigits(912)}`}
                id="otp"
                className=" text-[#00000080] outline-0 border-1 border-[#00000040] p-2 rounded-[6px] my-2.5"
              />
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
              <button
                type="submit"
                className="bg-primary py-[13px] mt-[41px] text-white text-[18px] font-medium rounded-[6px] cursor-pointer"
              >
                {isPending
                  ? "درحال ارسال کد"
                  : "                ارسال کد تایید"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
