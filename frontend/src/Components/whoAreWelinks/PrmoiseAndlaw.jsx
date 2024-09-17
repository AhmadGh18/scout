import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";

const InfoAboutUs = () => {
  const videoControls = useAnimation();
  const textControls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false); // State to track video play status
  const [player, setPlayer] = useState(null); // State to store the YouTube player instance

  const { ref: videoRef, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: textRef, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Function to handle video play
  const handlePlay = () => {
    setIsPlaying(true);
    if (player) {
      player.playVideo(); // Use the player instance to play the video
    }
  };

  // Function to handle when the video player is ready
  const onPlayerReady = (event) => {
    setPlayer(event.target); // Set the player instance to state
  };

  return (
    <div className="">
      {" "}
      {/* Ensures no horizontal overflow */}
      <div className="flex justify-center items-center p-8 bg-whiteColor font-Aljazeera mt-20 flex-wrap">
        <div className="flex flex-col md:flex-row max-w-screen-lg md:mx-auto h-auto gap-5 flex-wrap">
          <motion.div
            ref={textRef}
            className="flex-1 p-8 flex flex-col justify-center text-center md:text-right"
            initial={{ x: 20, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-left">من نحن</h2>
            <p className="text-gray-500 tracking-wider leading-8 text-lg text-left">
              تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية الشباب
              من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و القانون لتمكين
              الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة متوازنة لخدمة الوطن
              والمساعدة في بناء عالم أفضل يلتزم فيه المواطنون كأفراد بأداء دور
              بنّاء في المجتمع.
            </p>
            <button className="relative bg-primary overflow-hidden mt-3 w-32 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer group self-center md:self-auto">
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-widest">
                برامجنا
              </span>
            </button>
          </motion.div>

          <motion.div
            ref={videoRef}
            className="flex-1 relative w-full h-48 md:h-auto rounded-lg bg-gray-200 overflow-hidden"
            initial={{ x: -20, opacity: 0 }} // Smaller X offset here too
            animate={videoControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <YouTube
              className="h-full absolute w-full rounded-lg"
              videoId="DZsIGQIWf48"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 0, // Disable autoplay initially
                  controls: 1, // Show controls
                },
              }}
              onReady={onPlayerReady} // Handle player readiness
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="bg-primary p-6 rounded-full flex items-center justify-center"
                >
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
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoAboutUs;
