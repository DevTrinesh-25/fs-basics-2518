import { useState } from 'react';

const Q_AND_A = [
    {
        id: 1,
        question: 'Does this phone support 5G?',
        answer: 'Yes, this model supports 5G connectivity on both SIM slots.',
        askedBy: 'Vikram',
        date: '6 Feb 2026',
    },
    {
        id: 2,
        question: 'Is there a charger included in the box?',
        answer: 'Yes, a 22.5W fast charger is included in the box along with a USB Type-C cable.',
        askedBy: 'Sneha',
        date: '4 Feb 2026',
    },
    {
        id: 3,
        question: 'Can the storage be expanded with a memory card?',
        answer: 'Yes, it has a dedicated microSD slot that supports expansion up to 512 GB.',
        askedBy: 'Arun',
        date: '2 Feb 2026',
    },
];

function QuestionAnswers() {
    const [openId, setOpenId] = useState<number | null>(Q_AND_A[0]?.id ?? null);

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <h5 className="fw-bold mb-0">Questions & Answers</h5>
                <button type="button" className="btn btn-outline-primary btn-sm rounded-2">
                    Ask a question
                </button>
            </div>

            <div className="accordion accordion-flush" id="qaAccordion">
                {Q_AND_A.map((item) => (
                    <div key={item.id} className="accordion-item border rounded-3 mb-2 shadow-sm">
                        <h2 className="accordion-header">
                            <button
                                type="button"
                                className={`accordion-button fw-semibold ${openId === item.id ? '' : 'collapsed'}`}
                                aria-expanded={openId === item.id}
                                aria-controls={`collapse-${item.id}`}
                                id={`heading-${item.id}`}
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                            >
                                {item.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${item.id}`}
                            className={`accordion-collapse collapse ${openId === item.id ? 'show' : ''}`}
                            aria-labelledby={`heading-${item.id}`}
                        >
                            <div className="accordion-body pt-0">
                                <p className="text-body mb-2">{item.answer}</p>
                                <span className="text-muted small">
                                    — {item.askedBy} · {item.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionAnswers;
