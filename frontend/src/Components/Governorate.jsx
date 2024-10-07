import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SingleGovmates from "./Governorate/SingleGovmates";
import LinkOfPage from "./LinkOfPage";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported
import governorates from "./lebanon_Governorate_level_1.json";

const Governorate = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  // const links = [
  //   { link: "مفوضية-بيروت/", text: "مفوضية بيروت" },
  //   { link: "مفوضية-الشمال/", text: "مفوضية الشمال" },
  //   { link: "مفوضية-الجنوب/", text: "مفوضية الجنوب" },
  //   { link: "مفوضية-البقاع/", text: "مفوضية البقاع" },
  //   { link: "مفوضية-جبل-لبنان/", text: "مفوضية جبل لبنان" },
  //   { link: "مفوضية-مرجعيون-حاصبيا/", text: "مفوضية مرجعيون حاصبيا" },
  // ];

  const geoJsonLayer = useRef(null);

  // Define default style for the GeoJSON features
  const geoJsonStyle = {
    fillColor: "#522583",
    weight: 2,
    opacity: 1,
    color: "white",
    fillOpacity: 0.7,
  };

  // Style for hover
  const highlightStyle = {
    weight: 3,
    color: "#666",
    fillColor: "white",
    fillOpacity: 0.8,
  };

  const [selectedGovernorate, setSelectedGovernorate] = useState(null);
  const sectionRef = useRef(null); // Create a ref for the target section

  const handleGovernorateClick = (governorate) => {
    setSelectedGovernorate(governorate);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle(highlightStyle);
    layer.openTooltip(); // Show the tooltip on hover
  };

  // Reset highlight style
  const resetHighlight = (e) => {
    geoJsonLayer.current.resetStyle(e.target);
    e.target.closeTooltip(); // Hide the tooltip on mouseout
  };

  const onEachFeature = (feature, layer) => {
    const governorateName = feature.properties.shape1; // Extract the governorate name

    layer.bindTooltip(governorateName, {
      permanent: false,
      direction: "top",
      offset: [0, -10],
    });

    // Set event listeners for mouse events
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => handleGovernorateClick(governorateName), // Call handleGovernorateClick on click
    });
  };

  return (
    <div>
      <LinkOfPage
        homeTitle="مفوضيات المناطق"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: " مفوضيات المناطق", url: "" },
        ]}
      />
      <div className="flex justify-center md:items-start w-full md:flex-row relative flex-wrap flex-col items-center">
        <div className="md:w-1/2 h-[100vh] w-full">
          <MapContainer
            center={[33.8547, 35.8623]}
            zoom={8}
            style={{ height: "80vh", width: "100%" }}
            className="rounded-lg shadow-lg mt-12 z-0"
            minZoom={8}
            maxZoom={8}
            dragging={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={governorates} // Your GeoJSON data
              style={geoJsonStyle}
              onEachFeature={onEachFeature}
              ref={geoJsonLayer}
            />
          </MapContainer>
        </div>
        <div className="md:w-1/2 w-full bg-red-300" ref={sectionRef}>
          <SingleGovmates city={selectedGovernorate} />
        </div>
      </div>
    </div>
  );
};

export default Governorate;
