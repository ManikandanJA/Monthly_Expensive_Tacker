import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import vehicles from "../data/vehicles";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const v = vehicles.find((x) => x.id == id);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const days =
    start && end
      ? (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)
      : 0;

  const total = days * v.price;

  const handleBooking = () => {
    if (!start || !end || !username || !phone) {
      alert("Fill all fields");
      return;
    }

    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      vehicleId: v.id,
      name: v.name,
      type: v.type,
      price: v.price,
      startDate: start,
      endDate: end,
      total: Number(total),
      username: username,
      phone: phone
    };

    data.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(data));

    alert("Booked ✅");
    navigate("/my-bookings");
  };

  return (
    <div className="details">

      <h2>{v.name}</h2>
      <img src={v.image} width="300" />

      <h3>₹{v.price}/day</h3>

      <div className="booking-box">

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setStart(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setEnd(e.target.value)}
        />

        <h3>Total ₹{total}</h3>

        <button onClick={handleBooking}>
          Confirm Booking
        </button>

      </div>
    </div>
  );
}

export default Details;