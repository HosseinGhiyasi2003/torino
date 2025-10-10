import OtpForm from "@/components/module/OtpForm";
import SendOtpForm from "@/components/module/SendOtpForm";
import HomePage from "@/components/template/HomePage";
import { getTours } from "@/services/toursApi";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home({
  isOtpFormOpen,
  setIsOtpFormOpen,
  setConfirmedNumber,
}) {
  const [step, setStep] = useState(1);
  const [otpCode, setOtpCode] = useState(null);
  const [userNumber, setUserNumber] = useState(null);

  const { data, isError } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(),
  });  

  return (
    <>
      <HomePage data={data} isError={isError} />
      {step === 1 ? (
        <>
          {isOtpFormOpen && (
            <OtpForm
              setIsOtpFormOpen={setIsOtpFormOpen}
              setStep={setStep}
              setOtpCode={setOtpCode}
              setUserNumber={setUserNumber}
            />
          )}
        </>
      ) : (
        <SendOtpForm
          setStep={setStep}
          otpCode={otpCode}
          userNumber={userNumber}
          setConfirmedNumber={setConfirmedNumber}
        />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
