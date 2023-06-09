import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CategoryList({ url, selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.students.oamk.fi/~c2pima00/getcategories.php')
      .then((response) => {
        const json = response.data;
        if (json && json.length > 0) {
          if (selectedCategory === null) { // Set first category selected if there is no default category.
            setSelectedCategory(json[0]);
          }
          setCategories(json);
        }
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [selectedCategory]);

  const categoryDict = {};
  categories.forEach(category => {
    categoryDict[category.id] = category;
  });

  function onCategoryChange(value) {
    const selected = categoryDict[value];
    if (selected) {
      setSelectedCategory(selected);
    }
  }

  return (
    <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>{category.name}</option>
      ))}
    </select>
  )
}