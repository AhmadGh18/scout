import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import LinkOfPage from "./LinkOfPage";
import img1 from "../assets/images/portfolio-3.jpg";
import img2 from "../assets/images/Screenshot_20231119-140801_Pinterest.jpg";
import SingleImageContainer from "./SingleImageConatiner";
import VoiceDisplay from "./Voicedisplay";
import audio from "../assets/audios/wind-chimes-37762.mp3";

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null); // New state for audio selection

  const mediaItems = [
    {
      id: 1,
      category: "images",
      src: img1,
      title: "نشاط في الحقل",
      desc: "Description for Image 1",
      date: "2023-11-01",
    },
    {
      id: 2,
      category: "designs",
      src: img2,
      title: "نشاط في الحقل",
      desc: "نشاط في الحق نشاط في الحق نشاط في الحق نشاط في الحق نشاط في الحق نشاط في الحق نشاط في الحق",
      date: "2023-11-15",
    },
    {
      id: 3,
      category: "recordings", // Audio file category
      src: audio, // Audio file
      title: "Recording of Wind Chimes",
      desc: "Relaxing wind chimes sound",
      date: "2024-10-03",
    },
  ];

  const Links = [
    { label: "All", category: "all" },
    { label: "صور", category: "images" },
    { label: "وثائق", category: "documents" },
    { label: "تصاميم", category: "designs" },
    { label: "مشاريع", category: "projects" },
    { label: "تسجيلات", category: "recordings" }, // For filtering audio
    { label: "فيديو", category: "videos" },
    { label: "الأناشيد", category: "songs" },
    { label: "النشرة", category: "newsletters" },
  ];

  const filteredMediaItems =
    selectedCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <LinkOfPage
        homeTitle="ميديا"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "ميديا", url: "" },
        ]}
      />
      <div className="flex justify-center flex-col items-center py-10 px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {Links.map((el, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(el.category)}
              className={`border-2 border-primary rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 hover:bg-primary hover:text-white shadow-md ${
                selectedCategory === el.category
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              {el.label}
            </button>
          ))}
        </div>

        {/* Media Items Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {filteredMediaItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {item.category === "recordings" ? (
                <div className="flex justify-center flex-col items-center p-4 bg-gray-100">
                  <h2 className="text-lg font-bold p-3">{item.title}</h2>
                  <button
                    onClick={() => setSelectedAudio(item)}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-secondary transition-all"
                  >
                    Play Audio
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  {/* Overlay Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show Single Image Container if an image is selected */}
        {selectedImage && (
          <SingleImageContainer
            img={selectedImage.src}
            title={selectedImage.title}
            desc={selectedImage.desc}
            date={selectedImage.date}
            onClose={() => setSelectedImage(null)}
          />
        )}

        {/* Show VoiceDisplay if an audio file is selected */}
        {selectedAudio && (
          <VoiceDisplay
            title={selectedAudio.title}
            desc={selectedAudio.desc}
            date={selectedAudio.date}
            audioSrc={selectedAudio.src}
            onClose={() => setSelectedAudio(null)}
          />
        )}
      </div>
    </>
  );
};

export default Media;
