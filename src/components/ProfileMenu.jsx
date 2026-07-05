import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfileMenu() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {

    logout();

    navigate("/");

  }

  return (

    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>

  );

}

export default ProfileMenu;