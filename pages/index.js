import OtpForm from "@/components/module/OtpForm";
import SendOtpForm from "@/components/module/SendOtpForm";
import HomePage from "@/components/template/HomePage";
import { useState } from "react";

export default function Home({ isOtpFormOpen, setIsOtpFormOpen }) {
  const [step, setStep] = useState(2);
  return (
    <>
      {/* <HomePage/> */}
      {step === 1 ? (
        <>{isOtpFormOpen && <OtpForm setIsOtpFormOpen={setIsOtpFormOpen} />}</>
      ) : (
        <SendOtpForm setStep={setStep} />
      )}
    </>
  );
}
