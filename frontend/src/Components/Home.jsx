import React, { useEffect, useRef } from "react";

import TopNavBar from "./TopNavBar";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import img1 from "../assets/images/banner1.jpg";
import img2 from "../assets/images/banner3.jpg";
import Banner from "./Banner";
import Services from "./Services";
import InfoAboutUs from "./InfoAboutUs";
import Projects from "./Projects";
import Programs from "./Programs";
import LatestNews from "./LatestNews";
import Footer from "./Footer";
import MapChart from "./MapChart";
import Statistic from "./Statistic";
import TestLatestNew from "./TestLatestNew";
import NewMedia from "../NewMedia";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Banner />
      <InfoAboutUs />
      <TestLatestNew show={true} />

      {/* <LatestNews display={true} /> */}

      <Services />
      {/* <Projects /> */}
      <NewMedia />
      <Statistic />
      <MapChart view={true} />
      {/* <TestMap /> */}
      <Programs />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
