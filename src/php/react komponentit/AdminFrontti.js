/* Korjattu versio: src -> pages -> Admin.js

import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import uuid from 'react-uuid';

export default function ManageProducts({url}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [addingProduct, setAddingProduct] = useState(false);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
            .then((response) => {
                const json = response.data;
                if (json) {
                    setProducts(json.products);
                }
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }
}, [url,selectedCategory])

function saveProduct(e) {
    e.preventDefault();
    const json = JSON.stringify({name: productName,price: price,categoryid: selectedCategory.id});
    axios.post(url + 'products/addproduct.php',json,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => {
        const updatedProducts = [...products,response.data];
        setProducts(updatedProducts);
        setAddingProduct(false);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    });
}}*/