import { reserveTour } from "@/services/toursApi";
import { useMutation } from "@tanstack/react-query";
import { Check, Cross } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

function TourDetailsMobile({data, isError, isPending}) {
  
  const tourData = data?.data;
  

  if (isPending) {
    return (
      <div className="flex justify-center my-9 lg:hidden">
        <h2 className="text-4xl text-blue-500">در حال بارگذاری...</h2>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center my-9 lg:hidden">
        <h2 className="text-4xl text-red-500">مشکلی پیش اومده</h2>
      </div>
    );
  }

  const {mutate} = useMutation({
    mutationFn: (id) => reserveTour(id),
    onSuccess: (data) => {
      toast.success(data?.data?.message)
    },
    onError: (err) => {
      if(err.status == 401) toast.error('لطفا وارد حساب کاربری شوید')
      else toast.error('مشکلی پیش اومده')
    }
  })

  const reserveTourHandler = (id) => {
    mutate(id);
  }

  return (
    <div className="container lg:hidden">
        <div className="mt-[23px]">
        <div>
          <Image
            src={tourData.image}
            width={200}
            height={200}
            alt="tour-image"
            className="size-full rounded-[12px]"
          />
        </div>
        <div className="flex justify-between mt-4">
          <h1 className="text-2xl font-bold text-[#000000]">{tourData.title}</h1>
          <span className="text-secondary text-[15px]">5 روز و 4 شب</span>
        </div>
        <div className="flex justify-between gap-x-6 mt-5">
          <div className="flex items-center gap-x-2">
            <Image
              src="/icons/user-tick.png"
              width={14}
              height={14}
              className="size-3.5"
              alt="user-tick"
            />
            <span className="text-[#7D7D7D]">تورلیدر از مبدا</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              src="/icons/map.png"
              width={14}
              height={14}
              className="size-3.5"
              alt="user-tick"
            />
            <span className="text-[#7D7D7D]">برنامه سفر</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              src="/icons/medal-star.png"
              width={14}
              height={14}
              className="size-3.5"
              alt="user-tick"
            />
            <span className="text-[#7D7D7D]">تضمین کیفیت</span>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col items-center font-vazir">
            <h4 className="flex text-[#444444] gap-x-2">
              <Image
                src="/icons/bus.png"
                width={16}
                height={16}
                className="size-4"
              />
              حمل و نقل
            </h4>
            <span className="text-secondary font-medium mt-1">اتوبوس</span>
          </div>
          <div className="flex flex-col items-center font-vazir">
            <h4 className="flex text-[#444444] gap-x-2">
              <Image
                src="/icons/profile-2user.png"
                width={16}
                height={16}
                className="size-4"
              />
              ظرفیت
            </h4>
            <span className="text-secondary font-medium mt-1">
              حداکثر {tourData.capacity} نفر
            </span>
          </div>
          <div className="flex flex-col items-center font-vazir">
            <h4 className="flex text-[#444444] gap-x-2">
              <Image
                src="/icons/security.png"
                width={16}
                height={16}
                className="size-4"
              />
              بیمه
            </h4>
            <span className="text-secondary font-medium mt-1">
              {tourData.insurance ? <Check /> : <Cross />}
            </span>
          </div>
        </div>
        <div className="flex justify-around items-center font-vazir mt-8 mb-13.5">
          <button onClick={() => reserveTourHandler(tourData.id)} className="bg-primary text-white w-38.5 py-[5.5px] rounded-[10px] hover:bg-green-700 transition cursor-pointer">
            رزرو و خرید
          </button>
          <div className="flex items-end gap-x-1">
            <span className="text-[#009ECA] text-2xl font-medium">
              {tourData.price.toLocaleString()}
            </span>
            <span className="text-[#000000] text-[12px]">تومان</span>
          </div>
        </div>
      </div>

    </div>
    // <h2>dsf</h2>
  );
}

export default TourDetailsMobile;
