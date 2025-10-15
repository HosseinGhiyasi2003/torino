import { updateUserProfile } from "@/services/profileApi";
import { emailValidationSchema } from "@/utils/schema/emailValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AccountInfo({ data, isPending }) {
  const queryClient = useQueryClient()
  const [email, setEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data?.data?.email || "",
    },
    resolver: yupResolver(emailValidationSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["userProfile"] })
      setEmail(false);
    },
    onError: (err) => {
      toast.error("مشکلی پیش امده لطفا دوباره امتحان کنید");
      
    },
  });

  const formSubmitting = (data) => {
    mutate(data);
  };

  if (isPending) {
    return (
      <div className="flex flex-col border border-[#00000033] rounded-[10px] px-5 py-3 lg:w-full lg:py-4">
        <h3 className="mb-5">اطلاعات حساب کاربری</h3>
        <div className="space-y-6 lg:flex lg:justify-between lg:space-y-0 lg:px-8">
          <div className="flex flex-col gap-y-2">
            <Skeleton width={80} height={16} borderRadius={10} />
            <Skeleton width={120} height={16} borderRadius={10} />
          </div>
          <div className="flex flex-col gap-y-2">
            <Skeleton width={60} height={16} borderRadius={10} />
            <Skeleton width={200} height={16} borderRadius={10} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-[#00000033] rounded-[10px] px-5 py-3 lg:w-full lg:py-4">
      <h3>اطلاعات حساب کاربری</h3>

      <div className="flex flex-col mt-7 gap-y-6.5 lg:flex-row lg:justify-between lg:px-8">
        {/* شماره موبایل */}
        <div className="flex justify-between gap-x-8">
          <span className="text-[14px]">شماره موبایل</span>
          <span className="text-[14px] text-secondary font-vazir">
            {data?.data?.mobile}
          </span>
        </div>

        <div>
          {email ? (
            <div className="lg:flex lg:flex-col">
              <form
                className="flex gap-x-2"
                onSubmit={handleSubmit(formSubmitting)}
              >
                <input
                  {...register("email")}
                  placeholder="آدرس ایمیل"
                  className="border border-[#00000080] rounded-[5px] p-2 text-[14px] w-2/3 hover:border-green-500 transition lg:w-[220px]"
                />
                <button
                  type="submit"
                  className="bg-primary rounded-[5px] py-[7.5px] w-1/3 text-white font-semibold hover:bg-green-700 transition lg:w-[100px]"
                >
                  تایید
                </button>
              </form>
              <div className="flex flex-col">
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                <button
                  onClick={() => setEmail(false)}
                  className="border-2 border-primary w-34.5 py-2 text-primary font-semibold rounded-[5px] mt-2 cursor-pointer lg:py-1 lg:w-24"
                >
                  انصراف
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between lg:gap-x-32">
              <div className="flex items-center justify-center gap-x-11.5">
                <span className="text-[14px]">ایمیل</span>
                {data?.data?.email ? (
                  <span className="text-[14px]"> {data?.data?.email} </span>
                ) : (
                  <span> - </span>
                )}
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() => setEmail(true)}
              >
                <Image
                  src="/icons/edit-2.png"
                  width={16}
                  height={16}
                  alt="edit icon"
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
