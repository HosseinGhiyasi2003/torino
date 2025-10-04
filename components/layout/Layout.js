import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, setIsOtpFormOpen, confirmedNumber }) {
  return (
    <>
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
