import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Product from './Product';

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  let params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let address = '';
  
    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + (params.categoryId || 1);
    } else {
      address = url + 'search.php/' + params.searchPhrase;
    }
  
    axios.get(address)
      .then((response) => {
        const json = response.data;
  
        if (params.searchPhrase === undefined) {
          setName(json.category);
          setProducts(json.products);
        } else {
          setName(`Search results for "${params.searchPhrase}"`);
          if (Array.isArray(json) && json.length > 0) {
            setProducts(json);
          } else {
            // Redirect to a different URL or display an error message
            navigate('/NotFound');
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.category);
        setProducts(json.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.categoryId, params.searchPhrase]);

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
                    <Link key={product.id} to={'/product/' + product.id} className='btn btn-outline-dark'>Tietoja</Link>
                 
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