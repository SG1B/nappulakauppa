import React, { useState } from "react";

function LoginWindow({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://www.students.oamk.fi/~c2pima00/login.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // handle successful login
          console.log("Login successful");
        } else {
          // handle login error
          console.log(data.error);
        }
      })
      .catch((error) => console.error(error));
      
  };

  return (
    <div className="login-window-wrapper">
      <div className="login-window">
        <div className="login-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="login-body">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;