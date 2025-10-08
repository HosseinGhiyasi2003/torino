import Image from "next/image"
import SearchBoxWrapper from "../module/SearchBoxWrapper"

function HomePage() {
  return (
    <>
      <div className="flex justify-center mt-3 lg:mt-[15px]">
        <Image src='/images/bg-background.png' width={400}  height={300} alt="background" className="max-w-[1440px] w-full" />
      </div>
      <SearchBoxWrapper/>
    </>
  )
}

export default HomePage