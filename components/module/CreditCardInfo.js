import Image from "next/image";
import { useState } from "react";

function CreditCardInfo() {
  const [creditCardInfo, setCreditCardInfo] = useState(false);

  return (
    <div className="flex flex-col border-1 border-[#00000033] rounded-[10px] px-5 py-3 mt-6 lg:w-full lg:py-4">
          <div className="flex justify-between">
            <h3>{creditCardInfo ? 'اطلاعات حساب بانکی' : 'ویرایش اطلاعات حساب بانکی'}</h3>
            {!creditCardInfo && <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => setCreditCardInfo(true)}>
              <Image src='/icons/edit-2.png' width={16} height={16} className="size-4" />
              <span className="text-[#009ECA]">ویرایش اطلاعات</span>
            </div>}
          </div>
          {creditCardInfo ? (
            <div>
              <div className="flex flex-col gap-y-4 mt-6 text-[#00000080] lg:flex-row lg:gap-x-7">
                <input
                  className="border-1 border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition lg:w-1/3"
                  type="text"
                  placeholder="شماره کارت"
                />
                <input
                  className="border-1 border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition lg:w-1/3"
                  type="text"
                  placeholder="شماره حساب"
                />
                <input
                  className="border-1 border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition lg:w-1/3"
                  type="text"
                  placeholder="شماره شبا"
                />
              </div>
              <div className="flex gap-x-3 mt-5 lg:border-t-1 border-[#00000033] pt-1.5 lg:justify-end">
                <button className="bg-primary text-white rounded-[5px] font-semibold w-1/2 py-2 hover:bg-green-700 transition lg:w-36">
                  تایید
                </button>
                <button onClick={() => setCreditCardInfo(false)} className="border-2 border-primary text-primary rounded-[5px] font-semibold w-1/2 py-2 lg:w-36">
                  انصراف
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-6 mt-8.5 lg:flex-row lg:flex-wrap">
              <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-8">
                <span>شماره کارت</span>
                <span className="text-secondary font-semibold">6037991752468520</span>
              </div>
              <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-[99px]">
                <span>شماره شبا</span>
                <span className="text-secondary font-semibold"> - </span>
              </div>
              <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-8">
                <span>شماره حساب</span>
                <span className="text-secondary font-semibold"> - </span>
              </div>
            </div>
          )}
        </div>
  )
}

export default CreditCardInfo