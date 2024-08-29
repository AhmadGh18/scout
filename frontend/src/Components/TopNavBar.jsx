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
    <div className="flex flex-col md:flex-row bg-primary items-center justify-center md:gap-8 p-4 gap-1">
      <div className="flex text-whiteColor gap-3 text-xl md:text-2xl mb-2 md:mb-0">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className="flex flex-row items-center gap-2 mb-2 md:mb-0">
        <p className="text-whiteColor text-xs md:text-lg">
          info@muslimscout.org
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaMapMarkerAlt className="text-whiteColor text-lg md:text-xl" />
        <p className="text-whiteColor text-xs md:text-sm">
          كورنيش المزرعا و بيروت
        </p>
      </div>
    </div>
  );
};

export default TopNavBar;
