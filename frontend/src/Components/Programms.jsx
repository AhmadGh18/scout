import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaCampground,
  FaFire,
  FaHandsHelping,
  FaHeart,
  FaTree,
  FaWodu,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import SingleService from "./SingleService";
import SingleProgram from "./SingleProgram";
import LinkOfPage from "./LinkOfPage";
const Programms = ({ index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="font-Aljazeera bg-gray-200">
      <Navbar />
      <LinkOfPage
        homeTitle="القيادة العامة"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: " برامجنا", url: "/برامجنا" },
        ]}
      />
      <h1 className="text-center flex justify-center items-center text-4xl p-6 mb-10  tracking-wider">
        برامجنا
      </h1>
      <motion.div
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
        className="flex justify-center items-center flex-wrap   p-3 gap-4 w-[100%]"
      >
        <SingleProgram icon={<FaFire />} title="حلقة الجوالة / دليلات" />
        <SingleProgram icon={<FaTree />} title="حلقة الأشبال / الزهرات" />
        <SingleProgram icon={<FaCampground />} title=" حلقة الكشافة / مرشدات" />
        <SingleProgram icon={<FaHandsHelping />} title="التنمية المستدامة" />
        <SingleProgram icon={<FaHeart />} title="خدمة المجتمع" />
      </motion.div>
    </div>
  );
};

export default Programms;
/*   <motion.div
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
            <FaFire className="text-5xl text-white" />
          </div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              حلقة الجوالة / دليلات
            </p>
            <p className="text-sm text-center leading-8">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            </p>
          </div>
        </motion.div>
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
            <FaTree className="text-5xl text-white" />
          </div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              حلقة الأشبال / الزهرات
            </p>
            <p className="text-sm text-center leading-8">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            </p>
          </div>
        </motion.div>
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
            <FaCampground className="text-5xl text-white" />
          </div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              حلقة الكشافة / مرشدات
            </p>
            <p className="text-sm text-center leading-8">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            </p>
          </div>
        </motion.div>
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
            <FaHandsHelping className="text-5xl text-white" />
          </div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              التنمية المستدامة
            </p>
            <p className="text-sm text-center leading-8">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            </p>
          </div>
        </motion.div>
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
            className="bg-primary w-full flex justify-center items-center py-6"
          >
            <FaHeart className="text-5xl text-white" />
          </motion.div>
          <div className="p-6">
            <p className="text-xl font-semibold text-center mb-4">
              خدمة المجتمع
            </p>
            <p className="text-sm text-center leading-8">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد والقانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            </p>
          </div>
        </motion.div>*/
