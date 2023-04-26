import React, { useState } from "react";

function LoginWindow({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://www.students.oamk.fi/~c2pima00/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        // jos login onnistuu, tee jotain esim redirect sivulle
        console.log("Login successful");
      } else {
        // jos login epäonnistuu, tee jotain esim näytä virheilmoitus
        console.log(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-window-wrapper">
      <div className="login-window">
        <div className="login-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="login-body">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default LoginWindow; 