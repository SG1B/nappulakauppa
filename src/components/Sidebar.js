import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar({ url }) {
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

        <div style={{
            backgroundColor: "black",
            
            position: "fixed",
            left: 0,
            width: "8.5%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <div className="container-fluid">

              
                <ul style={{ listStyleType: "none", padding: 0 }}>

                    <li className="nav-item" >
                        <Link className="nav-link" to="/"  style={{ color: "white" }}>Home</Link>
                    </li>
                    <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle' href="#" id="dropdown01"
                            data-bs-toggle="dropdown" aria-expanded="false"  style={{ color: "white" }}>Products</a>
                        <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                            {categories.map(category => (
                                <li key={category.id}>
                                    {<Link
                                        className='dropdown-item'
                                        to={'/products/' + category.id}>{category.name}
                                    </Link>}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={{ color: "white" }}>About</Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

