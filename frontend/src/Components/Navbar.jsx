import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/mslogo.png";

// Mapping of navigation items and their sub-items with URLs
const navItems = {
  بجث: [],
  ميديا: [
    { name: "الصور", url: "/ميديا/الصور" },
    { name: "الفيديوهات", url: "/ميديا/الفيديوهات" },
  ],
  "مفوضيات الاحتصاص": [
    {
      name: "مفوضية الشؤون المالية",
      url: "/مفوضيات-الاحتصاص/مفوضية-الشؤون-المالية",
    },
    {
      name: "مفوضية الشؤون الإدارية",
      url: "/مفوضيات-الاحتصاص/مفوضية-الشؤون-الإدارية",
    },
    { name: "مفوضية المراسم", url: "/مفوضيات-الاحتصاص/مفوضية-المراسم" },
    { name: "مفوضية الإعلام", url: "/مفوضيات-الاحتصاص/مفوضية-الإعلام" },
    {
      name: "مفوضية تنمية القيادات",
      url: "/مفوضيات-الاحتصاص/مفوضية-تنمية-القيادات",
    },
    {
      name: "مفوضية المناهج والبرامج",
      url: "/مفوضيات-الاحتصاص/مفوضية-المناهج-والبرامج",
    },
    {
      name: "مفوضية الشؤون الدينية",
      url: "/مفوضيات-الاحتصاص/مفوضية-الشؤون-الدينية",
    },
  ],
  "مفوضيات المناطق": [
    { name: "مفوضية الشمال", url: "/مفوضيات-المناطق/مفوضية-الشمال" },
    { name: "مفوضية بيروت", url: "/مفوضيات-المناطق/مفوضية-بيروت" },
    { name: "مفوضية جبل لبنان", url: "/مفوضيات-المناطق/مفوضية-جبل-لبنان" },
    { name: "مفوضية البقاع", url: "/مفوضيات-المناطق/مفوضية-البقاع" },
    { name: "مفوضية الجنوب", url: "/مفوضيات-المناطق/مفوضية-الجنوب" },
    {
      name: "مفوضية مرجعيون وحاصبيا",
      url: "/مفوضيات-المناطق/مفوضية-مرجعيون-وحاصبيا",
    },
  ],
  اخبارنا: [
    { name: "القيادة العامة", url: "/اخبارنا/القيادة-العامة" },
    { name: "المفوضية العامة", url: "/اخبارنا/المفوضية-العامة" },
    { name: "مفوضيات المناطق", url: "/اخبارنا/مفوضيات-المناطق" },
  ],
  برامجنا: [
    { name: "حلقة الكشافة / مرشدات", url: "/برامجنا/حلقة-الكشافة-مرشدات" },
    { name: "حلقة الجوالة / دليلات", url: "/برامجنا/حلقة-الجوالة-دليلات" },
    { name: "حلقة الأشبال / الزهرات", url: "/برامجنا/حلقة-الأشبال-الزهرات" },
    { name: "المخيم الصيفي", url: "/برامجنا/المخيم-الصيفي" },
    { name: "التنمية المستدامة", url: "/برامجنا/التنمية-المستدامة" },
    { name: "خدمة المجتمع", url: "/برامجنا/خدمة-المجتمع" },
  ],
  "هيكلية الجمعية": [
    { name: "الهيكلية الإدارية", url: "/هيكلية-الجمعية/الهيكلية-الإدارية" },
    { name: "الهيئة العامة", url: "/هيكلية-الجمعية/الهيئة-العامة" },
    { name: "المفوضية العامة", url: "/هيكلية-الجمعية/المفوضية-العامة" },
    { name: "القيادة العامة", url: "/هيكلية-الجمعية/القيادة-العامة" },
  ],
  "من نحن": [
    { name: "الرؤية والرسالة والقيم", url: "/من-نحن/الرؤية-والرسالة-والقيم" },
    { name: "الوعد والقانون", url: "/من-نحن/الوعد-و-القانون" },
    { name: "قصة الكشفية", url: "/من-نحن/قصة-الكشفية" },
    { name: "نبدة عن تاريخ الجمعية", url: "/من-نحن/نبدة-عن-تاريخ-الجمعية" },
  ],
};

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
      setExpandedLink(expandedLink === link ? null : link);
    }
  };

  return (
    <nav className="bg-whiteColor p-1 shadow-lg sticky top-0 z-50 font-Aljazeera text-lg">
      <div className="flex justify-between md:justify-around items-center w-full">
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex md:items-center md:space-x-6 z-50">
          {Object.keys(navItems).map((item, index) => (
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
                    {navItems[item].map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.url} // Use Link with 'to' prop for navigation
                          className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
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
              className="md:hidden absolute mt-7 w-full top-16 left-0 bg-whiteColor shadow-lg z-50 overflow-y-auto max-h-[calc(100vh-60px)]" // Make it scrollable
            >
              {Object.keys(navItems).map((item, index) => (
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
                        {navItems[item].map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.url} // Use Link with 'to' prop for navigation
                              className="block p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
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
