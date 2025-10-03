import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Header({setIsOtpFormOpen}) {
  
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <div className="flex justify-between mt-[13px]">
          <div className=" lg:hidden cursor-pointer" onClick={() => setIsSideBarOpen(true)}>
            <Image src='/icons/hamburger-menu.png' width={16} height={16} className="w-5 h-4"  alt="menu" />
          </div>
          <div className="lg:hidden cursor-pointer">
            <Image src='/icons/sign-in-buttom.png' width={20} height={20} className="size-10"  alt="signin" onClick={() =>setIsOtpFormOpen(true)} />
          </div>
          <div className="hidden lg:flex items-center gap-21">
            <div className="">
              <Image src='/images/Torino.png'  width={60} height={60} className="w-[146px] h-11" alt="لوگو" />
            </div>
            <nav className="flex gap-x-[17px] text-secondary">
              <Link href="/">صفحه اصلی</Link>
              <Link href="/">خدمات گردشگری</Link>
              <Link href="/">درباره ما</Link>
              <Link href="/">تماس با ما</Link>
            </nav>
          </div>
          <button onClick={() =>setIsOtpFormOpen(true)} className="w-[166px] h-11 border-2 border-primary hidden lg:flex rounded-[8px] items-center px-[15px] text-primary cursor-pointer text-[18px]">
            <div className="flex gap-x-1 border-l pl-2 ml-2 items-center">
              <Image src='/icons/profile.png' alt="icon"  width={16} height={16} className="size-4" />
              <span>ورود</span>
            </div>
            <div>ثبت نام</div>
          </button>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    </header>
  );
}

export default Header;
