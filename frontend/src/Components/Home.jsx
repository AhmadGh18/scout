import React, { useRef } from "react";

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
import Statistic from "./Statistic";
import Footer from "./Footer";
import MapChart from "./MapChart";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
      <InfoAboutUs />
      <Projects />
      <Statistic />
      <LatestNews display={true} />
      <MapChart />
      <Programs />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
