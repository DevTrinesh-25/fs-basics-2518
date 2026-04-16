
// import { useState } from "react";
// import "../../styles/financialForm.css";

// const FinancialForm = ({ data, onBack }: any) => {
//   const [formData, setFormData] = useState({
//     bankName: data?.bank || "",
//     accountNumber: data?.accountNumber || "",
//     accountName: data?.name || "",
//     registeredWith: "Stanbic IBTC",
//     pensionNumber: ""
//   });

//   const handleChange = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:4000/financial", {
//         method: "PUT", // or POST
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();
//       console.log(result);

//       alert("Financial Details Updated ✅");
//       onBack();
//     } catch (error) {
//       console.error(error);
//       alert("Update Failed ❌");
//     }
//   };

//   return (
//     <div className="financial-container">
//       <div className="financial-card">
//         <h3>Financial Details</h3>

//         <form onSubmit={handleSubmit}>
//           {/* Bank Name */}
//           <label>Bank Name</label>
//           <input
//             name="bankName"
//             placeholder="Enter Bank Name"
//             value={formData.bankName}
//             onChange={handleChange}
//           />

//           {/* Row */}
//           <div className="row">
//             <div>
//               <label>Account No</label>
//               <input
//                 name="accountNumber"
//                 placeholder="Enter Account Number"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label>Account Name</label>
//               <input
//                 name="accountName"
//                 placeholder="Enter Account Name"
//                 value={formData.accountName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Row */}
//           <div className="row">
//             <div>
//               <label>Registered with</label>
//               <input
//                 name="registeredWith"
//                 placeholder="Enter Institution Name"
//                 value={formData.registeredWith}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label>Pension Number</label>
//               <input
//                 name="pensionNumber"
//                 placeholder="Enter Pension Number"
//                 value={formData.pensionNumber}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <button type="submit" className="update-btn">
//             Update Account Details
//           </button>

//           <button type="button" onClick={onBack}>
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FinancialForm;

import "../../styles/financialForm2.css";

const FinancialForm = ({ data, onBack }: any) => {
  // ✅ Use props OR fallback hardcoded data
  const formData = {
    bankName: data?.bank || "HDFC Bank",
    accountNumber: data?.accountNumber || "1234567890",
    accountName: data?.name || "John Doe",
    registeredWith: data?.registeredWith || "Stanbic IBTC",
    pensionNumber: data?.pensionNumber || "PEN123456"
  };

  return (
    <div className="financial-container2" style={{marginTop: "1px"}}>
      <div className="financial-card">
        <h3>Financial Details</h3>

        {/* Bank Name */}
        <label>Bank Name</label>
        <input id="bankName" type="text" value={formData.bankName} placeholder="Enter Bank Name" readOnly />

        {/* Row */}
        <div className="row">
          <div>
            <label>Account No</label>
            <input id="accountNumber" type="text" value={formData.accountNumber} placeholder="Enter Account Number" readOnly />
          </div>

          <div>
            <label>Account Name</label>
            <input id="accountName" type="text" value={formData.accountName} placeholder="Enter Account Name" readOnly />
          </div>
        </div>

        {/* Row */}
        <div className="row">
          <div>
            <label>Registered with</label>
            <input id="registeredWith" type="text" value={formData.registeredWith} placeholder="Enter Institution Name" readOnly />
          </div>

          <div>
            <label>Pension Number</label>
            <input id="pensionNumber" type="text" value={formData.pensionNumber} placeholder="Enter Pension Number" readOnly />
          </div>
        </div>

        {/* ✅ Only Back Button */}
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
        )}

      </div>
    </div>
  );
};

export default FinancialForm;