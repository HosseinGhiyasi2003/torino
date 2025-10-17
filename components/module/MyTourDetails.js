import Image from "next/image";
import { FaShuttleVan } from "react-icons/fa";
import { TbCarSuvFilled } from "react-icons/tb";
import MyTourDetailsSkeleton from "./MyTourDetailsSkeleton";


function MyTourDetails({tourDetail, isPending}) {
  
   if (isPending) return <MyTourDetailsSkeleton />;

  return (
    <div className="border-1 border-[#00000033] rounded-[10px] mb-4 ">
      {/* top section */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between pt-4">
        <div className="flex gap-x-4 px-5 lg:gap-x-[147px] lg:px-4">
          <div className="flex items-center gap-x-2">
            <Image
              src="/icons/sun-fog-light.png"
              width={18}
              height={18}
              alt="sun-fog"
              className="size-5 lg:size-6"
            />
            <span className="lg:text-[18px]">{tourDetail.title}</span>
          </div>
          <div className="flex items-center gap-x-2">
            {tourDetail.fleetVehicle == "Bus" ? <Image src='/icons/bus-light.png' width={18} height={18} className="size-4.5" /> : tourDetail.fleetVehicle == "Van" ? <FaShuttleVan />: tourDetail.fleetVehicle == "SUV" || 'Offroad' ? <TbCarSuvFilled /> : tourDetail.fleetVehicle == "Airplane" ? <Image src='/icons/airplane.png' width={18} height={18} className="size-4.5" /> : <Image src='/icons/airplane.png' width={18} height={18} className="size-4.5" />
}
            <span className="lg:text-[18px]">
              {tourDetail.fleetVehicle == "Bus" ? 'سفر با اتوبوس' : tourDetail.fleetVehicle == "Van" ? 'سفر با ون': tourDetail.fleetVehicle == "SUV" || 'Offroad' ? 'سفر با شاسی بلند' : tourDetail.fleetVehicle == "Airplane" ? 'سفر با هواپیما' : 'سفر با هواپیما'
}
            </span>
          </div>
        </div>
        <div className="flex justify-end pl-2 pt-2">
          <div className="w-[80px] py-[3px] text-[12px] bg-[#28A7454D] rounded-[27px] flex justify-center text-primary lg:text-[14px] lg:w-[90px]">
            به اتمام رسیده
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="flex flex-col gap-y-7 px-5 mt-5 lg:flex-row lg:gap-x-10.5">
        <div className="flex justify-between lg:items-center  lg:gap-x-4">
          <h3 className="text-[18px] font-semibold">{tourDetail.origin.name == 'Sanandaj' ? 'سنندج' : tourDetail.origin.name == 'Isfahan' ? 'اصفهان' : 'تهران'} به {tourDetail.destination.name == 'Sanandaj' ? 'سنندج' : tourDetail.destination.name == 'Madrid' ? 'مادرید': tourDetail.destination.name == 'Sulaymaniyah' ? 'سلیمانیه' : tourDetail.destination.name == 'Hewler' ? 'اربیل' : tourDetail.destination.name == 'Mazandaran' ? 'مازندران' : tourDetail.destination.name == 'Offroad' ? 'اف رود' : 'ایتالیا'} </h3>
          <span className="text-[14px] text-[#00000099] lg:text-[18px] font-vazir">
            دوشنبه 15 شهریور 1402
          </span>
        </div>
        <div className="flex justify-between lg:items-center  lg:gap-x-4">
          <h3 className="text-[18px] font-semibold">تاریخ برگشت</h3>
          <span className="text-[14px] text-[#00000099] lg:text-[18px] font-vazir">
            جمعه 19 شهریور 1402
          </span>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex justify-between gap-x-3 py-[9px] border-t-1 border-[#00000033] mt-5 lg:justify-start lg:px-4">
        <div className="flex items-center gap-x-4 pr-2">
          <span className="max-sm:text-[12px] text-[14px] text-[#00000080] lg:text-[16px]">
            شماره تور
          </span>
          <span className="max-sm:text-[10px] font-medium text-[10px] font-vazir">{tourDetail.id}</span>
        </div>
        <div className="max-sm:h-[50px] w-[3px] h-[22px] bg-[#00000033]"></div>
        <div className="flex items-center gap-x-4 pl-2">
          <span className="max-sm:text-[12px] text-[14px] text-[#00000080] lg:text-[16px]">
            مبلغ پرداخت شده
          </span>
          <span className="font-medium flex items-center text-[18px] font-vazir">
            <span className="max-sm:text-[12px]">{tourDetail.price.toLocaleString()}</span>{" "}
            <span className="text-[10px]">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyTourDetails;
