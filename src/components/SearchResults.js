import React from 'react';

function SearchResults({ searchResults }) {
  return (
    <div>
      {searchResults.map((result) => (
        <div key={result.id}>
          <a href={`/product/${result.id}`}><h3>{result.title}</h3></a>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;