import React, { useState } from 'react';
import SearchResults from '../components/SearchResults';

function SearchPage({ url }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default SearchPage;