import React, { useState } from "react";
import img from "../../assets/images/portfolio-3.jpg";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLink, FaTimes } from "react-icons/fa";

const Project = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePreviewOpen = () => {
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    setIsFullScreen(false); // Ensure fullscreen is closed when closing the preview
  };

  return (
    <div className="relative">
      {/* Thumbnail Image */}
      <motion.div
        className="relative inline-block group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={img}
          className="h-70 w-80 cursor-pointer rounded-lg"
          alt="Design"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={handlePreviewOpen}
        />

        {/* Buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            onClick={() => handlePreviewOpen(true)}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-4"
          >
            <FaLink className="text-gray-800 text-xl" />
          </a>
          <a className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaExternalLinkAlt className="text-gray-800 text-xl" />
          </a>
        </div>
      </motion.div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handlePreviewClose}
        >
          <motion.div
            className="relative bg-white p-4 rounded-lg max-w-3xl max-h-3xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={handlePreviewClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
            >
              <FaTimes className="text-gray-800 text-xl" />
            </button>

            <motion.img
              src={img}
              className="w-full h-auto rounded-lg"
              alt="Design Preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      )}

      {/* Full Screen Modal */}
      {isFullScreen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handlePreviewClose}
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
