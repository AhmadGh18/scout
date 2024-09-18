import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Infoinpages = ({ image, title, description, link }) => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <Link to={link}>
      <motion.div
        ref={ref}
        className="bg-gray-800 w-full sm:w-[90vw] md:w-[40vw] lg:w-[40vw] xl:w-[35vw] h-[30vh] md:h-[40vh] relative flex flex-col border-2 border-gradient-to-r from-primary to-secondary rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-6 sm:mt-3 sm:mx-2 group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {/* Image Section */}
        <div className="relative flex-shrink-0 h-full w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70 rounded-t-lg"></div>

        {/* Text Content */}
        <div className="p-4 flex flex-col justify-between absolute bottom-0 text-white w-full">
          <h3 className="text-xl font-semibold mb-2 p-3 border-r-4 border-primary rounded-sm">
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

export default Infoinpages;
