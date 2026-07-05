import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import ProfileMenu from "./ProfileMenu";
import "../styles/Navbar.css";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">

      <div className="logo">
        💰 Smart Expense Tracker
      </div>

      <div className="nav-right">

        <ThemeToggle />

        <span className="welcome">
          Welcome, {user}
        </span>

        <ProfileMenu />

      </div>

    </nav>
  );
}

export default Navbar;