import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCalendar } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import from react-intersection

const SingleLatestNew = ({ image, title, author, date, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 }); // Change threshold if needed

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref} // Attach ref from react-intersection
      className="flex flex-col border rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4 max-w-sm bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }} // Adjust duration and ease as needed
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105" // Adjust scale and duration
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
