import { getUserTours } from "@/services/toursApi";
import MyTourDetails from "./MyTourDetails";
import { useQuery } from "@tanstack/react-query";

function MyTours() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["userTours"],
    queryFn: () => getUserTours(),
    retry: false,
  });

  if (isError) {
    return (
      <div className="container">
        <div className="mt-[23px] mb-12 w-full lg:border-1 border-[#00000033] lg:mb-[150px] lg:rounded-[10px] lg:p-[13px] lg:mt-4">
          <h3 className="text-center lg:text-2xl text-red-500">
            مشکلی در دریافت تورها به وجود اومده
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[23px] mb-12 w-full lg:border-1 border-[#00000033] lg:mb-[150px] lg:rounded-[10px] lg:p-[13px] lg:mt-4 lg:max-h-[700px] lg:overflow-y-auto">
      {data?.data?.length !== 0 ? (
        data?.data.map((tourDetail) => (
          <MyTourDetails
            key={tourDetail.id}
            tourDetail={tourDetail}
            isPending={isPending}
          />
        ))
      ) : (
        <h3 className="text-center lg:text-2xl">هیچ توری وجود ندارد</h3>
      )}
    </div>
  );
}

export default MyTours;
