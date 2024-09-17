import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLink, FaTimes } from "react-icons/fa";
import img1 from "../assets/images/portfolio-3.jpg";
import img2 from "../assets/images/portfolio-3.jpg";

const images = [img1, img2]; // Array to store all images

const AllMedia = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Open full screen for selected image
  const openFullScreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  // Close full screen modal
  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentImageIndex(null); // Reset index
  };

  // Show previous image in the array
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Show next image in the array
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <div className="mt-8 p-4 mx-4 md:mx-16 max-w-full">
        <div className="flex justify-center gap-4 flex-wrap">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative inline-block w-full max-w-[300px] group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={img}
                className="w-full h-auto cursor-pointer rounded-lg"
                alt={`Design ${index + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Hover Links */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  onClick={() => openFullScreen(index)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-4 cursor-pointer"
                >
                  <FaLink className="text-gray-800 text-xl" />
                </a>
                <a
                  href="#external" // Replace with actual external URL
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <FaExternalLinkAlt className="text-gray-800 text-xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {isFullScreen && currentImageIndex !== null && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={closeFullScreen} // Close the modal on clicking outside the image
          >
            <div
              className="relative w-full h-full max-w-7xl max-h-7/12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 left-4 text-white text-3xl font-bold"
                onClick={closeFullScreen} // Close the modal
              >
                &times;
              </button>

              {/* Full Screen Image */}
              <motion.img
                src={images[currentImageIndex]} // Display the current image
                className="w-full h-full object-contain rounded-lg"
                alt="Design Full Screen"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 text-white text-3xl font-bold"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from closing the modal
                  showPreviousImage();
                }}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                &lt;
              </button>
              <button
                className="absolute right-4 text-white text-3xl font-bold"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from closing the modal
                  showNextImage();
                }}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                &gt;
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AllMedia;
