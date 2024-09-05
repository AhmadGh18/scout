import React, { useRef } from "react";
import img1 from "../assets/images/banner1.jpg";
import img2 from "../assets/images/banner3.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (swiper.isBeginning) {
        swiper.slideTo(swiper.slides.length - 1); // Go to the last slide if at the beginning
      } else {
        swiper.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (swiper.isEnd) {
        swiper.slideTo(0); // Go to the first slide if at the end
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} // Disable default navigation
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper h-[85vh]"
        ref={swiperRef}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="flex items-center justify-center flex-col"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10 text-center">
            <p className="text-white text-3xl font-bold">
              جمعية الكشاف المسلم في لبنان
            </p>
            <p className="text-white text-xl font-bold mt-2">
              جمعية الكشاف المسلم في لبنان جمعية الكشاف المسلم في لبنان جمعية
              الكشاف المسلم في لبنان
            </p>
            <button className="relative overflow-hidden mt-3 w-32 h-12 bg-white border-none rounded-md text-xl font-bold cursor-pointer text-primary group">
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                تعرف علينا
              </span>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="flex items-center justify-center flex-col"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10 text-center">
            <p className="text-white text-3xl font-bold">
              جمعية الكشاف المسلم في لبنان
            </p>
            <p className="text-white text-xl font-bold mt-2">
              جمعية الكشاف المسلم في لبنان جمعية الكشاف المسلم في لبنان جمعية
              الكشاف المسلم في لبنان
            </p>
            <button className="relative overflow-hidden mt-3 w-32 h-12 bg-white border-none rounded-md text-xl font-bold cursor-pointer text-primary group">
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                تعرف علينا
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        onClick={handlePrev}
        className="hidden absolute top-1/2 left-[10%] transform -translate-y-1/2 border-2 border-white rounded-full p-3 cursor-pointer z-10 md:flex items-center justify-center shadow-lg transition-colors duration-300 ease-in-out hover:bg-primary"
      >
        <FaArrowAltCircleLeft className="w-6 h-6 text-white" />
      </div>
      <div
        onClick={handleNext}
        className="hidden absolute top-1/2 right-[10%] transform -translate-y-1/2 border-2 border-white rounded-full p-3 cursor-pointer z-10 md:flex items-center justify-center shadow-lg transition-colors duration-300 ease-in-out hover:bg-primary"
      >
        <FaArrowAltCircleRight className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default Banner;
