// interface AnnouncementsProps {
//   announcements: string[];
// }

// function Announcements({ announcements }: AnnouncementsProps) {
//   return (
//     <div className="card">
//       <h3>Announcements</h3>
//       <ul className="announcement-list">
//         {announcements.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Announcements;

const Announcements = () => {
  return (
    <div className="card">
      <h4>Announcements</h4>
      <p>🎉 New Year Holiday declared</p>
      <p>📢 Office Space Update</p>
    </div>
  );
};

export default Announcements;