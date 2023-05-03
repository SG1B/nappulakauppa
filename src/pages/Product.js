import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({ url, addToCart }) {
  const [product, setProduct] = useState(null);
  let params = useParams();

 
  useEffect(() => {
    axios.get(url + 'products/getproduct.php/' + params.productId)
      .then((response) => {
        const json = response.data;
        setProduct(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])

  
  return (
    <main>
    <div className="row">
      {product ? (
        <>
          <div className='container col-lg-4'>
            <img class="product-image" src={product.image} alt={product.name} />
          </div>
          <div className='container product-container col-lg-4'>
            <h3>{product.name}</h3>
            <p>{product.kuvaus}</p>
            <p className='price'>{product.price} €</p>
            <div className="btn-group">
              <button className='btn btn-outline-dark' type="button" onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
            </div>

          </div>
        </>
      ) : (
        <p>Ladataan...</p>
      )}
    </div>
    </main>
  );
}