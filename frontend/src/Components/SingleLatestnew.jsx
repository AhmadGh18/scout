import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCalendar } from "react-icons/fa";

const directionVariants = {
  bottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

const SingleLatestNew = ({
  image,
  title,
  author,
  date,
  description,
  direction,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col border rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4 max-w-sm bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6"
      variants={directionVariants[direction]} // Apply animation variant based on direction
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="font-medium">{author}</span>
          <div className="flex items-center ml-4">
            <FaCalendar className="text-primary text-lg" />
            <span className="ml-2 text-gray-500">{date}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href="#"
          className="text-primary font-semibold hover:underline transition-colors duration-300"
        >
          Read More...
        </a>
      </div>
    </motion.div>
  );
};

export default SingleLatestNew;
