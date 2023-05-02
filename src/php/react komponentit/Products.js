import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Products({ url }) {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
      address = `${url}products/getproducts.php?categoryId=${params.categoryId}`;
    } else {
      address = `${url}products/searchproducts.php?searchPhrase=${params.searchPhrase}`;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setName(json.category);
          setProducts(json.products);
        } else {
          setName(params.searchPhrase);
          setProducts(json);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url, params.categoryId, params.searchPhrase]);

  return (
    <>
      <h3>{name}</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Price: {product.price} €</p>
        </div>
      ))}
    </>
  );
}

/* VANHA KOODI

export default function Products({url}) {
    const [name,setName] = useState('');
    const [products,setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        let address = '';

        if (params.searcPhrase === undefined){
            address = url + 'products/getproducts.php' + params.categoryId;
        } else {
            address = url + 'products/searchproducts.php' + params.searchPhrase;
    };

    axios.get(address)
        .then((response) => {
            const json = response.data;
            if(params.searcPhrase === undefined){
                setName(json.category);
                setProducts(json.products);
            } else {
                setName(params.searchPhrase);
                setProducts(json);
            }
        }
    }*/