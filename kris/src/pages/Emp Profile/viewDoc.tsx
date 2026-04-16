import "../../styles/ViewDoc.css";

const ViewDocuments = () => {
  const documents = [
    { name: "Signed Offer Letter.pdf" },
    { name: "NYSC Certificate.pdf" },
    { name: "Guarantor's Form.pdf" },
    { name: "Degree Certificate.pdf" },
    { name: "John Doe CV.pdf" },
    { name: "Birth Certificate.pdf" }
  ];

  return (
    <div className="view-container">
      <div className="view-card">
        <h3>Job Details / View Documents</h3>

        <div className="doc-grid">
          {documents.map((doc, index) => (
            <div className="doc-box" key={index}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="pdf"
              />
              <p>{doc.name}</p>
            </div>
          ))}
        </div>

        <button className="download-btn">
          Download ALL (Zip)
        </button>
      </div>
    </div>
  );
};

export default ViewDocuments;