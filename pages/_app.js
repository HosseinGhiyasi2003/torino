import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const [isOtpFormOpen, setIsOtpFormOpen] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout isOtpFormOpen={isOtpFormOpen} setIsOtpFormOpen={setIsOtpFormOpen}>
          <Component {...pageProps} isOtpFormOpen={isOtpFormOpen} setIsOtpFormOpen={setIsOtpFormOpen} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
