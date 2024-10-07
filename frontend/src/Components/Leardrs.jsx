import React from "react";
import { Outlet } from "react-router-dom";
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
import LinkOfPage from "./LinkOfPage";
const Leardrs = () => {
  const links = [
    { link: "القيادة-العامة", text: "القيادة العامة" },
    { link: "المفوضية-العامة", text: "المفوضية العامة" },
    { link: "الهيئة-العامة", text: "الهيئة العامة" },
    { link: "الهيكلية-الإدارية", text: "الهيكلية الإدارية" },
  ];
  return (
    <div>
      <LinkOfPage
        homeTitle="هيكلية الجمعية"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "هيكلية الجمعية", url: "/هيكلية-الجمعية" },
        ]}
      />
      <div className="flex justify-center items-center h-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <Infoinpages
            title="الهيئة العامة"
            description="info.description"
            link="/الهيئة-العامة"
            image={img}
          />
          <Infoinpages
            title="المفوضية العامة"
            description="info.description"
            link="/المفوضية-العامة"
            image={img}
          />
          <Infoinpages
            title="الهيكلية الإدارية"
            description="info.description"
            link="/الهيكلية-الإدارية"
            image={img}
          />
          <Infoinpages
            title="القيادة العامة"
            description="info.description"
            link="/القيادة-العامة"
            image={img}
          />
        </div>
      </div>{" "}
      {/* <Outlet /> */}
    </div>
  );
};

export default Leardrs;
