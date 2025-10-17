import { HiOutlineEmojiSad } from "react-icons/hi";
import { getBasketData } from "@/services/toursApi";
import BuySection from "../module/BuySection"
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function UserBasketPage() {

  const { data, isPending, isError, error } = useQuery({
      queryKey: ["userBasket"],
      queryFn: () => getBasketData(),
      retry: false,
    });
  
    useEffect(() => {
      if(isError){
      if(error?.status === 401){
        window.location.href = "/";
      }
    }
    }, [isError, error,]);
    

  if(isError) {
    return (
      <div className="container">
        <div className="my-8 bg-[#F3F3F3] py-7 flex gap-x-2.5 justify-center items-center">
          <h2 className="text-xl font-semibold lg:text-4xl">سبدخرید خالی است</h2>
          <HiOutlineEmojiSad className="size-8 lg:size-12" />
        </div>
      </div>
    )
  }
  
  return (
    <section className="lg:bg-[#F3F3F3]">
      <div className="container">
        <BuySection data={data} isPending={isPending} isError={isError} />
      </div>
    </section>
  )
}

export default UserBasketPage