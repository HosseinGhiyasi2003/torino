import Image from "next/image"
import SearchBoxWrapper from "../module/SearchBoxWrapper"
import Tours from "../module/Tours"
import ContactUs from "../module/ContactUs"
import TorinoSlider from "../module/TorinoSlider"
import TourFeatures from "../module/TourFeatures"

function HomePage({data, isError, isPending}) {
  return (
    <>
      {/* <div className="flex justify-center mt-3 lg:mt-[15px]">
        <Image src='/images/bg-background.png' width={400}  height={300} alt="background" className="max-w-[1440px] w-full" />
      </div>
      <SearchBoxWrapper/> */}
      <Tours data={data} isError={isError} isPending={isPending} />
      <ContactUs/>
      <TorinoSlider/>
      <TourFeatures/>
    </>
  )
}

export default HomePage