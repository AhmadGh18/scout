import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/images/portfolio-3.jpg"; // First image
import img2 from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg"; // Second image
import AllMedia from "./AllMedia";
import TopInfo from "./TopInfo";

const Projects = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false); // State to track interaction
  const location = useLocation(); // Hook to get the current location

  const images = [img1, img2]; // Array of images

  const handleInteraction = () => {
    setHasInteracted(true); // Set to true when a link is clicked
  };

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
    <div className="bg-gray-100 mt-16 overflow-hidden">
      <div className="text-center font-Aljazeera mx-4 md:mx-16">
        <TopInfo title="بعض المشاريع" />
        <p className="mt-4 text-lg mb-4">
          تعرف على بضعا من انشطتنا عبر خئة الصور
        </p>
      </div>
      <div className="flex font-bold gap-2 justify-center font-Aljazeera flex-wrap mx-4 md:mx-16">
        {[
          { to: "/نشرة", label: "نشرة" },
          { to: "/وثائق", label: "وثائق" },
          { to: "/تجارب", label: "تجارب" },
          { to: "/تصاميم", label: "تصاميم" },
          { to: "/صور", label: "صور" },
          { to: "/مشاريع", label: "مشاريع" },
          { to: "/", label: "All" },
        ].map((item, index) => (
          <span
            key={index}
            className={`p-2 border-2 cursor-pointer transition-all duration-300 flex-1 text-center ${
              location.pathname === item.to
                ? "border-primary"
                : "border-gray-200 hover:border-primary"
            }`}
          >
            <Link
              to={item.to}
              className="block w-full h-full"
              onClick={handleInteraction} // Track interaction
            >
              {item.label}
            </Link>
          </span>
        ))}
      </div>

      {/* Display images only when on root path and no interaction has occurred */}
      {location.pathname === "/" && !hasInteracted && isOnAll && <AllMedia />}

      {/* Full Screen Modal */}

      {/* Display content based on the current route */}
      <div className="mt-8 max-w-full p-4 mx-4 md:mx-16 overflow-hidden relative flex justify-center mb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
