import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import uuid from 'react-uuid';

export default function ManageProducts({url}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products,setProducts] = useState([]);
  const [addingProduct, setAddingProduct] = useState(false);
  const [productName,setProductName] = useState('');
  const [price,setPrice] = useState('');

  useEffect(() => {
    if (selectedCategory !== null) {
      axios.get(url + '../products/getproducts.php/' + selectedCategory.id)
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
    axios.post(url + '../products/addproduct.php',json,{
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
  }


  if (!addingProduct) {
    return (
      <>
      <main>
      <div className='about'>
        <h3>Hallinnoi tuotteita</h3>
        <CategoryList url={url} selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <table>
          <thead>
            <tr key={uuid()}>
              <th>Nimi</th>
              <th>Hinta</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr key={uuid()}>
              <td>{product.name}</td>
              <td>{product.price} €</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div>
          <button className="btn btn-dark" type="button" onClick={()=> setAddingProduct(true)}>Lisää</button>
        </div>
      </div>
      </main>
      </>
    )
  } else {
    return (
      <>
      <main>
      <div className='about'>
        <h3>Lisää uusi tuote</h3>
        <form onSubmit={saveProduct}>
          <div>
            <label>Tuotteen nimi </label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
          </div>
          <div>
            <label>Tuotteen hinta</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <button type="button" onClick={() => setAddingProduct(false)}>Peruuta</button>
          <button type="submit">Tallenna</button>
        </form>
        </div>
      </main>
      </>
    )  
  }
}