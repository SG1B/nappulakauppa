import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import SearchResults from './SearchResults';
import logo from '../assets/banneri_1_ilmanpuskaa.png';

import { Link } from 'react-router-dom';

export default function Navbar({ url, cart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])
  useEffect(() => {
    if (searchQuery.length > 0) {
      axios.get(`/search?q=${searchQuery}`)
        .then(response => {
          setSearchResults(response.data);
          setShowResults(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setShowResults(true);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <img src={logo} alt="Logo" style={{ width: '25%', height: '25%', marginRight: '10px' }} />
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Cart cart={cart} />
            </li>
          </ul>
          <nav>
            <div>
            </div>
            <form onSubmit={handleSearch} setSearchQuery={setSearchQuery}>
              {showResults && <SearchResults searchResults={searchResults} />}
              <input type="text" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              <button type="submit" class="btn btn-outline-secondary">Search</button>
            </form>
          </nav>
        </div>
      </div>
    </nav>
  )
}
