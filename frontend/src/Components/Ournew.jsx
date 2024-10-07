import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LatestNews from "./LatestNews";
import TestLatestNew from "./TestLatestNew";
import TopInfo from "./TopInfo";
import LinkOfPage from "./LinkOfPage";

const Ournew = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <LinkOfPage
        homeTitle=" اخبارنا"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: " اخبارنا", url: "/اخبارنا" },
        ]}
      />
      <TestLatestNew />{" "}
    </div>
  );
};

export default Ournew;
