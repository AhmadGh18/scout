import React from "react";
import SingleProgram from "./Components/SingleProgram";
import { FaCamera } from "react-icons/fa";
import img from "./assets/images/videos.png";
import img2 from "./assets/images/papers.png";
import img3 from "./assets/images/designs.png";
import img4 from "./assets/images/audios.png";
import img5 from "./assets/images/images (6).png";
import TopInfo from "./Components/TopInfo";

const NewMedia = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <TopInfo title="ميديا" />
      <div className="flex flex-wrap justify-center items-center gap-3 bg-gray-100 p-10">
        <SingleProgram title="ميديا" image={img} />
        <SingleProgram title="ميديا" image={img4} />
        <SingleProgram title="ميديا" image={img3} />
        <SingleProgram title="ميديا" image={img2} />
        <SingleProgram title="ميديا" image={img5} />
      </div>
    </div>
  );
};

export default NewMedia;
