import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "./lebanonGeoJSON.json";
import L from "leaflet";

const center = [33.9, 35.6]; // Center coordinates adjusted to Lebanon

export default function MapChart() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && statesData.features.length > 0) {
      const map = mapRef.current;
      const bounds = L.latLngBounds(
        statesData.features.flatMap((state) =>
          state.geometry.coordinates[0].map((coord) => [coord[1], coord[0]])
        )
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [statesData]);

  return (
    <MapContainer
      center={center}
      zoom={8} // Initial zoom level
      style={{ width: "40vw", height: "70vh" }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/aquarelle/256/{z}/{x}/{y}.webp?key=sPZtIOJiETOn37ndK8iU"
        attribution={`<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`}
      />
      {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            key={state.properties.name} // Use a unique identifier for the key
            pathOptions={{
              fillColor: "#FD8D3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: "",
                  fillColor: "#BD0026",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: "white",
                  fillColor: "#FD8D3C",
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
    </MapContainer>
  );
}
