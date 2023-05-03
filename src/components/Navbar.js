import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import RegisterPopUp from './RegisterationPopUp';
import LoginButton from './LoginButton';
import logo from '../assets/banneri_1_ilmanpuskaa.png';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar({url,cart}) {
  const [categories,setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/products/' + search);
    } 
  }
  


  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <Link to="/">
        <img src={logo} alt="Logo" id='logo' />
      </Link>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {categories.map(category => (
              <li className="nav-item" key={category.id}>
                <Link className="nav-link" to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Cart cart={cart} />
            </li>
            <li className='nav-item'>
              <RegisterPopUp />
            </li>
            <li className='nav-item'>
              <LoginButton />
            </li>
            
            <form className="form-inline my-2 my-lg-0">
            <input 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              onKeyPress={(e) => executeSearch(e)} 
              className="form-control mr-sm-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" />
          </form>
          
            
          </ul>
          
        </div>
      </div>
    </nav>
  )
}
