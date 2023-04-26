import React, { useState } from "react";

function LoginWindow({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can handle the login logic with the username and password
    console.log(`Logging in with username ${username} and password ${password}`);
    // Clear the username and password fields after logging in
    setUsername("");
    setPassword("");
    // Call the onClose function to hide the login window
    onClose();
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