import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

function Sidebar({ isSidebarOpen, setIsSideBarOpen }) {
  return (
    <>
      <div
        className={`${
          isSidebarOpen
            ? "fixed w-full h-full bg-[#3333337D] top-0 right-0 bottom-0 lg:w-0 lg:h-0 z-10"
            : "h-0 w-0 bg-white"
        }`}
      >
        <div
          className={`w-[209px] bg-white absolute top-0 -right-209 bottom-0 rounded-[12px] pr-3 pt-8 lg:hidden transition-all duration-250 ${
            isSidebarOpen && "right-0"
          }`}
        >
          <ul className="flex flex-col gap-y-5.5">
            <div className="flex justify-end pl-5">
              <RxCross1
                className="cursor-pointer"
                onClick={() => setIsSideBarOpen(false)}
              />
            </div>

            <Link href="/">
              <li className="flex gap-x-2 items-center">
                <Image
                  src="/icons/home.png"
                  alt="خانه"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>صفحه اصلی</span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex gap-x-2 items-center">
                <Image
                  src="/icons/airplane-square.png"
                  alt="خانه"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>خدمات گردشگری</span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex gap-x-2 items-center">
                <Image
                  src="/icons/volume.png"
                  alt="خانه"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>درباره ما</span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex gap-x-2 items-center">
                <Image
                  src="/icons/call.png"
                  alt="خانه"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>تماس با ما</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
