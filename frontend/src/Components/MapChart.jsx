import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import governorates from "./lebanon_Governorate_level_1.json";
import TopInfo from "./TopInfo";

const MapChart = () => {
  const geoJsonLayer = useRef(null);

  // Define default style
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

  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle(highlightStyle);
  };

  const resetHighlight = (e) => {
    geoJsonLayer.current.resetStyle(e.target);
  };

  // Function to handle events on each feature (governorate)
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[100%] lg:w-[60%] xl:w-[50%] mx-auto p-4 relative z-0 ">
      <TopInfo title="انتشارنا" />
      <MapContainer
        center={[33.8547, 35.8623]}
        zoom={8}
        style={{ height: "400px", width: "100%" }}
        className="rounded-lg shadow-lg mt-12"
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
  );
};

export default MapChart;
