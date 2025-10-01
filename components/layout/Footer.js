import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="border-t-1 border-dashed border-[#00000040]">
          <div className="flex flex-col mt-6 md:flex-row md:justify-between">
            <div className="flex justify-between md:gap-x-14 lg:gap-x-[100px]">
              <ul>
                <h3 className="text-[22px] font-semibold text-secondary md:text-[24px]">
                  تورینو
                </h3>
                <div className="text-[16px] text-secondary mt-5 flex flex-col gap-y-[11px] md:text-[18px]">
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>چرا تورینو</li>
                  <li>بیمه مسافرتی</li>
                </div>
              </ul>
              <ul>
                <h3 className="text-[22px] font-semibold text-secondary md:text-[24px]">
                  خدمات مشتریان
                </h3>
                <div className="text-[16px] text-secondary mt-5 flex flex-col gap-y-[11px] md:text-[18px]">
                  <li>پشتیبانی آنلاین</li>
                  <li>راهنمای خرید</li>
                  <li>راهنمای استرداد</li>
                  <li>پرسش و پاسخ</li>
                </div>
              </ul>
            </div>
            <div className="flex justify-between mt-[37px] md:flex-col-reverse md:justify-end md:items-end gap-y-9">
              <div className="flex flex-wrap justify-center gap-4 max-w-32 md:flex-nowrap md:max-w-90">
                <Image
                  src="/images/ecunion.png"
                  width={40}
                  height={40}
                  alt="ecunion"
                  className="size-7.5 md:size-[48px]"
                />
                <Image
                  src="/images/samandehi.png"
                  width={40}
                  height={40}
                  alt="samandehi"
                  className="size-7.5 md:size-[48px]"
                />
                <Image
                  src="/images/aira.png"
                  width={40}
                  height={40}
                  alt="aira"
                  className="size-7.5 md:size-[48px]"
                />
                <Image
                  src="/images/state-airline.png"
                  width={40}
                  height={40}
                  alt="state-airline"
                  className="size-7.5 md:size-[48px]"
                />
                <Image
                  src="/images/passenger-rights.png"
                  width={40}
                  height={40}
                  alt="passenger-rights"
                  className="size-7.5 md:size-[48px]"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src="/images/Torino.png"
                  width={100}
                  height={30}
                  alt="cover"
                />
                <span className="text-[14px] mt-[11px] text-[#000000]">
                  تلفن پشتیبانی:021-8574
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-1 border-[#00000040] mt-2 md:mt-[37px]">
          <h5 className="text-center text-[#000000] text-[12px] md:pt-3 md:text-[15px]">کلیه حقوق این وب سایت متعلق به تورینو میباشد.</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
