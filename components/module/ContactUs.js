import { toPersianDigits } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

function ContactUs() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col border-1 border-[#00000040] rounded-[10px] mt-[122px] overflow-hidden md:flex-row md:mt-[109px]">
          <div className="flex justify-around bg-primary md:w-2/3 lg:pt-9">
            <div className="p-3">
              <h3 className="text-white text-[22px] font-extrabold lg:text-5xl">
                خرید تلفی از
                <span className="text-[#10411B]"> تورینو</span>
              </h3>
              <span className="text-white mt-2 block lg:text-[32px]">
                به هرکجا که میخواهید!
              </span>
            </div>
            <div className="">
              <Image
                src="/images/man-talking.png"
                width={200}
                height={200}
                alt="man talking"
              />
            </div>
          </div>
          <div className="flex justify-around my-3 md:flex-col md:items-center md:w-1/3 lg:justify-center lg:gap-y-3">
            <div className="flex items-center gap-x-2">
              <span className="text-xl font-bold">{toPersianDigits(0)}{toPersianDigits(21)}-{toPersianDigits(1840)}</span>
              <Image
                src="/icons/call-2.png"
                width={24}
                height={24}
                alt="call"
              />
            </div>
            <Link
              href="/"
              className="bg-[#10411B] text-white w-[136px] text-center py-2 rounded-[9px] text-[14px] font-medium"
            >
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
