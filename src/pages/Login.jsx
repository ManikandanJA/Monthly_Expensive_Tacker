import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useAuth } from "../context/AuthContext";

function Login() {

  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {

    e.preventDefault();

    if (username.trim() === "") {

      alert("Enter Username");

      return;

    }

    login(username);

    navigate("/dashboard");

  };

  return (
  <div className="login-page">

    <form
      className="login-box"
      onSubmit={handleLogin}
    >

      <div className="avatar">
        👤
      </div>

      <h1>Smart Expense Tracker</h1>

      <p>Track your monthly expenses easily</p>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

    </form>

  </div>
);
}

export default Login;