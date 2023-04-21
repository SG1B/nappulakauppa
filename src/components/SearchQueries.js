import React, { useEffect, useState } from 'react';

function SearchQueries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch('/products/search_queries.php')
      .then(response => response.json())
      .then(data => setQueries(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Search Queries</h1>
      <ul>
        {queries.map(query => (
          <li key={query.query}>{query.query}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchQueries;