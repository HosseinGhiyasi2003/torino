
import { useQuery } from "@tanstack/react-query";
import AccountInfo from "./AccountInfo"
import CreditCardInfo from "./CreditCardInfo"
import PersonalInfo from "./PersonalInfo"
import { getUserProfile } from "@/services/profileApi";
import { useEffect } from "react";

function Profile() {

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(),
    retry: false,
  });

  useEffect(() => {
    if(isError){
      if(error?.status === 401){
        window.location.href = "/";
      }
    }
  }, [isError, error,]);


  return (
    <div className="mt-[23px] lg:w-full lg:mt-4 mb-[41px] lg:mb-12">
      <AccountInfo data={data} isPending={isPending}  />
      <PersonalInfo data={data} isPending={isPending} />
      <CreditCardInfo data={data} isPending={isPending} />
    </div>
  )
}

export default Profile