const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-left">
        <div className="avatar">👤</div>
        <div>
          <h4>John Doe</h4>
          <p>UI / UX Designer & UIX Writer</p>
        </div>
      </div>

      <button className="edit-btn">Edit Profile</button>
    </div>
  );
};

export default ProfileCard;