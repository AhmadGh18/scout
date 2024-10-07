import React from "react";
import Navbar from "./Navbar";
import SingleProgram from "./SingleProgram";
import {
  FaBook,
  FaBookDead,
  FaBookOpen,
  FaClipboardList,
  FaHome,
  FaMoneyBillWave,
  FaNewspaper,
  FaPlaneDeparture,
  FaQuran,
  FaUserTie,
  FaWpressr,
} from "react-icons/fa";
import Infoinpages from "./InfoInpages";
import img from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
import LinkOfPage from "./LinkOfPage";

const MajorsCommissions = () => {
  return (
    <div className="">
      <LinkOfPage
        homeTitle="مفوضيات الاحتصاص"
        breadcrumbs={[
          { name: <FaHome />, url: "/" },
          { name: " مفوضيات الاحتصاص", url: "/مفوضيات الاحتصاص" },
        ]}
      />{" "}
      <div className="flex justify-center gap-5 flex-wrap pt-4 h-auto pb-3 md:h-full">
        <SingleProgram title="مفوضية الشؤون المالية" icon={<FaWpressr />} />
        <SingleProgram
          title="مفوضية الشؤون الإدارية"
          icon={<FaUserTie />}
        />{" "}
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
