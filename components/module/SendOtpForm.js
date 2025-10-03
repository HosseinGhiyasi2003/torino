import Image from "next/image";

function SendOtpForm({setStep}) {
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-[#00000029] inset-0 backdrop-blur-[1px] px-3">
      <div className="bg-white max-w-[358px] w-full rounded-[20px] p-3 lg:max-w-[561px]">
        <div className="px-6 pb-10">
          <div className="flex justify-end cursor-pointer" onClick={() => setStep(1)}>
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
            کد تایید به شماره 09224526847 ارسال شد
          </p>
          <div className="flex justify-center gap-x-2.5 mt-[21px]">
            <input
              type="text"
              className="w-[50px] max-sm:w-[35px] max-sm:h-[30px] h-[45px] border-1 border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
            />
            <input
              type="text"
              className="w-[50px] h-[45px] max-sm:w-[35px] max-sm:h-[30px] border-1 border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
            />
            <input
              type="text"
              className="w-[50px] h-[45px] max-sm:w-[35px] max-sm:h-[30px] border-1 border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
            />
            <input
              type="text"
              className="w-[50px] h-[45px] max-sm:w-[35px] max-sm:h-[30px] border-1 border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
            />
            <input
              type="text"
              className="w-[50px] h-[45px] max-sm:w-[35px] max-sm:h-[30px] border-1 border-[#00000040] rounded-[6px] lg:w-[58px] lg:h-[53px]"
            />
          </div>
          <p className="text-center mt-6">
            <span>1:25</span>
            <span>تا ارسال مجدد کد</span>
          </p>
          <button className="bg-primary py-[13px] mt-[41px] text-white text-[18px] font-medium rounded-[6px] w-full cursor-pointer">ورود به تورینو</button>
        </div>
      </div>
    </div>
  );
}

export default SendOtpForm;
