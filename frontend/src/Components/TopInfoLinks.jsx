import React from "react";
import { Link } from "react-router-dom";

const TopInfoLinks = (props) => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[60vh] flex justify-center items-center md:gap-5 font-Aljazeera max-w-full"
        style={{
          backgroundImage: `url(${props.background})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex md:gap-5 flex-wrap gap-2 justify-center">
          {props.links.map((el) => {
            return (
              <Link
                key={el}
                to={el.link}
                className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
              >
                {el.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopInfoLinks;
