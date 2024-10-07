import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import LinkOfPage from "./LinkOfPage";
const SingleProgram = (props, { index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link to={props.link ? props.link : "#"}>
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
          whileHover={{ y: -20 }}
          className="bg-primary w-80  flex flex-col  justify-start items-center text-white rounded-lg overflow-hidden shadow-sm shadow-gray-800"
        >
          <div className="bg-white w-full flex justify-center items-center py-6 ">
            <img src={props.image} className="text-5xl text-primary h-40" />
            {props.icon && (
              <span className="text-5xl text-primary">{props.icon}</span>
            )}
          </div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              {props.title}
            </p>
            {props.description && (
              <p className="text-sm text-center leading-8">
                تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية
                الشباب من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون
                لتمكين الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة
                لخدمة الوطن
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default SingleProgram;
