import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, setIsOtpFormOpen, confirmedNumber }) {
  return (
    <>
      <Head>
        <title>Torino | تورینو</title>
      </Head>
      <Header
        setIsOtpFormOpen={setIsOtpFormOpen}
        confirmedNumber={confirmedNumber}
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
