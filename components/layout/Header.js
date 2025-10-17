import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getCookie } from "@/utils/cookie";
import { SlBasketLoaded } from "react-icons/sl";


function Header({ setIsOtpFormOpen }) {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    const phone = getCookie("phone");
    const token = getCookie("accessToken");
    if (phone && token) {
      setUserPhone(phone);
    }
  }, []);

  return (
    <header>
      <div className="container">
        <div className="flex justify-between mt-[13px]">
          <div
            className=" lg:hidden cursor-pointer"
            onClick={() => setIsSideBarOpen(true)}
          >
            <Image
              src="/icons/hamburger-menu.png"
              width={16}
              height={16}
              className="w-5 h-4"
              alt="menu"
            />
          </div>
          {userPhone ? (
            <button onClick={() => setUserProfile(prevState => !prevState)} className="relative flex items-center lg:hidden cursor-pointer">
              <Image
                src="/icons/profile.png"
                width={14}
                height={14}
                alt="user"
                className="size-3.5"
              />
              <span className="mx-1 text-primary font-medium text-[14px]">
                {userPhone}
              </span>
              <Image
                src="/icons/arrow-down.png"
                width={16}
                height={16}
                alt="arrow-down"
                className="size-4"
              />
              {userProfile && (
                <div className="absolute left-2.5 w-[157px] top-10 bg-white px-3 rounded-[11px]">
                  <Link
                    href="/profile"
                    className="flex items-center gap-x-2 border-b-1 border-[#0000001F] py-2"
                  >
                    <Image
                      src="/icons/profile-white.png"
                      width={16}
                      height={16}
                      className="w-4"
                    />
                    <span className="text-[12px]">اطلاعات حساب کاربری</span>
                  </Link>
                  <Link
                    href="/user-basket"
                    className="flex items-center gap-x-3 py-2 border-b-1 border-[#0000001F]"
                  >
                    <SlBasketLoaded/>
                    <span className="text-[12px]">سبد خرید</span>
                  </Link>
                  <div className="flex items-center gap-x-2 border-b-1 border-[#0000001F] py-2">
                    <Image
                      src="/icons/logout.png"
                      width={16}
                      height={16}
                      className="w-4"
                    />
                    <span className="text-[12px] text-[#D40000]">
                      خروج از حساب کاربری
                    </span>
                  </div>
                </div>
              )}
            </button>
          ) : (
            <div className="lg:hidden cursor-pointer">
              <Image
                src="/icons/sign-in-button.png"
                width={20}
                height={20}
                className="size-10"
                alt="signin"
                onClick={() => setIsOtpFormOpen(true)}
              />
            </div>
          )}
          <div className="hidden lg:flex items-center gap-21">
            <div className="">
              <Image
                src="/images/Torino.png"
                width={60}
                height={60}
                className="w-[146px] h-11"
                alt="لوگو"
              />
            </div>
            <nav className="flex gap-x-[17px] text-secondary">
              <Link href="/">صفحه اصلی</Link>
              <Link href="/">خدمات گردشگری</Link>
              <Link href="/">درباره ما</Link>
              <Link href="/">تماس با ما</Link>
            </nav>
          </div>
          {userPhone ? (
            <button onClick={() => setUserProfile(prevState => !prevState)} className="relative hidden lg:flex lg:items-center cursor-pointer">
              <Image
                src="/icons/profile.png"
                width={24}
                height={24}
                alt="user"
                className="size-6"
              />
              <span className="mx-1 text-primary font-medium text-[18px]">
                {userPhone}
              </span>
              <Image
                src="/icons/arrow-down.png"
                width={24}
                height={24}
                alt="arrow-down"
                className="size-6"
              />
              {userProfile && (
                <div  className="absolute left-0 right-0 top-10 bg-white px-3 rounded-[11px]">
                  <Link
                    href="/profile"
                    className="flex items-center gap-x-2 border-b-1 border-[#0000001F] py-2"
                  >
                    <Image
                      src="/icons/profile-white.png"
                      width={16}
                      height={16}
                      className="w-5"
                    />
                    <span className="text-[14px]">اطلاعات حساب کاربری</span>
                  </Link>
                  <Link
                    href="/user-basket"
                    className="flex gap-x-4 items-center py-2 border-b-1 border-[#0000001F]"
                  >
                    <SlBasketLoaded/>

                    <span className="text-[14px]">سبد خرید</span>
                  </Link>
                  <div className="flex items-center gap-x-2 border-b-1 border-[#0000001F] py-2">
                    <Image
                      src="/icons/logout.png"
                      width={16}
                      height={16}
                      className="w-5"
                    />
                    <span className="text-[14px] text-[#D40000]">
                      خروج از حساب کاربری
                    </span>
                  </div>
                </div>
              )}
            </button>
          ) : (
            <button
              onClick={() => setIsOtpFormOpen(true)}
              className="w-[166px] h-11 border-2 border-primary hidden lg:flex rounded-[8px] items-center px-[15px] text-primary cursor-pointer text-[18px]"
            >
              <div className="flex gap-x-1 border-l pl-2 ml-2 items-center">
                <Image
                  src="/icons/profile.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>ورود</span>
              </div>
              <div>ثبت نام</div>
            </button>
          )}
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </header>
  );
}

export default Header;
