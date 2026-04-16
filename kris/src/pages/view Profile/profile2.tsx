import "../../styles/profile2.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="edit">✏️ Edit</div>

      <div className="avatar"></div>

      <h4>Employee Name</h4>
      <h2>John Doe Francis</h2>

      <p>Department</p>
      <h3>Design & Marketing</h3>

      <div className="row">
        <div>
          <p>Job Title</p>
          <h4>UI / UX Designer</h4>
        </div>

        <div>
          <p>Job Category</p>
          <h4>Full time</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;