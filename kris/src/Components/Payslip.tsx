// interface PaySlipType{
//     basic: number;
//     hra: number;
//     allowances: number;
//     tax: number;
//     net: number;
// }

// interface PayslipProps {
//     payslip: PaySlipType;
// }

// function Payslip({ payslip }: PayslipProps) {
//   return (
//     <div className="card">
//       <h3>April Pay Slip Breakdown</h3>
//       <table>
//         <tbody>
//           <tr><td>Basic Pay</td><td>{payslip.basic}</td></tr>
//           <tr><td>HRA</td><td>{payslip.hra}</td></tr>
//           <tr><td>Allowances</td><td>{payslip.allowances}</td></tr>
//           <tr><td>Tax</td><td>{payslip.tax}</td></tr>
//           <tr><td><strong>Net Pay</strong></td><td><strong>{payslip.net}</strong></td></tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Payslip;

const Payslip = () => {
  return (
    <div className="card">
      <h4>April Payslip</h4>

      <table>
        <tbody>
          <tr><td>Basic</td><td>60,000</td></tr>
          <tr><td>Tax</td><td>-3,000</td></tr>
          <tr><td>Total</td><td>57,000</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payslip;