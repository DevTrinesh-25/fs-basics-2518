import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';

interface ProductInfo {
    id: number;
    name: string;
    specifications: string[];
    price: number;
    discount: number;
    imageUrl: string;
    inStock: boolean;
}

function ProductDetails() {
    const params = useParams();
    const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProductInfo = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/products/' + params.productId);
            setProductInfo(data);
        } catch {
            setProductInfo(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductInfo();
    }, [params.productId]);

    const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;
    const finalPrice = productInfo
        ? productInfo.price - (productInfo.price * productInfo.discount) / 100
        : 0;

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading product...</p>
            </div>
        );
    }

    if (!productInfo) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-warning" role="alert">
                    Product not found.
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4 py-md-5">
            <div className="row g-4 align-items-start">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="card border-0 shadow-sm overflow-hidden rounded-3">
                        <img
                            src={productInfo.imageUrl}
                            alt={productInfo.name}
                            className="card-img-top img-fluid bg-light"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <h1 className="h2 fw-bold text-dark mb-3">{productInfo.name}</h1>
                    <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                        <span className="text-decoration-line-through text-muted fs-5">
                            {formatPrice(productInfo.price)}
                        </span>
                        <span className="badge bg-success rounded-pill fs-6">
                            {productInfo.discount}% off
                        </span>
                        <span className="fs-4 fw-bold text-primary">
                            {formatPrice(finalPrice)}
                        </span>
                    </div>
                    <p className="text-muted small mb-2">Specifications</p>
                    <ul className="list-group list-group-flush mb-4">
                        {productInfo.specifications.map((spec, i) => (
                            <li key={i} className="list-group-item border-0 px-0 py-1">
                                • {spec}
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex flex-wrap gap-2 align-items-center">
                        {productInfo.inStock ? (
                            <>
                                <span className="badge bg-success">In stock</span>
                                <button type="button" className="btn btn-primary btn-lg rounded-2 px-4">
                                    Add to cart
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="badge bg-secondary">Out of stock</span>
                                <button type="button" className="btn btn-outline-secondary btn-lg rounded-2" disabled>
                                    Add to cart
                                </button>
                            </>
                        )}
                    </div>
                    
                    <ul className="nav justify-content-center mt-4">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to=''>Product Highlights</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'ratings-reviews'}>Ratings & Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="questions-answers">Question & Answers</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;