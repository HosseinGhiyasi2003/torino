import { orderTour } from "@/services/toursApi";
import { toPersianDigits } from "@/utils/helper";
import { userBasketSchema } from "@/utils/schema/userBasketValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

function BuySection({ data, isPending }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nationalCode: "",
      fullName: "",
      gender: "",
      birthDate: "",
    },
    resolver: yupResolver(userBasketSchema),
  });

  const {mutate} = useMutation({
    mutationFn: (personalData) => orderTour(personalData),
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      router.push('/profile')
    },
    onError: (err) => {
      console.log('مشکلی پیش اومده لطفا دوباره امتحان کنید');
      
    }
  })

  const formSubmitting = (data) => {
    mutate(data);
  };

  if(isPending){
    return (
       <div className="flex flex-col gap-y-[35px] mt-[17px] lg:flex-row lg:gap-x-4 lg:mt-0">
      {/* 🔹 بخش بالا (مشخصات مسافر) */}
      <div className="border-1 border-[#00000033] rounded-[10px] py-4 px-5 bg-white lg:w-4/6 lg:mt-[17px] lg:mb-[298px]">
        <div className="flex gap-x-3 items-center mb-6">
          <Skeleton circle width={24} height={24} />
          <Skeleton width={120} height={20} />
        </div>

        <div className="grid grid-cols-12 gap-y-6 xl:gap-y-6 lg:gap-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col"
            >
              <Skeleton height={48} borderRadius={6} />
              <Skeleton width={80} height={14} className="mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 بخش پایین (خلاصه سفارش و خرید نهایی) */}
      <div className="border-1 border-[#0000001A] rounded-[10px] mb-[37px] px-[13px] py-4 bg-white lg:w-2/6 lg:mt-[17px] lg:mb-[298px]">
        <div className="flex justify-between items-center">
          <Skeleton width="60%" height={28} />
          <Skeleton width="30%" height={24} />
        </div>

        <div className="border-t-1 border-dashed pt-[19px] mt-6">
          <div className="flex justify-between items-center mb-4">
            <Skeleton width="40%" height={20} />
            <Skeleton width="30%" height={24} />
          </div>

          <Skeleton width="100%" height={48} borderRadius={10} />
        </div>
      </div>
    </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(formSubmitting)}
      className="flex flex-col gap-y-[35px]  mt-[17px] lg:flex-row lg:gap-x-4 lg:mt-0"
    >
      {/* top section */}
      <div className="border-1 border-[#00000033] rounded-[10px] py-4 px-5 bg-white lg:w-4/6 lg:mt-[17px] lg:mb-[298px]">
        <h3 className="flex gap-x-3 text-2xl">
          <Image
            src="/icons/frame.png"
            width={24}
            height={24}
            className="size-6"
          />
          <span className="font-vazir">مشخصات مسافر</span>
        </h3>
        <div className="grid grid-cols-12 gap-y-6 mt-[17px]  xl:gap-y-6 lg:gap-x-4">
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <input
              {...register("fullName")}
              placeholder="نام و نام خانوادگی"
              className="border-1 border-[#00000080] rounded-[5px] py-3.5 px-2 text-[14px] outline-none hover:border-green-500 transition w-full"
            />
            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
          </div>
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <select
              {...register("gender")}
              className="border-1 border-[#00000080] rounded-[5px] py-3.5 px-2 text-[14px] outline-none hover:border-green-500 transition w-full"
              >
              <option value="">جنسیت</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
          </div>
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <input
              {...register("nationalCode")}
              type="number"
              placeholder="کدملی"
              className="border-1 border-[#00000080] rounded-[5px] py-3.5 px-2 text-[14px] outline-none hover:border-green-500 transition w-full"
              />
              {errors.nationalCode && <span className="text-red-500">{errors.nationalCode.message}</span>}
          </div>
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <input
              type="date"
              {...register("birthDate")}
              placeholder=""
              className="border-1 border-[#00000080] rounded-[5px] py-3.5 px-2 text-[14px] outline-none hover:border-green-500 transition w-full"
              />
              {errors.birthDate && <span className="text-red-500">{errors.birthDate.message}</span>}
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="border-1 border-[#0000001A] rounded-[10px] mb-[37px] px-[13px] py-4 bg-white lg:w-2/6 lg:mt-[17px] lg:mb-[298px]">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{data?.data?.title}</h3>
          <span className="text-secondary font-vazir">{toPersianDigits(5)} روز و {toPersianDigits(4)} شب</span>
        </div>
        <div className="flex flex-col font-vazir border-t-1 border-dashed pt-[19px] mt-6">
          <div className="flex justify-between">
            <span className="text-secondary lg:text-[14px] xl:text-[16px]">
              قیمت نهایی
            </span>
            <div className="flex items-center gap-x-2">
              <span className="text-[#009ECA] text-[24px] lg:text-xl xl:text-[24px]">
                {toPersianDigits(data?.data?.price.toLocaleString())}
              </span>
              <span className="text-[14px]">تومان</span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-2xl py-[9px] text-white rounded-[10px] mt-[25px] hover:bg-green-700 transition cursor-pointer lg:text-xl xl:text-2xl"
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </div>
    </form>
  );
}

export default BuySection;
