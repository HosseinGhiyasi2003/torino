import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MyTourDetailsSkeleton() {
  return (
    <div className="border-1 border-[#00000033] rounded-[10px] mb-4 p-4 bg-white">
      {/* 🔹 بخش بالا */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between pt-2">
        <div className="flex gap-x-4 px-2 lg:gap-x-[147px] lg:px-4">
          <div className="flex items-center gap-x-2">
            <Skeleton circle width={24} height={24} />
            <Skeleton width={120} height={20} />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton circle width={20} height={20} />
            <Skeleton width={140} height={20} />
          </div>
        </div>
        <div className="flex justify-end pl-2 pt-2">
          <Skeleton width={90} height={28} borderRadius={20} />
        </div>
      </div>

      {/* 🔹 بخش میانی */}
      <div className="flex flex-col gap-y-7 px-5 mt-5 lg:flex-row lg:gap-x-10.5">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex justify-between items-center w-full lg:w-1/2"
          >
            <Skeleton width="40%" height={20} />
            <Skeleton width="35%" height={18} />
          </div>
        ))}
      </div>

      {/* 🔹 بخش پایینی */}
      <div className="flex justify-between gap-x-3 py-[9px] border-t-1 border-[#00000033] mt-5 lg:justify-start lg:px-4">
        <div className="flex items-center gap-x-4 pr-2">
          <Skeleton width={80} height={18} />
          <Skeleton width={60} height={16} />
        </div>
        <div className="max-sm:h-[50px] w-[3px] h-[22px] bg-[#00000033]" />
        <div className="flex items-center gap-x-4 pl-2">
          <Skeleton width={100} height={18} />
          <Skeleton width={80} height={20} />
        </div>
      </div>
    </div>
  );
}

export default MyTourDetailsSkeleton;
