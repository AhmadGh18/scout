// import React, { useEffect, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import img1 from "../assets/images/portfolio-3.jpg"; // First image
// import img2 from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg"; // Second image

// const Projects = () => {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(null);
//   const [hasInteracted, setHasInteracted] = useState(false); // State to track interaction
//   const location = useLocation(); // Hook to get the current location

//   const images = [img1, img2]; // Array of images

//   const handleInteraction = () => {
//     setHasInteracted(true); // Set to true when a link is clicked
//   };

//   const openFullScreen = (index) => {
//     setCurrentImageIndex(index);
//     setIsFullScreen(true);
//   };

//   const closeFullScreen = () => {
//     setIsFullScreen(false);
//     setCurrentImageIndex(null);
//   };

//   const showNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const showPreviousImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };
//   const [isOnAll, setisonAll] = useState(true);
//   useEffect(() => {
//     if (location.pathname === "/") {
//       setisonAll(true);
//     }
//   }, [location.pathname]);

//   return (
//     <div className="bg-gray-50">
//       <div className="text-center font-Aljazeera">
//         <div className="flex items-center justify-center mt-0">
//           <div className="bg-primary text-2xl p-[12px] text-white px-4 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center">
//             بعض المشاريع
//           </div>
//         </div>
//         <p className="mt-4 text-lg mb-4">
//           تعرف على بضعا من انشطتنا عبر خئة الصور
//         </p>
//       </div>
//       <div className="flex ml-10 font-bold mr-2 gap-2 justify-center font-Aljazeera flex-wrap md:ml-[100px] md:mr-[100px]">
//         {[
//           { to: "/", label: "All" },
//           { to: "/تصاميم", label: "تصاميم" },
//           { to: "/وثائق", label: "وثائق" },
//           { to: "/نشرة", label: "نشرة" },
//           { to: "/مشاريع", label: "مشاريع" },
//           { to: "/تجارب", label: "تجارب" },
//           { to: "/موارد", label: "موارد" },
//           { to: "/دروس", label: "دروس" },
//           { to: "/مشروعات", label: "مشروعات" },
//         ].map((item, index) => (
//           <span
//             key={index}
//             className={`p-2 border-2 cursor-pointer transition-all duration-300 flex-1 text-center ${
//               location.pathname === item.to
//                 ? "border-primary"
//                 : "border-gray-200 hover:border-primary"
//             }`}
//           >
//             <Link
//               to={item.to}
//               className="block w-full h-full"
//               onClick={handleInteraction} // Track interaction
//             >
//               {item.label}
//             </Link>
//           </span>
//         ))}
//       </div>

//       {/* Display images if no interaction has occurred or if the current route is "All" */}
//       {!hasInteracted || isOnAll ? (
//         <div className="mt-8 p-4 md:ml-[100px] md:mr-[100px] w-auto m-3">
//           <div className="flex gap-4">
//             <motion.div
//               className="relative inline-block"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.img
//                 src={img1}
//                 className="h-50 w-60 cursor-pointer rounded-lg"
//                 alt="Design 1"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 onClick={() => openFullScreen(0)} // Open full screen for img1
//               />
//             </motion.div>
//             <motion.div
//               className="relative inline-block"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.img
//                 src={img2}
//                 className="h-50 w-60 cursor-pointer rounded-lg"
//                 alt="Design 2"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 onClick={() => openFullScreen(1)} // Open full screen for img2
//               />
//             </motion.div>
//           </div>
//         </div>
//       ) : null}

//       {/* Full Screen Modal */}
//       {isFullScreen && currentImageIndex !== null && (
//         <motion.div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           onClick={closeFullScreen} // Close the modal on clicking outside the image
//         >
//           <div
//             className="relative w-7/12 h-7/12"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-3xl font-bold"
//               onClick={closeFullScreen} // Close the modal
//             >
//               &times;
//             </button>
//             <motion.img
//               src={images[currentImageIndex]} // Display the current image
//               className="w-full h-full object-contain rounded-lg"
//               alt="Design Full Screen"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             {/* Navigation Buttons */}
//             <button
//               className="absolute left-4 text-white text-3xl font-bold"
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent click event from closing the modal
//                 showPreviousImage();
//               }}
//               style={{ top: "50%", transform: "translateY(-50%)" }}
//             >
//               &lt;
//             </button>
//             <button
//               className="absolute right-4 text-white text-3xl font-bold"
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent click event from closing the modal
//                 showNextImage();
//               }}
//               style={{ top: "50%", transform: "translateY(-50%)" }}
//             >
//               &gt;
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* Display content based on the current route */}
//       <div className="mt-8 p-4 md:ml-[100px] md:mr-[100px]">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/images/portfolio-3.jpg"; // First image
import img2 from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg"; // Second image

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
    <div className="bg-gray-50 mt-16">
      <div className="text-center font-Aljazeera">
        <div className="flex items-center justify-center mt-0">
          <div className="bg-primary text-2xl p-[12px] text-white px-4 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center">
            بعض المشاريع
          </div>
        </div>
        <p className="mt-4 text-lg mb-4">
          تعرف على بضعا من انشطتنا عبر خئة الصور
        </p>
      </div>
      <div className="flex ml-10 font-bold mr-2 gap-2 justify-center font-Aljazeera flex-wrap md:ml-[100px] md:mr-[100px]">
        {[
          { to: "/", label: "All" },
          { to: "/تصاميم", label: "تصاميم" },
          { to: "/وثائق", label: "وثائق" },
          { to: "/نشرة", label: "نشرة" },
          { to: "/مشاريع", label: "مشاريع" },
          { to: "/تجارب", label: "تجارب" },
          { to: "/موارد", label: "موارد" },
          { to: "/دروس", label: "دروس" },
          { to: "/مشروعات", label: "مشروعات" },
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
      {location.pathname === "/" && !hasInteracted && isOnAll && (
        <div className="mt-8 p-4 md:ml-[100px] md:mr-[100px] w-auto m-3">
          <div className="flex gap-4">
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={img1}
                className="h-50 w-60 cursor-pointer rounded-lg"
                alt="Design 1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => openFullScreen(0)} // Open full screen for img1
              />
            </motion.div>
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={img2}
                className="h-50 w-60 cursor-pointer rounded-lg"
                alt="Design 2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => openFullScreen(1)} // Open full screen for img2
              />
            </motion.div>
          </div>
        </div>
      )}

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
            className="relative w-7/12 h-7/12"
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
      <div className="mt-8 p-4 md:ml-[100px] md:mr-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
