import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const TitleHeaders = ({ title, description, link, image }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Link to={link}>
      <motion.div
        ref={ref}
        className="relative flex flex-col  border-primary rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 sm:mt-3 group w-full sm:w-[90vw] md:w-[40vw] lg:w-[30vw] xl:w-[28vw] h-[40vh] md:h-[40vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {/* Image Section */}
        <div className="relative flex-shrink-0 h-full w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full  rounded-lg transition-transform  object-contain duration-300 ease-in-out transform group-hover:scale-105"
          />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Text Content */}
        <div className="p-4 flex flex-col justify-between absolute bottom-0 text-white w-full bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 p-3 border-r-4 border-primary rounded-sm">
            {title}
          </h3>

          {/* Description Text that Shows on Hover */}
          <motion.p className="text-white text-sm leading-relaxed max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-32 group-hover:opacity-100 opacity-0">
            {description}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

export default TitleHeaders;
