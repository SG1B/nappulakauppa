import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Navbar({ url }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.students.oamk.fi/~c2pima00/getcategories.php')
      .then(response => {
        const json = response.data;
        setCategories(json);
      })
      .catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);

  return (
    <div id="sidebar">
      <div className="container-fluid">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="nav-item" >
            <Link className="nav-link" to="/">Etusivu</Link>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href="#" id="dropdown01"
              data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
            <ul className='dropdown-menu' aria-labelledby='dropdown01'>
              {categories.map(category => (
                <li key={category.id}>
                  <Link className='dropdown-item' to={'/products/' + category.id}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Tietoja</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};