import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TorinoSlider() {
  const [current, setCurrent] = useState(0);

  const images = [
    "/images/Hewler.png",
    "/images/Sulaymaniyah.png",
    "/images/houses.png",
    "/images/boat.png",
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="mt-22.5">
      <div className="container">
        <h3 className="text-2xl font-extrabold text-secondary max-w-[300px] mx-auto flex items-center font-vazir gap-x-2 md:hidden">
          <Image
            src="/images/question.png"
            width={34}
            height={38}
            alt="question"
          />
          چرا
          <span className="text-primary"> تورینو </span>؟
        </h3>
        <div className="flex justify-center md:justify-between md:items-start lg:justify-around">
          <div className="max-md:hidden block">
            <h3 className="max-md:hidden flex items-center text-2xl font-extrabold text-secondary max-w-[300px] mx-auto font-vazir lg:text-[40px]">
              <Image
                src="/images/question.png"
                width={59}
                height={68}
                alt="question"
                className="ml-[15px]"
              />
              چرا
              <span className="text-primary"> تورینو </span>؟
            </h3>
            <div className="font-vazir">
              <h5 className="text-secondary text-2xl font-medium mt-8">
                تور طبیعت گردی و تاریخی{" "}
              </h5>
              <p className="max-w-[300px] text-justify leading-[220.00000000000003%] mt-4 text-secondary lg:max-w-[350px] xl:max-w-[450px]">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="relative w-[300px] h-[280px] flex justify-center items-center max-sm:mr-10">
              {images.map((img, index) => {
                const diff = (index - current + images.length) % images.length;
                let translateX = 0;
                let scale = 1;
                let zIndex = 0;
                let opacity = 1;

                if (diff === 0) {
                  scale = 1;
                  zIndex = 30;
                  opacity = 1;
                  translateX = 0;
                } else if (diff === 1 || diff === -images.length + 1) {
                  scale = 0.9;
                  zIndex = 20;
                  translateX = 40;
                  opacity = 0.8;
                } else if (diff === 2 || diff === -images.length + 2) {
                  scale = 0.8;
                  zIndex = 10;
                  translateX = 80;
                  opacity = 0.6;
                } else {
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={img}
                    className="absolute rounded-3xl overflow-hidden shadow-lg"
                    animate={{
                      x: translateX,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  >
                    <Image
                      src={img}
                      alt="tour"
                      width={300}
                      height={280}
                      className="rounded-3xl object-cover w-[280px] h-[250px]"
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 mt-4 text-green-700">
              <button onClick={nextSlide}>
                <ChevronRight className="w-6 h-6" />
              </button>
              <p className="text-gray-700 font-medium">
                {images.length} / {current + 1}
              </p>
              <button onClick={prevSlide}>
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TorinoSlider;
