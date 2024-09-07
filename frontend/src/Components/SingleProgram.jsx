import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const SingleProgram = (props, { index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.1, // Staggered delay based on index
        }}
        whileHover={{ y: -5 }}
        className="bg-gray-50 w-80 shadow-xl flex flex-col  justify-start items-center text-gray-900 rounded-lg overflow-hidden"
      >
        <div className="bg-primary w-full flex justify-center items-center py-6">
          <span className="text-5xl text-white">{props.icon}</span>
        </div>
        <div className="p-6">
          <p className="text-xl font-semibold text-center mb-4">
            {props.title}
          </p>
          <p className="text-sm text-center leading-8">
            تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
            خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين الشباب
            من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleProgram;
