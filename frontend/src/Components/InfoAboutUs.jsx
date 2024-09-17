import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";

const InfoAboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePlay = () => {
    setIsPlaying(true);
    if (player) {
      player.playVideo();
    }
  };

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <div className="flex justify-center items-center p-8 bg-white font-Aljazeera mt-20 flex-wrap">
      <div className="flex flex-col md:flex-row max-w-screen-lg w-full gap-8">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="text-section flex-1 p-6 text-center md:text-right"
          initial={{ opacity: 0, translateX: 50 }} // Simplified animation
          animate={textInView ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-right">من نحن</h2>
          <p className="text-gray-500 tracking-wider leading-8 text-lg text-right">
            تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب من
            خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين
            الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
            والمساعدة في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء دور
            بنّاء في المجتمع.
          </p>
          <button className="relative bg-primary overflow-hidden mt-6 w-32 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer group">
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-widest">
              برامجنا
            </span>
          </button>
        </motion.div>

        {/* Video Section */}
        <motion.div
          ref={videoRef}
          className="video-section relative md:w-1/2 w-full bg-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={videoInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ minHeight: "200px" }}
        >
          <YouTube
            videoId="DZsIGQIWf48"
            className="absolute top-0 left-0 w-full h-full"
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {
                autoplay: 0,
                controls: 1,
              },
            }}
            onReady={onPlayerReady}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button
                onClick={handlePlay}
                className="bg-primary p-4 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InfoAboutUs;
