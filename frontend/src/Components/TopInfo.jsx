import React from "react";

const TopInfo = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 md:mt-0 font-Aljazeera">
        <div className="border-b-4 border-primary text-2xl p-4 md:px-12 md:py-4 text-center tracking-wider font-semibold transition-transform duration-300">
          {title}
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
