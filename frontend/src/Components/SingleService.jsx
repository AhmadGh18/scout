import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTree } from "react-icons/fa";

const SingleService = ({ index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative p-6 bg-white rounded-lg shadow-lg cursor-pointer group overflow-hidden max-w-xs mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1, // Staggered delay based on index
      }}
    >
      <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4">
          <FaTree className="w-8 h-8 text-gray-700 transition-transform duration-300 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-800 group-hover:text-white">
          جلقة الكشاف
        </h1>
        <p className="text-gray-800 transition-colors duration-300 group-hover:text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          dolorum modi atque quidem sunt cum quas corrupti labore sit odio.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          dolorum modi atque quidem sunt cum quas corrupti labore sit odio.
        </p>
      </div>
    </motion.div>
  );
};

export default SingleService;
