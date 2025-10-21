import Image from "next/image";

function Custom500() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center gap-y-3 mt-[33px] mb-[135px] md:flex-row-reverse md:justify-between">
          <div>
            <Image
              src="/images/Error-Lam- Robot.png"
              width={500}
              height={500}
              alt="500 image"
              className="size-80.5 xl:size-[555px]"
            />
          </div>
          <div className="flex flex-col items-center gap-y-5 xl:gap-y-20">
            <h1 className="text-2xl font-semibold xl:text-[36px]">
              اتصال با سرور برقرار نیست!
            </h1>
            <p className="font-semibold rounded-2xl text-xl px-[19px] py-[13.5px] xl:text-[28px] xl:px-[45px] xl:py-4">
              لطفا بعدا دوباره امتحان کنید.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Custom500;
