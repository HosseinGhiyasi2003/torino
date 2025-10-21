import Image from "next/image";
import Link from "next/link";
import TourItem from "./TourItem";
import { ClipLoader } from "react-spinners";

function Tours({ data, isError, isPending }) {
  if (isError) {
    return (
      <div className="flex justify-center my-9">
        <h2 className="text-4xl text-red-500">
          مشکلی پیش اومده لطفا بعدا امتحان کنید
        </h2>
      </div>
    );
  }

   if (!data?.data?.length) {
    return (
      <div className="container mt-10">
        <h2 className="text-center text-gray-600 text-lg font-medium">
          هیچ توری با این مشخصات پیدا نشد 😕
        </h2>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="container">
        <div className="flex justify-center mt-8">
          <ClipLoader
            color="#28a745"
            loading
            size={70}
          />
        </div>
      </div>
    );
  }

  return (
    <section className="mt-12">
      <div className="container">
        <h3 className="text-xl text-[#000000] lg:text-[32px]">همه تور ها</h3>
        <div className="grid mt-2 grid-cols-12 md:gap-6">
          {data?.data.map((location) => (
            <TourItem key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
