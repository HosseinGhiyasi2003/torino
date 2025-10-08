import OtpForm from "@/components/module/OtpForm";
import SendOtpForm from "@/components/module/SendOtpForm";
import HomePage from "@/components/template/HomePage";
import { useState } from "react";

export default function Home({ isOtpFormOpen, setIsOtpFormOpen, setConfirmedNumber}) {
  const [step, setStep] = useState(1);
  const [otpCode, setOtpCode] = useState(null)
  const [userNumber, setUserNumber] = useState(null);

  return (
    <>
      <HomePage/>
      {step === 1 ? (
        <>{isOtpFormOpen && <OtpForm setIsOtpFormOpen={setIsOtpFormOpen} setStep={setStep} setOtpCode={setOtpCode} setUserNumber={setUserNumber} />}</>
      ) : (
        <SendOtpForm setStep={setStep} otpCode={otpCode} userNumber={userNumber} setConfirmedNumber={setConfirmedNumber} />
      )}
    </>
  );
}
