import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary items-center justify-center md:p-4 gap-3 md:gap-8 p-2">
      {/* Social Media Icons and Email Information (Small Screen) */}
      <div className="flex flex-row items-center justify-center gap-4 md:gap-8 text-whiteColor text-xl md:text-2xl mb-2 md:mb-0">
        {/* Social Icons */}
        <FaFacebook className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />
        <FaInstagram className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />
        <FaTwitter className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />

        {/* Separator for all screen sizes */}
        <div className="text-whiteColor">|</div>

        {/* Email Icon */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-whiteColor text-lg md:text-xl" />
          <p className="text-whiteColor text-xs md:text-base hidden md:block">
            info@muslimscout.org
          </p>
        </div>
      </div>

      {/* Separator for larger screens */}
      <div className="hidden md:flex text-whiteColor">|</div>

      {/* Location Information */}
      <div className="items-center gap-2 hidden md:flex">
        <FaMapMarkerAlt className="text-whiteColor text-lg md:text-xl" />
        <p className="text-whiteColor text-xs md:text-base">
          كورنيش المزرعا، بيروت
        </p>
      </div>
    </div>
  );
};

export default TopNavBar;
