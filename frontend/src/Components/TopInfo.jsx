import React from "react";

const TopInfo = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <div
          className="bg-primary text-white text-2xl p-4 md:px-12 md:py-4 shadow-md text-center tracking-wider font-semibold transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
        >
          {title}{" "}
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
