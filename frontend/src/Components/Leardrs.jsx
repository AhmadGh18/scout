import React from "react";
import { Outlet } from "react-router-dom";
import TopInfoLinks from "./TopInfoLinks";
import rawshi from "../assets/images/group-male-friends-having-fun-spending-time-together.jpg";
import Navbar from "./Navbar";

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
      <TopInfoLinks links={links} background={rawshi} />
      <Outlet />
    </div>
  );
};

export default Leardrs;
