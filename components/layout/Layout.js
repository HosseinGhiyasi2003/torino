import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, setIsOtpFormOpen }) {
  return (
    <>
      <Header setIsOtpFormOpen={setIsOtpFormOpen} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
