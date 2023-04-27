import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({ url, addToCart }) {
  const [product, setProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  let params = useParams();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  useEffect(() => {
    axios
      .get(`${url}products/getproduct.php/${params.productId}`)
      .then((response) => {
        const json = response.data;
        setProduct(response.data);
      })
      .catch((error) => {
        alert(
          error.response === undefined ? error : error.response.data.error
        );
      });
  }, [params, url]);

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
  };
  
  return (
    <div className="row">
      {/* :) */}
      {product ? (
        <>
        
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          <p>{product.kuvaus}</p>
          <div className="btn-group">
          <button className='btn btn-outline-dark' type="button" onClick={() => addToCart(product.id)}>Lisää ostoskoriin</button>
          </div>
        </>
      ) : (
        <p>Ladataan...</p>
      )}
    </div>
  );
}