import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeaderComp = ({ image, title, description }) => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 md:h-[70vh] h-[40vh] z-0 relative flex flex-col border rounded-lg shadow-lg w-full md:w-1/4 lg:w-1/3 max-w-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {/* Image Section */}
      <div className="relative flex-shrink-0 h-[100%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70 rounded-t-lg"></div>

      <div className="p-4 flex flex-col justify-between flex-1 absolute bottom-0 text-white">
        <h3 className="text-xl font-semibold mb-2 p-3 border-r-4 border-primary rounded-sm">
          {title}
        </h3>

        {/* Description Text that Shows on Hover */}
        <motion.p className="text-white text-sm leading-relaxed max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-32 group-hover:opacity-100 opacity-0">
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LeaderComp;
