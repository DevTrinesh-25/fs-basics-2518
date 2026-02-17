import axios from 'axios';
import { useState, useEffect } from 'react';

function Cart() {
    const userId = 1;
    const [cartInfo, setCartInfo] = useState<any>({ products: [] });

    useEffect(() => {
        fetchCartInfo();
    }, []);

    const fetchCartInfo = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/cart?userId=${userId}`);
            setCartInfo(data[0]);
        } catch (error) {

        }
    };

    const updateQuantity = async (product: any, operation: string) => {
        try {
            const temp = cartInfo.products.map((_product: any) => {
                if (_product.id === product.id) {
                    return { ..._product, quantity: operation === 'decrement' ? product.quantity - 1 : product.quantity + 1 }
                } else {
                    return _product;
                }
            });
            setCartInfo({
                ...cartInfo,
                products: temp
            })
            const response = await axios.put(`http://localhost:4000/cart/${cartInfo.id}`, cartInfo);
        } catch(error) {

        }
    }

    return (
        <div className="container py-5">
            <h1 className="text-dark fw-bold mb-4">Cart</h1>

            {cartInfo.products?.length > 0 ? (
                <div className="row g-4">
                    <div className="col-lg-8">
                        {cartInfo.products.map((product: any) => {
                            const lineTotal = (product.price ?? 0) * (product.quantity ?? 1);
                            return (
                                <div key={product.id} className="card shadow-sm rounded-3 mb-3 border-0 overflow-hidden">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-4 col-md-3">
                                            {product.imageUrl ? (
                                                <img src={product.imageUrl} alt={product.name} className="img-fluid rounded-start" style={{ objectFit: 'cover', minHeight: '120px' }} />
                                            ) : (
                                                <div className="bg-light d-flex align-items-center justify-content-center rounded-start" style={{ minHeight: '120px' }}>
                                                    <span className="text-muted small">No image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-8 col-md-9">
                                            <div className="card-body py-3">
                                                <h5 className="card-title text-dark fw-bold mb-2">{product.name}</h5>
                                                <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                                                    <span className="text-muted text-decoration-line-through small">{product.price}</span>
                                                    {product.discount > 0 && (
                                                        <span className="badge bg-success rounded-pill">{product.discount}% off</span>
                                                    )}
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                    <div className="d-flex align-items-center gap-2">
                                                        {/* Decrease Button */}
                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            disabled={product.quantity === 1}
                                                            onClick={() => updateQuantity(product, 'decrement')}
                                                        >
                                                            -
                                                        </button>

                                                        {/* Quantity Display */}
                                                        <span className="text-muted small">
                                                            Qty: <strong>{product.quantity}</strong>
                                                        </span>

                                                        {/* Increase Button */}
                                                        <button
                                                            className="btn btn-outline-success btn-sm"
                                                            onClick={() => updateQuantity(product, 'increment')}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <span className="text-primary fw-bold">{lineTotal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm rounded-3 border-0 sticky-top">
                            <div className="card-header bg-white py-3 fw-bold">Order summary</div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Items</span>
                                    <span>{cartInfo.products?.length ?? 0}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Total</span>
                                    <span className="fs-4 text-primary fw-bold">{cartInfo.totalAmount}</span>
                                </div>
                                <button type="button" className="btn btn-primary w-100 mt-3 rounded-2">Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card shadow-sm rounded-3 border-0 text-center py-5">
                    <div className="card-body">
                        <p className="text-muted mb-0">Your cart is empty.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;