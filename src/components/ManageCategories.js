import React,{useState} from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import {useNavigate} from 'react-router-dom';

export default function ManageCategories({url}) {
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);
  const navigate = useNavigate();
  const navigateToAdmin = () => {navigate('/admin');};
  
  function saveCategory(e) {
    e.preventDefault();
    const json = JSON.stringify({name: newCategory});
    axios.post('https://www.students.oamk.fi/~c2pima00/addcategory.php',json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      setNewCategory('');
      setAddingCategory(false);
      setSelectedCategory(response.data);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });
  }
  if (!addingCategory) {
    return (
      <>
      <main>
      <div className='about'>
        <h3>Hallinnoi kategorioita</h3>
        <div className='about'>
          <label>Kategoria</label>
          <CategoryList 
            url={url} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
          />
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
          <button class="btn btn-warning" type="button" onClick={()=> setAddingCategory(true)}>Lisää</button>
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
        <h3>Lisää uusi kategoria</h3>
        <form onSubmit={saveCategory}>
          <div className='about'>
            <label>Kategorian nimi</label>
            <div></div>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
          <button class="btn btn-warning" type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
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