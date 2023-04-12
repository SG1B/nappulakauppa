function executeSearch(e) {
    if (e.charCode === 13){
        e.preventDefault();
        navigate('/search/' + search);
    }
}

// LISÄÄ APP.jsään tämä: 
<route path="/search/:searchPhrase" element={<products url={URL}/>}/> 