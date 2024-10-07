import React, { useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported
import governorates from "./lebanon_Governorate_level_1.json";
import TopInfo from "./TopInfo";

const MapChart = ({ view }) => {
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

  // Highlight feature on hover
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

  // Function to handle events on each feature (governorate)
  const onEachFeature = (feature, layer) => {
    const governorateName = feature.properties.shape1; // Extract the governorate name

    // Bind the tooltip with the governorate name
    layer.bindTooltip(governorateName, {
      permanent: false,
      direction: "top",
      offset: [0, -10], // Adjust tooltip position
    });

    // Set event listeners for mouse events
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[100%] lg:w-[60%] xl:w-[50%] mx-auto p-4 relative z-0 ">
      {view == true && (
        <div>
          <TopInfo title="انتشارنا" />
          <p className="text-center mt-3 text-xl font-Aljazeera">
            تعرف على مراكز تواجدنا في لبنان موجودين في كل مكان
          </p>
        </div>
      )}
      <MapContainer
        center={[33.8547, 35.8623]}
        zoom={8}
        style={{ height: "400px", width: "100%" }}
        className="rounded-lg shadow-lg mt-12"
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
  );
};

export default MapChart;
