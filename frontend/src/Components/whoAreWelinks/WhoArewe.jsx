import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import rawshi from "../../assets/images/hiker-stand-camping-near-orange-tent-backpack-mountains.jpg";

const WhoArewe = () => {
  return (
    <div>
      <Navbar />

      <div
        className="relative bg-cover bg-center h-[60vh] flex justify-center items-center md:gap-5 font-Aljazeera max-w-full"
        style={{
          backgroundImage: `url(${rawshi})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex md:gap-5 flex-wrap gap-2 justify-center">
          <Link
            to="الرؤية-والرسالة-والقيم/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            الرؤية والرسالة والقيم
          </Link>
          <Link
            to="الوعد-و-القانون/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            الوعد والقانون
          </Link>
          <Link
            to="قصة-الكشفية/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            قصة الكشفية
          </Link>
          <Link
            to="نبدة-عن-تاريخ-الجمعية"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            نبدة عن تاريخ الجمعية
          </Link>
        </div>
      </div>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default WhoArewe;
