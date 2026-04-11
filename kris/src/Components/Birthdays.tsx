// interface Birthday {
//   name: string;
//   date: string;
// }

// interface BirthdaysProps {
//   birthdays: Birthday[];
// }

// function Birthdays({ birthdays }: BirthdaysProps) {
//   return (
//     <div className="card">
//       <h3>Birthdays</h3>
//       <ul className="birthday-list">
//         {birthdays.map((bday, i) => (
//           <li key={i}>
//             {bday.name} – {new Date(bday.date).toLocaleDateString("en-IN", {
//               day: "numeric",
//               month: "long"
//             })}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Birthdays;

const Birthdays = () => {
  return (
    <div className="card">
      <h4>Birthdays</h4>
      <p>🎂 Jill Harlow - April 25th</p>
      <p>🎂 John Smith - April 25th</p>
    </div>
  );
};

export default Birthdays;