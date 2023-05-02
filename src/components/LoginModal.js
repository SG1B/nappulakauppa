import React, { useState } from "react";

function LoginWindow({ onClose }) {
  const [formData, setFormData] = useState({ name: '', password: '' });

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
          alert('Login successful');
          console.log("Login successful");
        } else {
          // handle login error
          alert('Login failed');
          console.log(data.error);
        }
      })
      .catch((error) => console.error(error));
      
  };

  return (
    <div className="login-window-wrapper">
      <div className="login-window">
        <div className="login-header">
          <h2>Kirjautuminen</h2>
          <button className="btn btn-outline-dark" onClick={onClose}>
            X
          </button>
        </div>
        <div className="login-body">
          <form onSubmit={handleFormSubmit}>
          <label>Käyttäjätunnus:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
          <br />
          <label>Salasana:</label>
          <br />
          <input type="password" id="password" name="password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
            <button className="btn btn-outline-dark" type="submit">Kirjaudu sisään</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;