import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({ url, addToCart }) {
  const [product, setProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  let params = useParams();

 
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
  console.log(product)
 if (product){
  console.log(product.name)
 }
  
  return (
    <div className="row">
      
      {product ? (
        <>
                 <div className='container col-sm-4'>
          <img class="product-image" src={product.image} alt={product.name} />
        </div>
        <div className='container col-sm-4'>
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          <p>{product.kuvaus}</p>
          <div className="btn-group">
          <button className='btn btn-outline-dark' type="button" onClick={() => addToCart(product.id)}>Lisää ostoskoriin</button>
          </div>
          
        </div>
        </>
      ) : (
        <p>Ladataan...</p>
      )}
    </div>
  );
}