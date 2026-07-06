import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav>
    <h1>Rental-WHEELS</h1>
  <Link to="/">Home</Link>
  <Link to="/vehicles">Vehicles</Link>
  <Link to="/my-bookings">Bookings</Link>
  <Link to="/about">About</Link>
  <Link to="/terms">Terms</Link>
</nav>
  );
}

export default Navbar;