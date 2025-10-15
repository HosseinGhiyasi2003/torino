import { updateUserProfile } from "@/services/profileApi";
import { creditCardValidationSchema } from "@/utils/schema/creditCardValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

function CreditCardInfo({data, isPending}) {
  const queryClient = useQueryClient()
  const [creditCardInfo, setCreditCardInfo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      debitCard_code: "",
      shaba_code: "",
    },
    resolver: yupResolver(creditCardValidationSchema),
  });

  const {mutate} = useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["userProfile"] })
      setCreditCardInfo(false);
    },
    onError: (err) => {
      console.log(err);
      toast.error("مشکلی پیش امده لطفا دوباره امتحان کنید");
    }
  })

  const formSubmitting = (data) => {
    mutate({"payment" : data})
  }

  if (isPending) {
    return (
      <div className="flex flex-col border border-[#00000033] rounded-[10px] px-5 py-3 mt-6 animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <Skeleton width={180} height={20} />
          <Skeleton width={90} height={18} />
        </div>
        <div className="flex flex-col gap-y-6 mt-4 lg:flex-row lg:flex-wrap">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex justify-between lg:w-1/2 lg:justify-start lg:gap-x-8"
              >
                <Skeleton width={100} height={18} />
                <Skeleton width={180} height={18} />
              </div>
            ))}
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col border-1 border-[#00000033] rounded-[10px] px-5 py-3 mt-6 lg:w-full lg:py-4">
      <div className="flex justify-between">
        <h3>
          {creditCardInfo ? "اطلاعات حساب بانکی" : "ویرایش اطلاعات حساب بانکی"}
        </h3>
        {!creditCardInfo && (
          <div
            className="flex gap-x-2 items-center cursor-pointer"
            onClick={() => setCreditCardInfo(true)}
          >
            <Image
              src="/icons/edit-2.png"
              width={16}
              height={16}
              className="size-4"
            />
            <span className="text-[#009ECA]">ویرایش اطلاعات</span>
          </div>
        )}
      </div>
      {creditCardInfo ? (
        <div>
          <form onSubmit={handleSubmit(formSubmitting)}>
            <div className="flex flex-col gap-y-4 mt-6 text-[#00000080] lg:flex-row lg:gap-x-7">
            <div className="flex flex-col">
              <input
                className="border-1 border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition lg:w-55"
                {...register("debitCard_code")}
                placeholder="شماره کارت"
              />
              {errors.debitCard_code && <span className="text-red-500">{errors.debitCard_code.message}</span>}
            </div>
            <div className=" flex flex-col">
              <input
                className="border-1 border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition lg:w-55"
                {...register("shaba_code")}
                placeholder="شماره شبا"
              />
              {errors.shaba_code && <span className="text-red-500">{errors.shaba_code.message}</span>}
            </div>
          </div>
          <div className="flex gap-x-3 mt-5 lg:border-t-1 border-[#00000033] pt-1.5 lg:justify-end">
            <button type="submit" className="bg-primary text-white rounded-[5px] font-semibold w-1/2 py-2 hover:bg-green-700 transition lg:w-36">
              تایید
            </button>
            <button
              onClick={() => setCreditCardInfo(false)}
              className="border-2 border-primary text-primary rounded-[5px] font-semibold w-1/2 py-2 lg:w-36"
            >
              انصراف
            </button>
          </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-y-6 mt-8.5 lg:flex-row lg:flex-wrap lg:justify-between">
          <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-8 lg:w-1/2">
            <span>شماره کارت</span>
            {data?.data?.payment?.debitCard_code ? <span className="text-secondary font-semibold">
              {data?.data?.payment?.debitCard_code}
            </span> : <span className="text-secondary font-semibold"> - </span>}
          </div>
          <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-[99px] lg:w-1/2">
            <span>شماره شبا</span>
            {data?.data?.payment?.shaba_code ? <span className="text-secondary font-semibold">
              {data?.data?.payment?.shaba_code}
            </span> : <span className="text-secondary font-semibold"> - </span>}
          </div>
          {/* <div className="text-[14px] flex justify-between  lg:justify-start lg:gap-x-8 lg:w-1/2">
                <span>شماره حساب</span>
                <span className="text-secondary font-semibold"> - </span>
              </div> */}
        </div>
      )}
    </div>
  );
}

export default CreditCardInfo;
