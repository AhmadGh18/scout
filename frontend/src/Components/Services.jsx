import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TitleHeaders from "./TitleHeaders";
import img1 from "../assets/images/ftyn.png";
import img2 from "../assets/images/jawala.png";
import img3 from "../assets/images/mokhaym.png";
import img4 from "../assets/images/ashbal.png";
import img5 from "../assets/images/ftyan.png";
import TopInfo from "./TopInfo";

const Service = () => {
  const programs = [
    {
      title: "المخيم الصيفي",
      description:
        "برنامج صيفي مليء بالأنشطة والتحديات لتحسين المهارات وتكوين الصداقات.",
      image: img3,
    },
    {
      title: "حلقة الجوالة / دليلات",
      description: "أنشطة تركز على القيادة والمغامرات في الهواء الطلق.",
      image: img2,
    },
    {
      title: "حلقة الكشافة / مرشدات",
      description:
        "تعليم مهارات الكشافة والمرشدات مع التركيز على العمل الجماعي.",
      image: img1,
    },
    {
      title: "حلقة الاشبال / الزهرات",
      description: "أنشطة ممتعة للأطفال مع التركيز على القيم الأساسية والتعلم.",
      image: img4,
    },
    {
      title: "خدمة المجتمع",
      description: "مشاريع تهدف إلى تحسين المجتمع وتقديم المساعدة للمحتاجين.",
      image: img1,
    },
    {
      title: " التنمية المستدامة",
      image: img5,
    },
  ];

  return (
    <div className="bg-whiteColor font-Aljazeera pt-3 servecies">
      <TopInfo title="برامجنا" />
      <div className="md:mx-auto mt-2 px-4 sm:px-6 p-3 ">
        <motion.div
          className="swiper-container"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mx-auto w-full p-10"
          >
            {programs.map((info, index) => (
              <SwiperSlide key={index} className="flex justify-center w-[100%]">
                <TitleHeaders
                  title={info.title}
                  description={info.description}
                  link="#"
                  image={info.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
