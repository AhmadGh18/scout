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

const MajorsCommissions = () => {
  return (
    <div>
      <Navbar />
      <p className="flex justify-center items-center p-5 md:text-4xl mb-3 font-Aljazeera">
        المفوضيات
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <SingleProgram
          title="مفوضية الشؤون المالية"
          icon={<FaMoneyBillWave />}
        />
        <SingleProgram title="مفوضية الشؤون الإدارية" icon={<FaUserTie />} />{" "}
        <SingleProgram title="مفوضية المراسم" icon={<FaClipboardList />} />{" "}
        <SingleProgram title="مفوضية الإعلام" icon={<FaNewspaper />} />{" "}
        <SingleProgram
          title="مفوضية تنمية القيادات "
          icon={<FaPlaneDeparture />}
        />
        <SingleProgram title="مفوضية  لمناهج والبرامج " icon={<FaBookOpen />} />
        <SingleProgram title="مفوضية  لشؤون الدينية " icon={<FaQuran />} />
      </div>
    </div>
  );
};

export default MajorsCommissions;
