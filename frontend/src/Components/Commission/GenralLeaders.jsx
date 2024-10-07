import React from "react";
import leaders from "../../jsons/Leader.json";

// Importing images
import Abdolla from "../../assets/LeadersPic/Abdolla.jpg";
import abedljbbar from "../../assets/LeadersPic/abedljbbar.jpg";
import AhmadLadki from "../../assets/LeadersPic/AhmadLadki.jpg";
import bahaa from "../../assets/LeadersPic/bahaa.jpg";
import fawzi from "../../assets/LeadersPic/fawzi.jpg";
import kaeedaam from "../../assets/LeadersPic/kaeedaam.jpg";
import mahmoud from "../../assets/LeadersPic/mahmoud.jpg";
import mhydeen from "../../assets/LeadersPic/mhydeen.jpg";
import mohamadhabri from "../../assets/LeadersPic/mohamadhabri.jpg";
import mohamadtawfek from "../../assets/LeadersPic/mohamadtawfek.jpg";
import mohammadsaeed from "../../assets/LeadersPic/mohammadsaeed.jpg";
import mostafa from "../../assets/LeadersPic/mostafa.jpg";
import rasheed from "../../assets/LeadersPic/rasheed.jpg";
import shafek from "../../assets/LeadersPic/shafek.jpg";

// Import the wave background image
import waveBackground from "../../assets/images/wave-haikei33_7_-removebg-preview.png";
import { motion, useAnimation, useScroll } from "framer-motion";
import Navbar from "../Navbar";
import LinkOfPage from "../LinkOfPage";

// Map images based on filenames
const images = {
  "Abdolla.jpg": Abdolla,
  "abedljbbar.jpg": abedljbbar,
  "AhmadLadki.jpg": AhmadLadki,
  "bahaa.jpg": bahaa,
  "fawzi.jpg": fawzi,
  "kaeedaam.jpg": kaeedaam,
  "mahmoud.jpg": mahmoud,
  "mhydeen.jpg": mhydeen,
  "mohamadhabri.jpg": mohamadhabri,
  "mohamadtawfek.jpg": mohamadtawfek,
  "mohammadsaeed.jpg": mohammadsaeed,
  "mostafa.jpg": mostafa,
  "rasheed.jpg": rasheed,
  "shafek.jpg": shafek,
};

const GenralLeaders = () => {
  return (
    <div>
      <LinkOfPage
        homeTitle="القيادة العامة"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "هيكلية الجمعية", url: "/هيكلية-الجمعية" },
          { name: " القيادة العامة", url: "" },
        ]}
      />
      <div className="flex flex-wrap gap-6 m-auto justify-center items-center p-8 font-Aljazeera">
        {leaders.map((leader) => (
          <motion.div
            key={leader.name}
            className="relative flex flex-col items-center cursor-pointer justify-center rounded-lg shadow-lg w-[400px] h-[404px] max-w-xs overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative flex flex-col items-center justify-center w-full h-full bg-cover bg-primary p-3 transition duration-300 ease-in-out group-hover:bg-opacity-60"
              style={{
                backgroundImage: `url(${
                  images[leader.picture]
                }), url(${waveBackground})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="absolute inset-0 bg-[#00000093] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.p className="relative text-white px-8 py-2 text-center rounded-md font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {leader.name}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GenralLeaders;
