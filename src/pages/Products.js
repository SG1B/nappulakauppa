import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios.get(url + '/Koodit/PHP/getProducts.php' + params.categoryId)
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
      <h3>Products for {categoryName} Saatana!g</h3>
      <main>

    </main>
 
      {products.map(product => (
        
        <div key={product.id}>
          {product.name}{product.price}€<img src={product.image}/> <div>
          {product.kuvaus}</div>
          
          <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Add</button>

        </div>
      ))}
    </div>
  )
}



{/*    <Link 
            to={'/product/' + product.id}>
              <p>
                {product.name}
              </p>
          </Link> */}