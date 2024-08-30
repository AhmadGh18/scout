import React from "react";
import { motion } from "framer-motion";
import SingleService from "./SingleService";

const Service = () => {
  return (
    <div className="p-8 bg-gray-100 font-Aljazeera">
      <h1 className="text-5xl text-center p-3">خدماتنا</h1>
      <div className="container mx-auto">
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
