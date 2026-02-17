function StarRating({ value, max = 5 }: { value: number; max?: number }) {
    const full = Math.floor(value);
    const half = value % 1 >= 0.5;
    const empty = max - full - (half ? 1 : 0);
    return (
        <span className="text-warning" aria-label={`${value} out of ${max} stars`}>
            {'★'.repeat(full)}
            {half && '½'}
            {'☆'.repeat(empty)}
        </span>
    );
}

const RATING_BREAKDOWN = [
    { stars: 5, count: 12, percent: 48 },
    { stars: 4, count: 8, percent: 32 },
    { stars: 3, count: 3, percent: 12 },
    { stars: 2, count: 1, percent: 4 },
    { stars: 1, count: 1, percent: 4 },
];

const REVIEWS = [
    { id: 1, name: 'Priya S.', rating: 5, date: '10 Feb 2026', text: 'Excellent product. Build quality and performance are top notch. Worth every rupee.' },
    { id: 2, name: 'Rahul K.', rating: 4, date: '8 Feb 2026', text: 'Good value for money. Camera could be better in low light but overall satisfied.' },
    { id: 3, name: 'Anita M.', rating: 5, date: '5 Feb 2026', text: 'Battery life is amazing. Lasts two days with normal use. Highly recommend!' },
];

const AVERAGE_RATING = 4.2;
const TOTAL_REVIEWS = 25;

function RatingsReviews() {
    return (
        <div className="mt-4">
            <h5 className="fw-bold mb-3">Ratings & Reviews</h5>

            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <div className="card border-0 shadow-sm rounded-3 p-3">
                        <div className="text-center mb-3">
                            <span className="display-4 fw-bold text-dark">{AVERAGE_RATING}</span>
                            <div className="mt-1">
                                <StarRating value={AVERAGE_RATING} />
                            </div>
                            <p className="text-muted small mb-0 mt-1">{TOTAL_REVIEWS} reviews</p>
                        </div>
                        <div className="mt-2">
                            {RATING_BREAKDOWN.map(({ stars, count, percent }) => (
                                <div key={stars} className="d-flex align-items-center gap-2 mb-2">
                                    <span className="text-muted small" style={{ width: 50 }}>
                                        {stars} ★
                                    </span>
                                    <div className="progress flex-grow-1" style={{ height: 8 }}>
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: `${percent}%` }}
                                            aria-valuenow={percent}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <span className="text-muted small" style={{ width: 24 }}>
                                        {count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex flex-column gap-3">
                        {REVIEWS.map((review) => (
                            <div key={review.id} className="card border-0 shadow-sm rounded-3 p-3">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <span className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center fw-bold"
                                        style={{ width: 36, height: 36, fontSize: '0.9rem' }}>
                                        {review.name.charAt(0)}
                                    </span>
                                    <div className="flex-grow-1">
                                        <span className="fw-semibold">{review.name}</span>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <StarRating value={review.rating} />
                                            <span className="text-muted small">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-body mb-0 small">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RatingsReviews;
