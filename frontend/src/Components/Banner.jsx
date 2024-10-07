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

  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={true} // Disable default navigation
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper11 h-[85vh]"
        ref={swiperRef}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="flex items-center justify-center flex-col "
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10 text-center leading-10">
            <p className="text-white text-3xl font-bold leading-relaxed">
              جمعية الكشاف المسلم في لبنان
            </p>
            <p className="text-white text-xl font-bold mt-2 p-4 leading-10">
              جمعية الكشاف المسلم في لبنان جمعية الكشاف المسلم في لبنان جمعية
              الكشاف المسلم في لبنان
            </p>
            <button className="relative overflow-hidden mt-3 w-32 h-12 bg-white border-none rounded-md text-xl font-bold cursor-pointer text-primary group p-2 m-4">
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                تعرف عليا
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
          className="flex items-center justify-center flex-col "
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10 text-center leading-10">
            <p className="text-white text-3xl font-bold leading-relaxed">
              جمعية الكشاف المسلم في لبنان
            </p>
            <p className="text-white text-xl font-bold mt-2 p-4 leading-10">
              جمعية الكشاف المسلم في لبنان جمعية الكشاف المسلم في لبنان جمعية
              الكشاف المسلم في لبنان
            </p>
            <button className="relative overflow-hidden mt-3 w-32 h-12 bg-white border-none rounded-md text-xl font-bold cursor-pointer text-primary group p-2 m-4">
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                تعرف عليا
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
