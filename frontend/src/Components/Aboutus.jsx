import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SingleAboutusdiv from "./SingleAboutusdiv";
import img from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg";
import img2 from "../assets/images/portfolio-3.jpg";

const Aboutus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-10 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h1>
        <p className="text-lg leading-8 text-gray-700 mx-auto tracking-wider mt-11">
          تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
          خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين الشباب
          من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن والمساعدة
          في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء دور بنّاء في المجتم
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        <SingleAboutusdiv
          img={img}
          title="أفضل"
          descreption="  تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
          خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين الشباب
          من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن والمساعدة
          في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء "
        />
        <SingleAboutusdiv
          img={img2}
          title="لخدمة"
          descreption="  تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
          خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين الشباب
          من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن والمساعدة
          في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء "
        />{" "}
        <SingleAboutusdiv
          img={img}
          title="الشباب"
          descreption="  تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
          خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين الشباب
          من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن والمساعدة
          في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء "
        />
      </div>
    </div>
  );
};

export default Aboutus;
