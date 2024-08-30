import React, { useRef } from "react";

import TopNavBar from "./TopNavBar";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import img1 from "../assets/images/banner1.jpg";
import img2 from "../assets/images/banner3.jpg";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
    </div>
  );
};

export default Home;
