if (addingProduct) {
    return (
        <>
            <h3>Manage Products</h3>
            <CategoryList url={url} selectedCategoy = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <table className='table'>
                <thead>
                    <tr key={uuid()}>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={uuid()}>
                            <td>{product.name}</td>
                            <td>{product.price} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="btn btn-dark" type="button" onClick={()=> setAddingProduct(true)}>Add</button>
            </div>
        </>
    )
} else {
    return(
        <>
            <h3>Add new product</h3>
            <form onSubmit={saveProduct}>
                <div>
                    <label>Product Name</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                </div>
                <div>
                    <label>Product Price</label>
                    <input type="text" value={productPrice} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingProduct(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
        </>
    )
}