import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SingleAboutusdiv = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col  font-Aljazeera items-center bg-white shadow-lg pb-5 rounded-lg max-w-sm mx-4 my-6  transition-all mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }} // Adds hover scale and shadow effect
    >
      <motion.img
        src={props.img}
        alt="About Us"
        className="w-full h-40 object-cover mb-4 rounded-md transition-transform duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }} // Image zooms in slightly on hover
      />
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-lg"
        whileHover={{ opacity: 0.1 }} // Dark overlay appears on hover
      ></motion.div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-xl font-semibold mb-2 text-gray-900"
          whileHover={{
            y: -2,
            transition: { duration: 0.3, ease: "easeInOut" },
          }} // Title text slightly moves up on hover
        >
          {props.title || "Title"}
        </motion.h1>
        <motion.p
          className="text-gray-600 p-3"
          whileHover={{
            y: -1,
            transition: { duration: 0.3, ease: "easeInOut" },
          }} // Paragraph text slightly moves up on hover
        >
          {props.descreption}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SingleAboutusdiv;
