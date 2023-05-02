import React, { useState } from 'react';

function RegistrationWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const submitRegistrationForm = (formData) => {
    fetch('https://www.students.oamk.fi/~c2pima00/register.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitRegistrationForm(new FormData(event.target));
    setIsOpen(false);
  }

  return (
    <>
      <button className="register-btn" onClick={() => setIsOpen(true)}>Rekisteröidy</button>
  {isOpen && (
    <div className="login-window-wrapper">
      <div className="login-window">
        <div className="login-header">
          <h2>Rekisteröidy</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className="login-body">
          <label htmlFor="name">Käyttäjänimi:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
          <label htmlFor="email">Sähköposti:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
          <label htmlFor="password">Salasana:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
          <button type="submit" onClick={handleFormSubmit}>Rekisteröidy</button>
        </div>
      </div>
    </div>
      )}
    </>
  );
}

export default RegistrationWindow;
