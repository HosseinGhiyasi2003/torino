import { toPersianDigits } from "@/utils/helper"
import Image from "next/image"

function TourFeatures() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 border-t-1 border-[#00000040] pt-[43px] mt-15 gap-y-[39px] max-sm:place-items-center lg:gap-x-16.5 mb-8">
          <div className="flex gap-x-4 col-span-12 sm:col-span-6 lg:col-span-4">
            <Image src='/images/percent.png' width={71} height={64} alt="percent" />
            <div className="flex flex-col gap-y-0.5 text-secondary font-vazir">
              <h4 className="font-medium lg:text-xl xl:text-[26px]">بصرفه ترین قیمت</h4>
              <p className="text-[14px] max-w-[225px] xl:text-[16px]">بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
            </div>
          </div>
          <div className="flex gap-x-4 col-span-12 sm:col-span-6 lg:col-span-4">
            <Image src='/images/support.png' width={71} height={64} alt="percent" />
            <div className="flex flex-col gap-y-0.5 text-secondary font-vazir">
              <h4 className="font-medium lg:text-xl xl:text-[26px]">پشتیبانی</h4>
              <p className="text-[14px] max-w-[225px] xl:text-[16px]">پشتیبانی و همراهی {toPersianDigits(24)} ساعته در تمامی مراحل سفر شما.</p>
            </div>
          </div>
          <div className="flex gap-x-4 col-span-12 sm:col-span-6 lg:col-span-4">
            <Image src='/images/satisfaction.png' width={71} height={64} alt="percent" />
            <div className="flex flex-col gap-y-0.5 text-secondary font-vazir">
              <h4 className="font-medium lg:text-xl xl:text-[26px]">رضایت کاربران</h4>
              <p className="text-[14px] max-w-[225px] xl:text-[16px]">رضایت بیش از {toPersianDigits(10)}هزار کاربر از تور های ما. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourFeatures