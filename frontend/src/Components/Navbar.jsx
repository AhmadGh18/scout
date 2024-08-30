import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/mslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (link) => {
    if (window.innerWidth >= 768) {
      setExpandedLink(link);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setExpandedLink(null);
    }
  };

  const toggleSubMenu = (link) => {
    if (window.innerWidth < 768) {
      if (expandedLink === link) {
        setExpandedLink(null);
      } else {
        setExpandedLink(link);
      }
    }
  };

  return (
    <nav className="bg-whiteColor p-1 shadow-lg sticky z-50 font-Aljazeera text-lg">
      <div className="flex justify-around items-center w-full">
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex md:items-center md:space-x-6 z-50">
          {["من نحن", "الخدمات", "المدونة", "تواصل معنا"].map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleSubMenu(item)}
                className="flex items-center justify-between w-full p-4 hover:bg-gray-200 rounded-md transition-colors duration-300 text-left md:text-center"
              >
                <span>{item}</span>
                <span className="md:hidden">
                  {expandedLink === item ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {expandedLink === item && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-whiteColor text-gray-800 md:w-[200px] md:mt-0 md:absolute md:right-0 md:top-full border-t md:border-none z-50"
                  >
                    <li>
                      <a
                        href={`#${item.toLowerCase()}1`}
                        className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                      >
                        الرؤية والرسالة والقيم
                      </a>
                    </li>
                    <li>
                      <a
                        href={`#${item.toLowerCase()}2`}
                        className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                      >
                        الوعد والقانون
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden absolute mt-7 w-full top-16 left-0 bg-whiteColor shadow-lg z-50"
            >
              {["من نحن", "الخدمات", "المدونة", "تواصل معنا"].map(
                (item, index) => (
                  <li key={index} className="relative group">
                    <button
                      onClick={() => toggleSubMenu(item)}
                      className="flex items-center justify-between w-full p-4 hover:bg-gray-200 rounded-md transition-colors duration-300 text-left"
                    >
                      <span>{item}</span>
                      <span>
                        {expandedLink === item ? (
                          <FaChevronDown />
                        ) : (
                          <FaChevronRight />
                        )}
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedLink === item && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-whiteColor text-gray-800 border-t z-50"
                        >
                          <li>
                            <a
                              href={`#${item.toLowerCase()}1`}
                              className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                            >
                              الرؤية والرسالة والقيم
                            </a>
                          </li>
                          <li>
                            <a
                              href={`#${item.toLowerCase()}2`}
                              className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                            >
                              الوعد والقانون
                            </a>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="font-bold h-100 object-contain w-auto z-50">
          <img src={logo} alt="Logo" className="ml-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
