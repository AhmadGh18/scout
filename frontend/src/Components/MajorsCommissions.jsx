import React from "react";
import Navbar from "./Navbar";
import SingleProgram from "./SingleProgram";
import {
  FaBook,
  FaBookDead,
  FaBookOpen,
  FaClipboardList,
  FaMoneyBillWave,
  FaNewspaper,
  FaPlaneDeparture,
  FaQuran,
  FaUserTie,
} from "react-icons/fa";
import Infoinpages from "./InfoInpages";
import img from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";

const MajorsCommissions = () => {
  return (
    <div>
      <Navbar />
      <p className="flex justify-center items-center p-5 md:text-4xl mb-3 font-Aljazeera">
        المفوضيات
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <Infoinpages title="مفوضية الشؤون المالية" image={img} />
        <Infoinpages
          title="مفوضية الشؤون الإدارية"
          icon={<FaUserTie />}
          image={img}
        />{" "}
        <Infoinpages
          title="مفوضية المراسم"
          icon={<FaClipboardList />}
          image={img}
        />{" "}
        <Infoinpages
          title="مفوضية الإعلام"
          icon={<FaNewspaper />}
          image={img}
        />{" "}
        <Infoinpages
          title="مفوضية تنمية القيادات "
          icon={<FaPlaneDeparture />}
          image={img}
        />
        <Infoinpages
          title="مفوضية  لمناهج والبرامج "
          icon={<FaBookOpen />}
          image={img}
        />
        <Infoinpages
          title="مفوضية  لشؤون الدينية "
          icon={<FaQuran />}
          image={img}
        />
      </div>
    </div>
  );
};

export default MajorsCommissions;
