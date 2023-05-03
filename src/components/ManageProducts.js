import React, { useState } from 'react';

function submitRegistrationForm(formData) {
  // VAIHA TÄHÄN OIKEA OSOTE
  fetch('https://www.students.oamk.fi/~c2pima00/addproduct.php', {
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

function ManageProducts() {
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
      alert('Tuotteen lisäys onnistui!');
      setIsOpen(false);
    }
  }

  return (
    <>
      <button className='btn btn-outline-dark' onClick={() => setIsOpen(true)}>Lisää Tuote</button>
      {isOpen && (
        <div className="login-popup">
          <div className="login-window-wrapper">
            <div id="login-wrapper" className="login-window">
              <div className="login-header">
                <h2>Lisää uusi tuote</h2>
                <button className="btn btn-outline-dark" onClick={() => setIsOpen(false)}>X</button>
              </div>
              <div className="login-body">
                <form onSubmit={handleFormSubmit}>
                  <label htmlFor="name">Tuote nimi:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required />
                  <br />
                  <label htmlFor="email">Hinta:</label><br/>
                  <input type="number" id="price" name="price" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required />
                  <br />
                  <label htmlFor="password">Kategoria ID:</label><br />
                  <input type="number" id="category_id" name="category_id" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required />
                  <br />
                  <br />
                  <button className="btn btn-outline-dark" type="submit">Lisää tuote</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageProducts;