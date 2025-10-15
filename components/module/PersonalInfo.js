"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { personalInfoSchema } from "@/utils/schema/personalInfoValidation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "@/services/profileApi";
import Skeleton from "react-loading-skeleton";

function PersonalInfo({ data, isPending }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      firstName: data?.data?.firstName || "",
      lastName: data?.data?.lastName || "",
      nationalCode: data?.data?.nationalCode || "",
      gender: data?.data?.gender,
      birthDate: data?.data?.birthDate || "",
    },
    resolver: yupResolver(personalInfoSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: (data) => {

      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      setIsEditing(false);
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
      <div className="flex flex-col border border-[#00000033] rounded-[10px] px-5 py-3 mt-6 animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <Skeleton width={120} height={20} />
          <Skeleton width={80} height={18} />
        </div>
        <div className="flex flex-col gap-y-6 mt-4 lg:flex-row lg:flex-wrap">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-8"
              >
                <Skeleton width={100} height={18} />
                <Skeleton width={150} height={18} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-[#00000033] rounded-[10px] px-5 py-3 mt-6 lg:w-full lg:py-4">
      <div className="flex justify-between items-center">
        <h3>اطلاعات شخصی</h3>
        {!isEditing && (
          <div
            className="flex gap-x-2 items-center cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <Image
              src="/icons/edit-2.png"
              width={16}
              height={16}
              alt="edit"
              className="size-4"
            />
            <span className="text-[#009ECA]">ویرایش اطلاعات</span>
          </div>
        )}
      </div>

      {isEditing ? (
        <form
          onSubmit={handleSubmit(formSubmitting)}
          className="flex flex-col gap-y-4 mt-6 text-[#00000080] lg:flex-row lg:flex-wrap"
        >
          <div className="flex flex-col lg:w-1/3">
            <input
              {...register("firstName")}
              className="border border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition"
              placeholder="نام"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col lg:w-1/3">
            <input
              {...register("lastName")}
              className="border border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition"
              placeholder="نام خانوادگی"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </span>
            )}
          </div>

          {/* کد ملی */}
          <div className="flex flex-col lg:w-1/3">
            <input
              {...register("nationalCode")}
              className="border border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition"
              placeholder="کدملی"
            />
            {errors.nationalCode && (
              <span className="text-red-500 text-sm mt-1">
                {errors.nationalCode.message}
              </span>
            )}
          </div>

          {/* جنسیت */}
          <div className="flex flex-col lg:w-1/3">
            <select
              {...register("gender")}
              className="border border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition"
            >
              <option value="">انتخاب کنید</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>

          {/* تاریخ تولد */}
          <div className="flex flex-col lg:w-1/3">
            <input
              type="date"
              {...register("birthDate")}
              className="border border-[#00000033] p-2 text-[14px] rounded-[5px] outline-0 hover:border-green-500 transition"
            />
            {errors.birthDate && (
              <span className="text-red-500 text-sm mt-1">
                {errors.birthDate.message}
              </span>
            )}
          </div>

          {/* دکمه‌ها */}
          <div className="flex gap-x-3 mt-5 lg:justify-end w-full">
            <button
              type="submit"
              className="bg-primary text-white rounded-[5px] font-semibold w-1/2 py-2 hover:bg-green-700 transition lg:w-36"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                reset(); // بازگرداندن به مقادیر اولیه
              }}
              className="border-2 border-primary text-primary rounded-[5px] font-semibold w-1/2 py-2 lg:w-36"
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        // نمایش اطلاعات
        <div className="flex flex-col gap-y-6 mt-8.5 lg:flex-row lg:flex-wrap ">
          <div className="text-[14px] flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-8">
            <span>نام</span>
            {data?.data?.firstName ?<span className="text-secondary font-semibold">{data?.data?.firstName} </span>: <span className="text-secondary font-semibold"> - </span>}
          </div>
          <div className="text-[14px] flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-8">
            <span>نام خانوادگی</span>
            {data?.data?.lastName ?<span className="text-secondary font-semibold">{data?.data?.lastName}</span>: <span className="text-secondary font-semibold"> - </span>}

          </div>
          <div className="text-[14px] flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-8">
            <span>کدملی</span>
            {data?.data?.nationalCode ?<span className="text-secondary font-semibold">{data?.data?.nationalCode}</span>: <span className="text-secondary font-semibold"> - </span>}

          </div>
          <div className="text-[14px] flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-[99px]">
            <span>جنسیت</span>
            {data?.data?.gender ?<span className="text-secondary font-semibold">{data?.data?.gender === 'male' ? 'مرد' : 'زن'}</span>: <span className="text-secondary font-semibold"> - </span>}
          </div>
          <div className="text-[14px] flex justify-between lg:w-2/4 lg:justify-start lg:gap-x-8">
            <span>تاریخ تولد</span>
            {data?.data?.birthDate ?<span className="text-secondary font-semibold">{data?.data?.birthDate}</span>: <span className="text-secondary font-semibold"> - </span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
