import React from "react";
import { motion } from "framer-motion";
import img from "../assets/images/portfolio-3.jpg";
import img2 from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
import img3 from "../assets/images/hiker-stand-camping-near-orange-tent-backpack-mountains.jpg";
import TestSingleLatestnew from "./TestSingleLatestnew";
import TopInfo from "./TopInfo";
import { Link } from "react-router-dom";

const TestLatestNew = ({ show }) => {
  const newsItems = [
    {
      image: img3,
      title: "العنوان 1",
      author: "الكاتب 1",
      date: "2024-08-31",
      description:
        "وصف للخبر الأول. وصف للخبر الأول. وصف للخبر الأول. وصف للخبر الأول.",
    },
    {
      image: img,
      title: "العنوان 2",
      author: "الكاتب 2",
      date: "2024-08-30",
      description:
        "وصف للخبر الثاني. وصف للخبر الثاني. وصف للخبر الثاني. وصف للخبر الثاني.",
    },
    {
      image: img,
      title: "العنوان 3",
      author: "الكاتب 3",
      date: "2024-08-29",
      description:
        "وصف للخبر الثالث. وصف للخبر الثالث. وصف للخبر الثالث. وصف للخبر الثالث.",
    },
  ];

  return (
    <div className="p-4 font-Aljazeera mt-2 bg-gray-50">
      <TopInfo title="أخبارنا" />

      {/* Apply smoother animation with reduced delays */}
      <motion.div
        initial="hidden"
        animate="show"
        className="flex gap-4 flex-wrap justify-center items-center mt-10 mr-3"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1, // Faster stagger for a smoother feel
              delayChildren: 0.2, // Slight delay but quicker
              duration: 0.3, // Quicker overall animation
              ease: "easeOut",
            },
          },
        }}
      >
        {newsItems.map((item, index) => (
          <TestSingleLatestnew
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            date={item.date}
            description={item.description}
          />
        ))}
      </motion.div>
      {show == true && (
        <Link
          to="/اخبارنا"
          className="flex justify-center text-lg cursor-pointer bg-primary py-2 px-4 text-white rounded w-fit m-auto mt-3"
        >
          عرض المزيد...
        </Link>
      )}
    </div>
  );
};

export default TestLatestNew;
