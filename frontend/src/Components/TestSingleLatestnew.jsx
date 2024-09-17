import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestSingleLatestnew = ({ image, title, description, date }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Detect when 10% of the component is visible
    triggerOnce: true, // Trigger only once for better performance
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.3, // Faster transition for smoother feel
        ease: "easeOut",
      }}
      className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img src={image} className="w-full h-48 object-cover" alt={title} />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-2 text-sm">
          <p>{date}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <hr className="border-t-2 border-gray-200 mt-4" />
        <p className="p-3 text-primary text-md cursor-pointer hover:text-primary-dark transition-colors duration-300">
          أقرأ المزيد...
        </p>
      </div>
    </motion.div>
  );
};

export default TestSingleLatestnew;
