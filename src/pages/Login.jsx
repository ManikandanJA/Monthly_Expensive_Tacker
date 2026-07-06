import { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const login = () => {
    localStorage.setItem("user", name);
    alert("Logged in");
  };

  return (
    <div className="booking">
      <h2>Login</h2>

      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;