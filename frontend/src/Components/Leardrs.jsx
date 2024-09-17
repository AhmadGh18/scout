import React from "react";
import { Outlet } from "react-router-dom";
import TopInfoLinks from "./TopInfoLinks";
import rawshi from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
import Navbar from "./Navbar";
import SingleProgram from "./SingleProgram";
import {
  FaBookOpen,
  FaEye,
  FaHandHoldingHeart,
  FaHistory,
} from "react-icons/fa";
import TitleHeaders from "./TitleHeaders";
import Infoinpages from "./InfoInpages";
import img from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
const Leardrs = () => {
  const links = [
    { link: "القيادة-العامة", text: "القيادة العامة" },
    { link: "المفوضية-العامة", text: "المفوضية العامة" },
    { link: "الهيئة-العامة", text: "الهيئة العامة" },
    { link: "الهيكلية-الإدارية", text: "الهيكلية الإدارية" },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <Infoinpages
            title="info.title"
            description="info.description"
            link="#"
            image={img}
          />
        </div>
      </div>{" "}
      {/* <Outlet /> */}
    </div>
  );
};

export default Leardrs;
