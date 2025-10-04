import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const [isOtpFormOpen, setIsOtpFormOpen] = useState(false)
  const [confirmedNumber, setConfirmedNumber] = useState(null)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontFamily: "Yekan Bakh, sans-serif",
              fontSize: "14px",
              direction: "rtl",
            },
            success: {
              duration: 10000,
              iconTheme: { primary: "#10B981", secondary: "white" },
            },
            error: {
              duration: 10000,
              iconTheme: { primary: "#EF4444", secondary: "white" },
            },
          }}
        />

        <Layout isOtpFormOpen={isOtpFormOpen} setIsOtpFormOpen={setIsOtpFormOpen} confirmedNumber={confirmedNumber}>
          <Component {...pageProps} isOtpFormOpen={isOtpFormOpen} setIsOtpFormOpen={setIsOtpFormOpen} setConfirmedNumber={setConfirmedNumber} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
