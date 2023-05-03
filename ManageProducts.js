import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';


export default function ManageProducts({url}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products,setProducts] = useState([]);
  const [addingProduct, setAddingProduct] = useState(false);
  const [productName,setProductName] = useState('');
  const [price,setPrice] = useState('');
  const navigate = useNavigate();
  const navigateToAdmin = () => {navigate('/admin');};

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
    axios.post(url + '/addproduct.php',json,{
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
        <div className='about'>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
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
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
          <button class="btn btn-warning" type="button" onClick={()=> setAddingProduct(true)}>Lisää</button>
          <button class="btn btn-warning" type="button" onClick={navigateToAdmin}>Takaisin</button>
        </div>
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
          <div className='about'>
            <label>Tuotteen nimi </label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
          <div>
            <label>Tuotteen hinta</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
          <button class="btn btn-warning" type="button" onClick={() => setAddingProduct(false)}>Peruuta</button>
          <button class="btn btn-warning" type="submit">Tallenna</button>
          <button class="btn btn-warning" type="button" onClick={navigateToAdmin}>Takaisin</button>
          </div>
          </div>
        </form>
        </div>
      </main>
      </>
    )  
  }
}