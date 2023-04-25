import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.category);
        setProducts(json.products);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])

  return (
    <div>
      <h3>Tuotteet kategorista {categoryName}.</h3>
      <div class="row">
        {products.map(product => (
          <div class="col-sm-4">
            <div class="card shadow-sm">
              <img src={product.image} alt={product.name} />
              <div class="card-body">
                <p class="card-text">{product.name}</p>
                <p class="card-text">{product.price} €</p>
                <p class="card-text">{product.kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

{/*    <Link 
            to={'/product/' + product.id}>
              <p>
                {product.name}
              </p>
          </Link> */}