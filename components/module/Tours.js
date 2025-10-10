import Image from "next/image";
import Link from "next/link";

function Tours({ data, isError }) {
  if (isError) {
    return (
      <div className="flex justify-center my-9">
        <h2 className="text-4xl text-red-500">
          مشکلی پیش اومده لطفا بعدا امتحان کنید
        </h2>
      </div>
    );
  }

  return (
    <section className="mt-12">
      <div className="container">
        <h3 className="text-xl text-[#000000] lg:text-[32px]">همه تور ها</h3>
        <div className="grid mt-2 grid-cols-12 md:gap-6">
          {data?.data.map((location) => (
            <div
              key={location.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-[10px] mt-6 md:mt-0 border-1 border-[#0000001F] shadow-[0_0_2px_0_#00000040] hover:scale-102 hover:shadow-[0_0_5px_0_#00000040] transition-all duration-150"
            >
              <Image
                src={location.image}
                width={200}
                height={200}
                alt="عکس تور"
                className="w-full"
              />
              <div className="px-[9px]">
                <h4 className="text-[#000000] text-[22px] mt-2">
                  {location.title}
                </h4>
                <p className="text-secondary mt-1.5 text-[15px]">
                  {location.options[0]} - {location.options[1]}
                </p>
              </div>
              <div className="flex justify-between items-center border-t-1 border-[#0000001F] px-[9px] py-1.5 mt-1.5">
                <Link
                  href={`tour-details/${location.id}`}
                  className="bg-primary text-white flex justify-center w-[99px] py-[3px] rounded-[4px] text-[15px] hover:bg-green-700 transition cursor-pointer"
                >
                  رزرو
                </Link>
                <div className="flex gap-x-1.5">
                  <span className="text-[#009ECA]">
                    {location.price.toLocaleString()}
                  </span>
                  <span className="text-secondary">تومان</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
