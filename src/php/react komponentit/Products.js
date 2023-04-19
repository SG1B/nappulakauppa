export default function Products({url}) {
    const [name,setName] = useState('');
    const [products,setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        let address = '';

        if (params.searcPhrase === undefined){
            address = url + 'products/getproducts.php' + params.categoryId;
        } else {
            address = url + 'products/searchproducts.php' + params.searchPhrase;
    };

    axios.get(address)
        .then((response) => {
            const json = response.data;
            if(params.searcPhrase === undefined){
                setName(json.category);
                setProducts(json.products);
            } else {
                setName(params.searchPhrase);
                setProducts(json);
            }
        }
    }