import { useState } from "react";
import "../../styles/uploadDoc.css";

const UploadDocuments = ({ onBack }: any) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      console.log("Uploaded:", result);

      alert("File uploaded successfully ✅");
      onBack(); // go back to previous page
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h2>Upload Document</h2>

        <label htmlFor="file-input">Select a document to upload:</label>
        <input 
          id="file-input"
          type="file" 
          onChange={handleFileChange}
          title="Select a file to upload"
        />

        <button onClick={handleUpload}>Upload</button>
        <button className="back-btn" onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default UploadDocuments;