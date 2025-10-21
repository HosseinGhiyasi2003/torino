import { reserveTour } from "@/services/toursApi";
import { formatJalaliDate, toPersianDigits } from "@/utils/helper";
import { useMutation } from "@tanstack/react-query";
import { Check, Cross } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

function TourDetailsDesktop({ data, isError, isPending }) {
  const tourData = data?.data;
  
  let formatOriginDate = null;
  let formatDestinationDate = null;

  if (tourData) {
    const originDate = new Date(tourData?.startDate);
    formatOriginDate = formatJalaliDate(originDate);

    const destinationDate = new Date(tourData?.endDate);
    formatDestinationDate = formatJalaliDate(destinationDate);
  }
  
  

  if (isPending) {
    return (
      <div className="hidden lg:flex justify-center my-9">
        <h2 className="text-4xl text-blue-500">در حال بارگذاری...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="hidden lg:flex justify-center my-9">
        <h2 className="text-4xl text-red-500">مشکلی پیش اومده</h2>
      </div>
    );
  }

  const { mutate } = useMutation({
    mutationFn: (id) => reserveTour(id),
    onSuccess: (data) => {
      toast.success(data?.data?.message);
    },
    onError: (err) => {
      if (err.status == 401) toast.error("لطفا وارد حساب کاربری شوید");
      else toast.error("مشکلی پیش اومده");
    },
  });

  const reserveTourHandler = (id) => {
    mutate(id);
  };

  return (
    <div className="bg-[#F3F3F3] hidden lg:block max-w-[1740px] w-full mx-auto pt-9 pb-[99px]">
      <div className="container">
        <div className="bg-white py-[29px] px-5 rounded-[10px]">
          {/* top section */}
          <div className="flex gap-x-6 ">
            <div>
              <Image
                src={tourData.image}
                width={200}
                height={200}
                alt="tour image"
                className="w-[397px] h-[265px] rounded-xl"
              />
            </div>
            <div className="w-2/3">
              <h1 className="text-[32px] text-[#000000] font-bold mb-4">
                {tourData.title}
              </h1>
              <span className="text-secondary text-xl">{toPersianDigits(5)} روز و {toPersianDigits(4)} شب</span>
              <div className="flex gap-x-6 mt-6">
                <div className="flex gap-x-2">
                  <Image
                    src="/icons/user-tick.png"
                    width={24}
                    height={24}
                    alt="user-tick"
                    className="size-6"
                  />
                  <span className="text-[#7D7D7D] text-xl">
                    تورلیدر از مبدا
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <Image
                    src="/icons/map.png"
                    width={24}
                    height={24}
                    alt="user-tick"
                    className="size-6"
                  />
                  <span className="text-[#7D7D7D] text-xl">برنامه سفر</span>
                </div>
                <div className="flex gap-x-2">
                  <Image
                    src="/icons/medal-star.png"
                    width={24}
                    height={24}
                    alt="user-tick"
                    className="size-6"
                  />
                  <span className="text-[#7D7D7D] text-xl">
                    تورلیدر از مبدا
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-[35px]">
                <div className="flex items-end gap-x-1 font-vazir">
                  <span className="text-[#009ECA] text-[28px]">
                    {toPersianDigits(tourData.price.toLocaleString())}
                  </span>
                  <span className="text-secondary text-[14px]">تومان</span>
                </div>
                <button
                  onClick={() => reserveTourHandler(tourData.id)}
                  className="bg-primary w-51 text-white rounded-[10px] text-2xl font-vazir hover:bg-green-700 transition cursor-pointer p-[9px]"
                >
                  رزرو و خرید
                </button>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="font-vazir pt-[29px] flex justify-around border-t-1 border-[#00000040] mt-6">
            <div className="flex flex-col gap-y-3 border-l-1 border-[#00000040] pl-[43px] ">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/routing-2.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                مبدا
              </h4>
              <h5 className="font-medium">
                {tourData.origin.name == "Tehran"
                  ? "تهران"
                  : tourData.origin.name == "Sanandaj"
                  ? "سنندج"
                  : tourData.origin.name == "Isfahan"
                  ? "اصفهان"
                  : ""}
              </h5>
            </div>
            <div className="flex flex-col gap-y-3 border-l-1 border-[#00000040] pl-[43px] ">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/calendar-1.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                تاریخ رفت
              </h4>
              <h5 className="font-medium">{toPersianDigits(formatOriginDate.day)} {formatOriginDate.month} {toPersianDigits(formatOriginDate.year)}</h5>
            </div>
            <div className="flex flex-col gap-y-3 border-l-1 border-[#00000040] pl-[43px] ">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/calendar-2.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                تاریخ برگشت
              </h4>
              <h5 className="font-medium">{toPersianDigits(formatDestinationDate.day)} {formatDestinationDate.month} {toPersianDigits(formatDestinationDate.year)}</h5>
            </div>
            <div className="flex flex-col gap-y-3 border-l-1 border-[#00000040] pl-[43px] ">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/bus.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                حمل و نقل
              </h4>
              <h5 className="font-medium">اتوبوس</h5>
            </div>
            <div className="flex flex-col gap-y-3 border-l-1 border-[#00000040] pl-[43px] ">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/profile-2user.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                ظرفیت
              </h4>
              <h5 className="font-medium">حداکثر {tourData.capacity} نفر</h5>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="text-[#444444] flex gap-x-2 items-center">
                <Image
                  src="/icons/security.png"
                  width={30}
                  height={30}
                  className="size-5"
                />
                بیمه
              </h4>
              <h5 className="font-medium">
                {tourData.insurance ? <Check /> : <Cross />}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsDesktop;
