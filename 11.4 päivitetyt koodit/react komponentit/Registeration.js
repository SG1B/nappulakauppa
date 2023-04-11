import React, { useState } from 'react';

function submitRegistrationForm(formData) {
  // VAIHA TÄHÄN OIKEA OSOTE
  fetch('http://localhost/Testaus/register.php', {
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


function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitRegistrationForm(new FormData(event.target));
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Rekisteröidy</button>
      {isOpen && (
        <div className="registration-popup">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Käyttäjänimi:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
            <br />
            <label htmlFor="password">Salasana:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
            <br />
            <button type="submit">Rekisteröidy</button>
            <button type="button" onClick={() => setIsOpen(false)}>Sulje</button>
          </form>
        </div>
      )}
    </>
  );
}

export default RegistrationPopup;
