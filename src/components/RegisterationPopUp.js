import React, { useState } from 'react';

function submitRegistrationForm(formData) {
  // VAIHA TÄHÄN OIKEA OSOTE
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

function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Check if all fields have been filled
    const isFormValid = form.checkValidity();
    form.reportValidity();

    if (isFormValid) {
      submitRegistrationForm(new FormData(form));
      alert('Rekisteröityminen onnistui!');
      setIsOpen(false);
    }
  }

  return (
    <>
      <button className='btn btn-outline-dark' onClick={() => setIsOpen(true)}>Rekisteröidy</button>
      {isOpen && (
        <div className="registration-popup">
          <div className="login-window-wrapper">
            <div id="registration-wrapper" className="login-window">
              <div className="login-header">
                <h2>Rekisteröidy</h2>
                <button className="btn btn-outline-dark" onClick={() => setIsOpen(false)}>X</button>
              </div>
              <div className="login-body">
                <form onSubmit={handleFormSubmit}>
                  <label htmlFor="name">Käyttäjänimi:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required />
                  <br />
                  <label htmlFor="email">Sähköposti:</label><br/>
                  <input type="email" id="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required />
                  <br />
                  <label htmlFor="password">Salasana:</label><br />
                  <input type="password" id="password" name="password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required />
                  <br />
                  <br />
                  <button className="btn btn-outline-dark" type="submit">Rekisteröidy</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationPopup;