import { cities, destinations } from "@/constants/locations";
import Image from "next/image";
import { useState } from "react";

function SearchBoxWrapper() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [originModalOpen, setOriginModalOpen] = useState(false);
  const [destinationModalOpen, setDestinationModalOpen] = useState(false);

 

  return (
    <section className="mt-6">
      <div className="container">
        <h1 className="font-semibold text-center text-[#595959]">
          <span className="text-primary">تورینو</span>برگزار کننده بهترین تور
          های داخلی و خارجی
        </h1>
        {/* mobile design */}
        <div className="flex flex-col items-center gap-3  mt-[25px]">
          {/* مبدأ و مقصد */}
          <div className="flex justify-between w-full">
            {/* مبدأ */}
            <div
              onClick={() => setOriginModalOpen((prevState) => !prevState)}
              className="relative flex items-center justify-center gap-2 border border-gray-300 rounded-xl w-[48%] py-2 cursor-pointer hover:border-green-500 transition"
            >
              <Image
                src="/icons/location.png"
                alt="origin"
                width={20}
                height={20}
              />
              <span className="text-[#00000080] text-[14px]">{origin ? origin : 'مبدا'}</span>
              {originModalOpen && (
                <div className="absolute h-[148px] left-0 right-0 -bottom-39 rounded-[11px] border-1 z-10 bg-white border-[#0000001F] overflow-hidden">
                  <h3 className="text-[13px] bg-[#F8F8F8] p-[7px]">پرتردد</h3>
                  <ul className="">
                    {cities.map((city) => (
                      <li
                        className="flex gap-x-2 border-b-1 px-3 py-2 text-secondary border-[#0000001F] hover:bg-[#0000001F] transition-all duration-150"
                        onClick={() => setOrigin(city.name)}
                      >
                        <Image
                          src="/icons/location.png"
                          width={20}
                          height={20}
                          alt="origin"
                        />
                        <span className="text-[14px]">{city.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* مقصد */}
            <div onClick={() => setDestinationModalOpen(prevState => !prevState)} className="relative flex items-center justify-center gap-2 border border-gray-300 rounded-xl w-[48%] py-2 cursor-pointer hover:border-green-500 transition">
              <Image
                src="/icons/global-search.png"
                alt="destination"
                width={20}
                height={20}
              />
              <span className="text-[#00000080] text-[14px]">{destination ? destination : 'مقصد'}</span>

            {destinationModalOpen && (
               <div className="absolute h-[300px] left-0 right-0 -bottom-77 rounded-[11px] border-1 z-10 bg-white border-[#0000001F] overflow-hidden">
                 <h3 className="text-[13px] bg-[#F8F8F8] p-[7px]">پرتردد</h3>
                 <ul className="">
                   {destinations.map((city) => (
                     <li
                       className="flex gap-x-2  border-b-1 px-3 py-2 text-secondary border-[#0000001F] hover:bg-[#0000001F] transition-all duration-150"
                       onClick={() => setDestination(city.name)}
                     >
                       <Image
                         src="/icons/location.png"
                         width={20}
                         height={20}
                         alt="origin"
                       />
                       <span className="text-[14px]">{city.name}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             )}
            </div>
          </div>

          {/* تاریخ */}
          <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl w-full py-2 cursor-pointer hover:border-green-500 transition">
            <Image
              src="/icons/calendar.png"
              alt="date"
              width={20}
              height={20}
            />
            <span className="text-gray-700 text-[14px]">تاریخ</span>
          </div>

          {/* دکمه جستجو */}
          <button className="bg-green-600 text-white rounded-xl w-full py-2.5 text-[16px] font-medium hover:bg-green-700 transition">
            جستجو
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBoxWrapper;
