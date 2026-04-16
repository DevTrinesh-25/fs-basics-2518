import { useState } from "react";
import "../../styles/financial.css";
import FinancialForm from "../Emp Profile/financialForm";

const FinancialDetails = () => {
  const [view, setView] = useState<"list" | "form">("list");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const accounts = [
    {
      id: 1,
      bankName: "Access Bank",
      accountNumber: "00110100",
      accountName: "John Doe Smith",
      registeredWith: "Stanbic IBTC",
      pensionNumber: "10110101012010101"
    },
    {
      id: 2,
      bankName: "GTBank",
      accountNumber: "00998877",
      accountName: "Jane Doe",
      registeredWith: "UBA",
      pensionNumber: "222233334444"
    }
  ];

  const handleClick = (item: any) => {
    setSelectedItem(item);
    setView("form");
  };

  return (
    <div className="financial-container">
      {view === "list" ? (
        <div className="financial-card">
          <h3>Financial Details</h3>

          {accounts.map((acc) => (
            <div
              key={acc.id}
              className="financial-box"
              onClick={() => handleClick(acc)}
              style={{ cursor: "pointer" }}
            >
              <p>
                <strong>{acc.accountNumber}</strong> | {acc.accountName}
              </p>
              <p>
                {acc.bankName} | Savings Account
              </p>
            </div>
          ))}
        </div>
      ) : (
        <FinancialForm
          data={selectedItem}
          onBack={() => setView("list")}
        />
      )}
    </div>
  );
};

export default FinancialDetails;