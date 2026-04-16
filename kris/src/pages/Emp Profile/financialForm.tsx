// import { useState } from "react";
// import "../../styles/financialForm.css";

// const FinancialForm = ({ data, onBack }: any) => {
//   const [formData, setFormData] = useState({
//     bankName: data?.bankName || "",
//     accountNumber: data?.accountNumber || "",
//     accountName: data?.accountName || "",
//     registeredWith: data?.registeredWith || "",
//     pensionNumber: data?.pensionNumber || ""
//   });

//   const handleChange = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Updated successfully ✅");
//     onBack();
//   };

//   return (
//     <div className="form-container">
//       <h3>Financial Details</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Bank Name</label>
//         <input
//           name="bankName"
//           placeholder="Enter bank name"
//           value={formData.bankName}
//           onChange={handleChange}
//         />

//         <div className="row">
//           <div>
//             <label>Account No</label>
//             <input
//               name="accountNumber"
//               placeholder="Enter account number"
//               value={formData.accountNumber}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label>Account Name</label>
//             <input
//               name="accountName"
//               placeholder="Enter account name"
//               value={formData.accountName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div>
//             <label>Registered with</label>
//             <input
//               name="registeredWith"
//               placeholder="Enter institution name"
//               value={formData.registeredWith}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label>Pension Number</label>
//             <input
//               name="pensionNumber"
//               placeholder="Enter pension number"
//               value={formData.pensionNumber}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <button type="submit" className="update-btn">
//           Update Account Details
//         </button>

//         <button type="button" onClick={onBack}>
//           Back
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FinancialForm;

import { useState } from "react";
import "../../styles/financialForm.css";

const FinancialForm = ({ data, onBack }: any) => {
  const [formData, setFormData] = useState({
    bankName: data?.bank || "",
    accountNumber: data?.accountNumber || "",
    accountName: data?.name || "",
    registeredWith: "Stanbic IBTC",
    pensionNumber: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/financial", {
        method: "PUT", // or POST
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);

      alert("Financial Details Updated ✅");
      onBack();
    } catch (error) {
      console.error(error);
      alert("Update Failed ❌");
    }
  };

  return (
    <div className="financial-container">
      <div className="financial-card">
        <h3>Financial Details</h3>

        <form onSubmit={handleSubmit}>
          {/* Bank Name */}
          <label>Bank Name</label>
          <input
            name="bankName"
            placeholder="Enter Bank Name"
            value={formData.bankName}
            onChange={handleChange}
          />

          {/* Row */}
          <div className="row">
            <div>
              <label>Account No</label>
              <input
                name="accountNumber"
                placeholder="Enter Account Number"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Account Name</label>
              <input
                name="accountName"
                placeholder="Enter Account Name"
                value={formData.accountName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row */}
          <div className="row">
            <div>
              <label>Registered with</label>
              <input
                name="registeredWith"
                placeholder="Enter Institution Name"
                value={formData.registeredWith}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Pension Number</label>
              <input
                name="pensionNumber"
                placeholder="Enter Pension Number"
                value={formData.pensionNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="update-btn">
            Update Account Details
          </button>

          <button type="button" onClick={onBack}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinancialForm;