import { useNavigate } from "react-router-dom";
import "./VehicleCard.css";

function VehicleCard({ vehicle }) {
  const navigate = useNavigate();

  if (!vehicle) return null;

  return (
    <div className="card">
      <img src={vehicle.image} alt={vehicle.name} />

      <div className="card-body">
        <h3>{vehicle.name}</h3>
        <p>₹{vehicle.price} / day</p>

        <button onClick={() => navigate(`/details/${vehicle.id}`)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;