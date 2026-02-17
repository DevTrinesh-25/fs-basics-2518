function ProductHighlights() {
    const iconStyle = { width: 40, height: 40 };
    const svgStyle = { width: 22, height: 22 };

    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="9" y2="15"/>
                        <line x1="15" y1="9" x2="15" y2="15"/>
                        <line x1="9" y1="12" x2="15" y2="12"/>
                    </svg>
                </span>
                <span className="text-secondary small">4 GB RAM | 64 GB ROM</span>
            </li>
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                        <line x1="9" y1="13" x2="15" y2="13"/>
                        <line x1="9" y1="17" x2="12" y2="17"/>
                    </svg>
                </span>
                <span className="text-secondary small">Helio G81 | Octa Core Processor | 2 GHz Clock Speed</span>
            </li>
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                        <rect x="2" y="6" width="4" height="3" rx="0.5"/>
                    </svg>
                </span>
                <span className="text-secondary small">50MP Rear Camera</span>
            </li>
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/>
                        <path d="M12 8a4 4 0 0 0-4 4c0 1.5.5 2.5 1 3l3-3c-.5-.5-1-1.5-1-2a2 2 0 0 1 2-2z"/>
                    </svg>
                </span>
                <span className="text-secondary small">8MP Front Camera</span>
            </li>
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                </span>
                <span className="text-secondary small">6.88 inch</span>
            </li>
            <li className="list-group-item border-0 py-3 d-flex align-items-start gap-2">
                <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0" style={iconStyle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" style={svgStyle}>
                        <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>
                        <line x1="6" y1="10" x2="6.01" y2="10"/>
                        <line x1="12" y1="6" x2="12" y2="4"/>
                    </svg>
                </span>
                <span className="text-secondary small">7000 mAh Battery</span>
            </li>
        </ul>
    );
}

export default ProductHighlights;
