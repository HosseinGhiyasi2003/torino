import Skeleton from "react-loading-skeleton";

function TourItemSkeleton() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-[10px] mt-6 md:mt-0 border-1 border-[#0000001F] shadow-[0_0_2px_0_#00000040] animate-pulse">
      <div className="w-full h-[200px] bg-gray-200 overflow-hidden rounded-t-[10px]">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="px-[9px] py-2">
        <h4 className="text-[#000000] text-[22px] mt-2">
          <Skeleton width="60%" height="1em" />
        </h4>
        <p className="text-secondary mt-1.5 text-[15px]">
          <Skeleton width="40%" height="0.9em" />
        </p>
      </div>
      <div className="flex justify-between items-center border-t-1 border-[#0000001F] px-[9px] py-1.5 mt-1.5">
        <div className="w-[99px] h-[3em] bg-primary rounded-[4px] flex items-center justify-center">
          <Skeleton width="50%" height="1em" />
        </div>
        <div className="flex gap-x-1.5 items-center">
          <Skeleton width="30%" height="1em" />
          <span className="text-secondary">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default TourItemSkeleton;
