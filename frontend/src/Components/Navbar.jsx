import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/mslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (link) => {
    if (expandedLink === link) {
      setExpandedLink(null);
    } else {
      setExpandedLink(link);
    }
  };

  return (
    <nav className="bg-whiteColor p-1 shadow-lg sticky">
      <div className="flex justify-around items-center w-full">
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static   mt-7 md:mt-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 mt-4" : "translate-x-full"
          } md:translate-x-0 top-16 left-0 md:top-auto md:left-auto`}
        >
          {["من نحن", "الخدمات", "المدونة", "تواصل معنا"].map((item, index) => (
            <li key={index} className="relative group">
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
              <ul
                className={`bg-whiteColor text-gray-800   md:w-[200px] md:mt-0 md:absolute md:right-0 md:top-full border-t md:border-none md:group-hover:block ${
                  expandedLink === item ? "block" : "hidden"
                }`}
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
              </ul>
            </li>
          ))}
        </ul>
        <div className="font-bold h-100 object-contain w-auto">
          <img src={logo} alt="Logo" className="ml-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
