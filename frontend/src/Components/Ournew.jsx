import React from "react";
import Navbar from "./Navbar";
import LatestNews from "./LatestNews";
import TestLatestNew from "./TestLatestNew";
import TopInfo from "./TopInfo";
import LinkOfPage from "./LinkOfPage";

const Ournew = () => {
  return (
    <div>
      <Navbar />
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
