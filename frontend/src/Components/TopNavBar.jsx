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
    <div className="flex flex-col md:flex-row bg-primary items-center justify-center p-4 gap-3 md:gap-8">
      {/* Social Media Icons */}
      <div className="flex items-center gap-4 text-whiteColor text-xl md:text-2xl mb-2 md:mb-0">
        <FaFacebook className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />
        <FaInstagram className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />
        <FaTwitter className="hover:text-gray-300 cursor-pointer transition-colors duration-300" />
      </div>

      {/* Separator */}
      <div className="hidden md:flex text-whiteColor">|</div>

      {/* Email Information */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <FaEnvelope className="text-whiteColor text-lg md:text-xl" />
        <p className="text-whiteColor text-xs md:text-base">
          info@muslimscout.org
        </p>
      </div>

      {/* Separator */}
      <div className="hidden md:flex text-whiteColor">|</div>

      {/* Location Information */}
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-whiteColor text-lg md:text-xl" />
        <p className="text-whiteColor text-xs md:text-base">
          كورنيش المزرعا، بيروت
        </p>
      </div>
    </div>
  );
};

export default TopNavBar;
