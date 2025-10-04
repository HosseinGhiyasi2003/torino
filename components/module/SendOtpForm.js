import { checkOtpCode } from "@/services/authApi";
import { setCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SendOtpForm({ setStep, otpCode, userNumber, setConfirmedNumber }) {
  const [isBtnNotAllowed, setIsBtnNotAllowed] = useState(true);
  const otpRefs = useRef([]);
  const router = useRouter();

  const changeHanlder = (event, index) => {
    const input = event.target;
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }

    if (input.value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
    if (input.value.length === 0 && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    const allFilled = otpRefs.current.every((ref) => ref?.value.trim() !== "");
    setIsBtnNotAllowed(!allFilled);
  };

  useEffect(() => {
    otpRefs.current[0].focus();
    // toast.success(otpCode)
  }, []);

  const { mutate } = useMutation({
    mutationFn: (data) => checkOtpCode(data),
    onSuccess: (data) => {
      setCookie("accessToken", data?.data?.accessToken);
      setCookie("phone", data.data.user.mobile);
      router.reload();
      toast.success("شما با موفقیت وارد حساب کاربری شدید");
      console.log(data.status);
      
    },
    onError: (err) => {
      toast.error('کد ارسال شده را به درستی وارد کنید')
    },
  });

  const submitHandler = () => {
    const otpValues = otpRefs.current.map((ref) => ref?.value.trim() || "");
    const otpCodeFormated = otpValues.join("");
    mutate({
      mobile: userNumber,
      code: otpCodeFormated,
    });
  };

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-[#00000029] inset-0 backdrop-blur-[1px] px-3">
      <div className="bg-white max-w-[358px] w-full rounded-[20px] p-3 lg:max-w-[561px]">
        <div className="px-6 pb-10">
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setStep(1)}
          >
            <Image
              src="/icons/arrow-left.png"
              width={24}
              height={24}
              alt="arrow-left"
              className="size-6"
            />
          </div>
          <h3 className="text-center text-[22px] text-secondary font-semibold mt-[13px] lg:text-[28px]">
            کد تایید را وارد کنید.
          </h3>
          <p className="text-center mt-[17px] text-[14px] text-secondary">
            کد تایید به شماره {userNumber} ارسال شد
          </p>
          <div className="flex justify-center gap-x-2.5 mt-[21px]" dir="ltr">
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[40px] max-sm:h-[30px]  border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px] "
              maxLength={1}
              onChange={(e) => changeHanlder(e, 0)}
              ref={(el) => (otpRefs.current[0] = el)}
              dir="ltr"
            />
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[35px] max-sm:h-[30px] border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
              maxLength={1}
              onChange={(e) => changeHanlder(e, 1)}
              ref={(el) => (otpRefs.current[1] = el)}
              dir="ltr"
            />
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[35px] max-sm:h-[30px] border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
              maxLength={1}
              onChange={(e) => changeHanlder(e, 2)}
              ref={(el) => (otpRefs.current[2] = el)}
              dir="ltr"
            />
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[35px] max-sm:h-[30px] border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
              maxLength={1}
              onChange={(e) => changeHanlder(e, 3)}
              ref={(el) => (otpRefs.current[3] = el)}
              dir="ltr"
            />
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[35px] max-sm:h-[30px] border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
              maxLength={1}
              onChange={(e) => changeHanlder(e, 4)}
              ref={(el) => (otpRefs.current[4] = el)}
              dir="ltr"
            />
            <input
              type="text"
              className="w-[45px] h-[40px] max-sm:w-[35px] max-sm:h-[30px] border-1 text-center border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
              maxLength={1}
              onChange={(e) => changeHanlder(e, 5)}
              ref={(el) => (otpRefs.current[5] = el)}
              dir="ltr"
            />
          </div>
          <p className="text-center mt-6">
            <span>1:25</span>
            <span>تا ارسال مجدد کد</span>
          </p>
          <button
            onClick={submitHandler}
            className={`bg-primary py-[13px] mt-[41px] text-white text-[18px] font-medium rounded-[6px] w-full transition ${
              isBtnNotAllowed
                ? "opacity-60 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={isBtnNotAllowed}
          >
            ورود به تورینو
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendOtpForm;
