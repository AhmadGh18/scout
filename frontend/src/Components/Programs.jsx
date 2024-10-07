import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/images/1_1 (1).jpg";
import img2 from "../assets/images/1_1.jpg";
import img3 from "../assets/images/2_4.png";
import img4 from "../assets/images/3_2.jpg";
import img5 from "../assets/images/4_1.jpg";
import TopInfo from "./TopInfo";

const Programs = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <div className="overflow-hidden mt-20 px-4 md:px-0 md:ml-[100px] md:mr-[100px]   ">
        <TopInfo title="شركائنا" />
        <div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2} // Default to 2 slides per view
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 800, // Delay between slides in ms
              disableOnInteraction: false,
            }}
            speed={400}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              // Configure different slides per view for different screen sizes
              640: {
                slidesPerView: 2, // 2 slides per view for small screens
              },
              768: {
                slidesPerView: 3, // 3 slides per view for medium screens
              },
              1024: {
                slidesPerView: 4, // 4 slides per view for large screens
              },
              1280: {
                slidesPerView: 5, // 5 slides per view for extra large screens
              },
              1536: {
                slidesPerView: 6, // 6 slides per view for ultra large screens
              },
            }}
          >
            {[img1, img2, img3, img4, img5, img2, img3, img4, img5].map(
              (img, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[150px] w-[150px]  rounded-full flex items-center justify-center mt-10">
                      <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="object-cover h-full w-full rounded-full"
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Programs;
