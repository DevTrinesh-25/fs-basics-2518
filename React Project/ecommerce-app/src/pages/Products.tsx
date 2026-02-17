import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    specifications: string[];
    price: number;
    discount: number;
    imageUrl: string;
    inStock: boolean;
}

function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [sortOrder, setSortOrder] = useState<string>('asc');

    useEffect(() => {
        fetchAllProducts();
    }, [sortOrder]);

    const fetchAllProducts = async () => {
        try {
            const response = await fetch(`http://localhost:4000/products?_sort=price&_order=${sortOrder}`, {
                method: 'GET'
            });

            const parsedResponse = await response.json();
            setProducts(parsedResponse);
            setFilteredProducts(parsedResponse);
        } catch(error) {
            
        }
    };

    const calculateDiscountedPrice = (price: number, discount: number): number => {
        return price - (price * discount / 100);
    };

    const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;

    const onSearchQuery = (enteredValue: string) => {
        const temp = products.filter(product => product.name.toLowerCase().includes(enteredValue.toLowerCase()));
        setFilteredProducts(temp);
    };

    return (
        <div id="products" className="container py-5">
            
            <h2 className="text-dark fw-bold mb-4">Products</h2>
            <div className='row'>
                <div className='col-sm-9'>
                    <div className="my-4">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search here..." onKeyUp={(event: any) => onSearchQuery(event.target.value)}/>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <label>Sort by price: </label>
                    <select className="form-select" onChange={(event) => setSortOrder(event.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            {filteredProducts.map((product) => {
                const finalPrice = calculateDiscountedPrice(product.price, product.discount);
                return (
                    <div
                        key={product.id}
                        className="row align-items-center border rounded-3 shadow-sm bg-white p-3 p-md-4 mb-4 g-3"
                    >
                        <div className="col-12 col-sm-3 text-center">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="img-fluid rounded-2"
                                style={{ maxHeight: '200px', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <Link to={`/product-details/${product.id}?name=${product.name}&price=${product.price}`}><h5 className="text-dark fw-bold mb-2">{product.name}</h5></Link>
                            <ul className="list-unstyled text-muted small mb-0">
                                {product.specifications.map((spec, i) => (
                                    <li key={i} className="mb-1">• {spec}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-sm-3 text-sm-start text-center">
                            <div className="mb-2">
                                <span className="text-decoration-line-through text-muted me-2">
                                    {formatPrice(product.price)}
                                </span>
                                <span className="badge bg-success rounded-pill">{product.discount}% off</span>
                            </div>
                            <h4 className="text-primary fw-bold mb-3">{formatPrice(finalPrice)}</h4>
                            {product.inStock ? (
                                <button type="button" className="btn btn-primary rounded-2 w-100">
                                    Add to cart
                                </button>
                            ) : (
                                <button type="button" className="btn btn-outline-secondary rounded-2 w-100" disabled>
                                    Out of stock
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Products;