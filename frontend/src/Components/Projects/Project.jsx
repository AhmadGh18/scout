import React, { useState } from "react";
import img from "../../assets/images/portfolio-3.jpg";
import { motion } from "framer-motion";
const Project = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="relative">
      {/* Thumbnail Image */}
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={img}
          className="h-50 w-60 cursor-pointer rounded-lg"
          alt="Design"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={() => setIsFullScreen(true)}
        />
        {/* Hover Button */}
        {!isFullScreen && (
          <motion.button
            className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
            onClick={() => setIsFullScreen(true)}
          >
            View Full Screen
          </motion.button>
        )}
      </motion.div>

      {/* Full Screen Modal */}
      {isFullScreen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsFullScreen(false)}
        >
          <motion.img
            src={img}
            className="w-3/4 h-auto rounded-lg"
            alt="Design"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Project;
