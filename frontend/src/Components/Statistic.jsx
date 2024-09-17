import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaUserCircle,
  FaUsers,
  FaClock,
  FaStar,
  FaSearchLocation,
  FaPeopleArrows,
} from "react-icons/fa";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopInfo from "./TopInfo";

const stats = [
  { icon: <FaUserCircle className="text-5xl" />, number: 450, text: "القادة" },
  { icon: <FaUsers className="text-5xl" />, number: 3850, text: "الأفراد" },
  {
    icon: <FaClock className="text-5xl" />,
    number: 1240859,
    text: "ساعات الخدمة سنة 2022",
  },
  { icon: <FaStar className="text-5xl" />, number: 6, text: "مفوضيات" },
  {
    icon: <FaSearchLocation className="text-5xl" />,
    number: 850,
    text: "النشاطات خلال سنة 2022",
  },
  { icon: <FaPeopleArrows className="text-5xl" />, number: 39, text: "أفواج" },
];

const Statistic = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [animatedNumbers, setAnimatedNumbers] = useState(
    stats.map((stat) => 0)
  );

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(stat.number / 100);
          if (count >= stat.number) {
            count = stat.number;
            clearInterval(interval);
          }
          setAnimatedNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = count;
            return newNumbers;
          });
        }, 20); // Adjust speed of counting
      });
    }
  }, [inView]);

  return (
    <div className="mt-10 bg-gray-200">
      <TopInfo title="بالأرقام" />
      <div
        ref={ref}
        className="p-12 bg-gray-200 flex items-center "
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Swiper
          spaceBetween={20} // Adjust space between slides
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="w-full flex items-center swiper-button-prev11" // Ensure Swiper container takes full width
        >
          {stats.map((stat, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center mb-3 swiper-button-prev11"
            >
              <div
                className={`flex flex-col items-center p-6 rounded-lg bg-gray-100 shadow-lg ${
                  inView ? "animate-fadeIn" : ""
                }`}
                style={{ width: "100%" }} // Ensure each slide takes full width
              >
                <div className="text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-primary border-b-4 p-3 border-primary">
                  {animatedNumbers[index]}
                </div>
                <div className="text-lg text-primary font-bold">
                  {stat.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Statistic;
