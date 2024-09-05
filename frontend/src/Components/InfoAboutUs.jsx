import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoAboutUs = () => {
  // Animation controls
  const videoControls = useAnimation();
  const textControls = useAnimation();

  // Set up InView hooks
  const { ref: videoRef, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: textRef, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Start animations based on visibility
  React.useEffect(() => {
    if (inViewVideo) {
      videoControls.start({ x: 0, opacity: 1 });
    }
  }, [inViewVideo, videoControls]);

  React.useEffect(() => {
    if (inViewText) {
      textControls.start({ x: 0, opacity: 1 });
    }
  }, [inViewText, textControls]);

  return (
    <div className="flex justify-center items-center p-8 bg-whiteColor font-Aljazeera mt-20">
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto h-auto md:h-[60vh] overflow-hidden gap-5 flex-wrap-reverse">
        {/* Video Section */}
        <motion.div
          ref={videoRef}
          className="flex-1 relative"
          initial={{ x: -200, opacity: 0 }}
          animate={videoControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            className="w-full h-48 md:h-full rounded-lg"
            src="https://www.youtube.com/embed/DZsIGQIWf48?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-primary p-6 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="flex-1 p-8 flex flex-col justify-center text-center md:text-right"
          initial={{ x: 200, opacity: 0 }}
          animate={textControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-left">من نحن</h2>
          <p className="text-gray-500 tracking-wider leading-8 text-lg text-left">
            تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
            خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين
            الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            والمساعدة في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء دور
            بنّاء في المجتم
          </p>
          <button className="relative bg-primary overflow-hidden mt-3 w-32 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer group self-center md:self-auto">
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-widest">
              برامجنا{" "}
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoAboutUs;
