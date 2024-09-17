import React from "react";
import img from "../assets/images/portfolio-3.jpg";
import img2 from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
import img3 from "../assets/images/hiker-stand-camping-near-orange-tent-backpack-mountains.jpg";
import SingleLatestNew from "./InfoInpages";
import TopInfo from "./TopInfo";

const LatestNews = (props) => {
  // Sample data to be passed as props
  const newsItems = [
    {
      image: img3,
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
      image: img2,
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
    <div className="p-4 font-Aljazeera mt-2 bg-gray-50 relative ">
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <div
          className="bg-primary text-white text-2xl p-4 mt-[-23px] md:mt-[-10px] md:px-12 md:py-4 shadow-md text-center tracking-wider font-semibold  hover:scale-105"
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
        >
          اخر الاخبار
        </div>
      </div>
      <div className="flex gap-4 flex-wrap justify-center items-center  mt-10">
        {newsItems.map((item, index) => (
          <SingleLatestNew
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
