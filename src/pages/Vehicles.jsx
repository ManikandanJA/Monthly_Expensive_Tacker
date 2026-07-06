import { useState } from "react";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import "./Vehicles.css";

function Vehicles() {
  const [filter, setFilter] = useState("all");

  const filteredVehicles =
    filter === "all"
      ? vehicles
      : vehicles.filter((v) => v.type === filter);

  return (
    <div className="vehicles-page">

      <h2>Available Vehicles</h2>

      {/* 🔥 FILTER BUTTONS */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("car")}>Cars</button>
        <button onClick={() => setFilter("bike")}>Bikes</button>
      </div>

      {/* VEHICLES GRID */}
      <div className="vehicles-grid">
        {filteredVehicles.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>

    </div>
  );
}

export default Vehicles;