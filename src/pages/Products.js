import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from './Product';

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.category);
        setProducts(json.products);
      })
      .catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [params]);

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
  };

  const filteredProduct = products.find(product => product.id === selectedProduct);

  return (
    <main className='products-main'>
    <div>
      {filteredProduct ? (
        <Product url={url} product={filteredProduct} />
      ) : (
        <div>
          <div id="tuoteotsikko">
            <h3>{categoryName}</h3>
          </div>
          <div className="row">
            {products.map(product => (
              <div className="col-lg-4 single-item" key={product.id}>
                <div className="card shadow-sm">
                  <img src={product.image} alt={product.name} />
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.price} €</p>
                    <p className="card-text text-single-line">{product.kuvaus}</p>
                    <div className="btn-group">
                      <Link to={`/product/${product.id}`} className='btn btn-outline-dark'>Tietoja</Link>
                      <button className='btn btn-outline-dark' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </main>
  );
}