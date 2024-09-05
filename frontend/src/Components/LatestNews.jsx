import React from "react";
import img from "../assets/images/portfolio-3.jpg";
import SingleLatestNew from "./SingleLatestNew";

const LatestNews = () => {
  // Sample data to be passed as props
  const newsItems = [
    {
      image: img,
      title: "العنوان 1",
      author: "الكاتب 1",
      date: "2024-08-31",
      description:
        "وصف للخبر الأول. وصف للخبر الأول. وصف للخبر الأول. وصف للخبر الأول.",
      direction: "bottom", // Direction of animation
    },
    {
      image: img,
      title: "العنوان 2",
      author: "الكاتب 2",
      date: "2024-08-30",
      description:
        "وصف للخبر الثاني. وصف للخبر الثاني. وصف للخبر الثاني. وصف للخبر الثاني.",
      direction: "left", // Direction of animation
    },
    {
      image: img,
      title: "العنوان 3",
      author: "الكاتب 3",
      date: "2024-08-29",
      description:
        "وصف للخبر الثالث. وصف للخبر الثالث. وصف للخبر الثالث. وصف للخبر الثالث.",
      direction: "right", // Direction of animation
    },
    // Add more items as needed
  ];

  return (
    <div className="p-4 font-Aljazeera mt-2 bg-gray-50 mt-10">
      <div className="flex items-center justify-center md:mt-[-13px]">
        <div className="bg-primary tracking-widest text-2xl p-[12px] text-white px-8 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center">
          اخر الاخبار{" "}
        </div>
      </div>{" "}
      <div className="flex gap-7 flex-wrap justify-center items-center md:mr-[100px] md:ml-[100px] mt-10">
        {newsItems.map((item, index) => (
          <SingleLatestNew
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            date={item.date}
            description={item.description}
            direction={item.direction} // Pass direction prop
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
