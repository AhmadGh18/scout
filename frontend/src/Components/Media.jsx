import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/images/portfolio-3.jpg"; // First image
import img2 from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg"; // Second image
import Navbar from "./Navbar";

const Media = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isOnMedia, setIsOnMedia] = useState(false); // State to track /ميديا route
  const location = useLocation(); // Hook to get the current location

  const images = [img1, img2]; // Array of images

  const openFullScreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const [isOnAll, setIsOnAll] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // State to track interaction

  useEffect(() => {
    // Check if the current path is the root ("/")
    if (location.pathname === "/") {
      setIsOnAll(true);
      setHasInteracted(false); // Reset interaction on home
    } else {
      setIsOnAll(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 mt-16 overflow-hidden">
        <div className="text-center font-Aljazeera mx-4 md:mx-16">
          <div className="flex items-center max-w-full justify-center mt-0">
            <div className="bg-primary text-2xl overflow-hidden w-100px text-white px-8 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center">
              {isOnMedia ? "ميديا" : "بعض المشاريع"}
            </div>
          </div>
          <p className="mt-4 text-lg mb-4">
            {isOnMedia
              ? "تعرف على بضعا من انشطتنا عبر خئة الصور"
              : "تعرف على مشاريعنا عبر خئة الصور"}
          </p>
        </div>
        <div className="flex font-bold max-w-full gap-2 justify-center overflow-hidden font-Aljazeera flex-wrap mx-4 md:mx-16">
          {[
            { to: "/ميديا", label: "All" },

            { to: "/ميديا/صور", label: "صور" },

            { to: "/ميديا/وثائق", label: "وثائق" },

            { to: "/ميديا/مشاريع", label: "مشاريع" },
          ].map((item, index) => (
            <span
              key={index}
              className={`p-2 border-2 cursor-pointer transition-all duration-300 flex-1 text-center ${
                location.pathname === item.to
                  ? "border-primary"
                  : "border-gray-200 hover:border-primary"
              }`}
            >
              <Link to={item.to} className="block w-full h-full">
                {item.label}
              </Link>
            </span>
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
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={closeFullScreen} // Close the modal
              >
                &times;
              </button>
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

        {/* Display content based on the current route */}
        <div className="mt-8 max-w-full p-4 mx-4 md:mx-16 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Media;
