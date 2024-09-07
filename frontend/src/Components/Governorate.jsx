import React from "react";
import { Outlet } from "react-router-dom";
import TopInfoLinks from "./TopInfoLinks";
import Navbar from "./Navbar";
import SingleGovmates from "./Governorate/SingleGovmates";
import bg from "../assets/images/young-man-sitting-tent-with-holding-coffee-cup.jpg";
const Governorate = () => {
  const links = [
    { link: "مفوضية-بيروت/", text: "مفوضية بيروت" },
    { link: "مفوضية-الشمال/", text: "مفوضية الشمال" },
    { link: "مفوضية-الجنوب/", text: "مفوضية الجنوب" },
    { link: "مفوضية-البقاع/", text: "مفوضية البقاع" },
    { link: "مفوضية-جبل-لبنان/", text: "مفوضية جبل لبنان" },
    { link: "مفوضية-مرجعيون-حاصبيا/", text: "مفوضية مرجعيون حاصبيا" },
  ];
  return (
    <div>
      <Navbar />
      <TopInfoLinks background={bg} links={links} />
      <SingleGovmates />
    </div>
  );
};

export default Governorate;
