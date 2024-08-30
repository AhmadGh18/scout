import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SingleAboutusdiv = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center bg-white shadow-lg pb-5 rounded-lg max-w-sm mx-4 my-6 font-Aljazeera transition-all hover:mt-[-10px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={props.img}
        alt="About Us"
        className="w-full h-40 object-cover mb-4 rounded-md transition-transform duration-300 ease-in-out "
      />
      <div className="absolute inset-0 bg-black opacity-0  transition-opacity duration-300 rounded-lg"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-xl font-semibold mb-2 text-gray-900 ">Title</h1>
        <p className="text-gray-600 p-3 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          dolorum modi atque quidem sunt cum quas corrupti labore sit odio.
        </p>
      </div>
    </motion.div>
  );
};

export default SingleAboutusdiv;
