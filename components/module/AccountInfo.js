import Image from "next/image";
import { useState } from "react";

function AccountInfo() {
  const [email, setEmail] = useState(false);

  return (
    <div className="flex flex-col border-1 border-[#00000033] rounded-[10px] px-5 py-3 lg:w-full lg:py-4">
      <h3>اطلاعات حساب کاربری</h3>
      <div className="flex flex-col mt-7 gap-y-6.5 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex justify-between gap-x-8">
          <span className="text-[14px]">شماره موبایل</span>
          <span className="text-[14px] text-secondary font-vazir">
            09224521125
          </span>
        </div>
        <div>
          {email ? (
            <div className="lg:flex lg:flex-col">
              <div className="flex gap-x-2">
                <input
                  type="text"
                  placeholder="آدرس ایمیل"
                  className="border-1 border-[#00000080] rounded-[5px] p-2 text-[14px] w-2/3 cursor-pointer hover:border-green-500 transition lg:w-[220px]"
                />
                <button className="bg-primary rounded-[5px] py-[7.5px] w-1/3 text-white font-semibold hover:bg-green-700 transition lg:w-[100px]">
                  تایید
                </button>
              </div>
              <button
                onClick={() => setEmail(false)}
                className="border-2 border-primary w-34.5 py-2 text-primary font-semibold rounded-[5px] mt-2 cursor-pointer lg:py-1 lg:w-24"
              >
                انصراف
              </button>
            </div>
          ) : (
            <div className="flex justify-between lg:gap-x-32">
              <div className="flex items-center justify-center gap-x-11.5">
                <span className="text-[14px]">ایمیل</span>
                <span> - </span>
              </div>
              <div className="flex" onClick={() => setEmail(true)}>
                <Image
                  src="/icons/edit-2.png"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span className="text-[#009ECA]">افزودن</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
