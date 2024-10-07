import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/mslogo.png";
import TopNavBar from "./TopNavBar";

// Mapping of navigation items and their sub-items with URLs
const navItems = {
  "من نحن": {
    url: "/من-نحن",
    subItems: [
      { name: "الرؤية والرسالة والقيم", url: "/الرؤية-والرسالة-والقيم" },
      { name: "الوعد والقانون", url: "/الوعد-و-القانون" },
      { name: "قصة الكشفية", url: "/قصة-الكشفية" },
      { name: "نبدة عن تاريخ الجمعية", url: "/نبدة-عن-تاريخ-الجمعية" },
    ],
  },
  "هيكلية الجمعية": {
    url: "/هيكلية-الجمعية",
    subItems: [
      { name: "الهيكلية الإدارية", url: "/الهيكلية-الإدارية" },
      { name: "الهيئة العامة", url: "/الهيئة-العامة" },
      { name: "المفوضية العامة", url: "/المفوضية-العامة" },
      { name: "القيادة العامة", url: "/القيادة-العامة" },
    ],
  },
  برامجنا: {
    url: "/برامجنا",
    subItems: [
      { name: "حلقة-الكشافة-مرشدات", url: "/برامجنا/حلقة-الكشافة-مرشدات" },
      { name: "حلقة-الجوالة-دليلات", url: "/برامجنا/حلقة-الجوالة-دليلات" },
      { name: "حلقة-الأشبال-الزهرات", url: "/برامجنا/حلقة-الأشبال-الزهرات" },
      { name: "التنمية-المستدامة", url: "/برامجنا/التنمية-المستدامة" },
      { name: "خدمة-المجتمع", url: "/برامجنا/خدمة-المجتمع" },
    ],
  },
  "مفوضيات الاحتصاص": {
    url: "/مفوضيات-الاحتصاص",
    subItems: [
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
  },
  "مفوضيات المناطق": {
    url: "/مفوضيات-المناطق",
    subItems: [
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
  },
  اخبارنا: {
    url: "/اخبارنا",
    subItems: [
      { name: "القيادة-العامة", url: "/اخبارنا/القيادة-العامة" },
      { name: "المفوضية-العامة", url: "/اخبارنا/المفوضية-العامة" },
      { name: "مفوضيات-المناطق", url: "/اخبارنا/مفوضيات-المناطق" },
    ],
  },
  ميديا: {
    url: "/ميديا",
    subItems: [
      { name: "الصور", url: "/ميديا/صور" },
      { name: "الفيديوهات", url: "/ميديا/الفيديوهات" },
      { name: "تصاميم", url: "/ميديا/تصاميم" },
      { name: "تسجيلات-صوتية", url: "/ميديا/تسجيلات-صوتية" },
      { name: "تسجيلات-فيديو", url: "/ميديا/تسجيلات-فيديو" },
    ],
  },
  بحث: { url: "/بحث", subItems: [] },
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
    <div>
      <TopNavBar />
      <nav className="bg-whiteColor p-1 shadow-lg sticky top-0 z-50 font-Aljazeera text-lg">
        <div className="flex justify-between md:justify-around   items-center w-full">
          <div className="font-bold h-100 object-contain w-auto z-50">
            <Link to="/">
              <img src={logo} alt="Logo" className="ml-auto" />
            </Link>{" "}
          </div>
          <button
            onClick={toggleMenu}
            className="text-2xl md:hidden focus:outline-none ml-4"
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
                <Link
                  to={navItems[item].url}
                  className="flex items-center justify-between w-full p-4 hover:bg-gray-200 rounded-md transition-colors duration-300 text-left md:text-center"
                >
                  <span>{item}</span>
                </Link>
                <span className="md:hidden">
                  {expandedLink === item ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
                <AnimatePresence>
                  {expandedLink === item &&
                    navItems[item].subItems.length > 0 && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-whiteColor text-gray-800 md:w-[200px] md:mt-0 md:absolute md:right-0 md:bg-whiteColor md:shadow-md md:rounded-md"
                      >
                        {navItems[item].subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="p-2 hover:bg-gray-200">
                            <Link to={subItem.url}>{subItem.name}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden w-full text-right"
            >
              {Object.keys(navItems).map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <div
                    className="flex items-center justify-between p-4 hover:bg-gray-200 rounded-md transition-colors duration-300"
                    onClick={() => toggleSubMenu(item)}
                  >
                    <Link to={navItems[item].url}>{item}</Link>
                    <span>
                      {expandedLink === item ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  </div>
                  <AnimatePresence>
                    {expandedLink === item &&
                      navItems[item].subItems.length > 0 && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-whiteColor text-gray-800"
                        >
                          {navItems[item].subItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="p-2 pl-8 hover:bg-gray-200"
                            >
                              <Link to={subItem.url}>{subItem.name}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
