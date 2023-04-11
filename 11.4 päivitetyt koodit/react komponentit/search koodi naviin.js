<form className="form-inline my-2 my-lg-0">
    <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => executeSearch(e)}
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search" />
</form>