import React from "react";
import { motion } from "framer-motion";
import SingleService from "./SingleService";

const Service = () => {
  return (
    <div className="p-8 bg-gray-50 font-Aljazeera mt-10">
      <div className="flex items-center justify-center mt-0">
        <div className="bg-primary tracking-widest text-3xl p-[300px] text-white px-4 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center md:mt-[-27px]">
          خدماتنا{" "}
        </div>
      </div>{" "}
      <div className="container mx-auto mt-10">
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:ml-[200px] md:mr-[200px]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Adjust the delay between each item
                delayChildren: 0.5, // Initial delay before the first item appears
              },
            },
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <SingleService key={index} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
