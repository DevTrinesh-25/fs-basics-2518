import "../../styles/EducationForm2.css";

interface EducationFormProps {
  data?: any;
  onBack?: () => void;
}

const EducationForm = ({ data, onBack }: EducationFormProps) => {
  // ✅ Use props data OR fallback hardcoded
  const formData = {
    institution: data?.institution || "Babcock University",
    department: data?.department || "Computer Dept",
    course: data?.degree || data?.course || "Computer Science",
    location: data?.location || "Ogun State, Nigeria",
    startDate: data?.startDate || "1998-01-01",
    endDate: data?.endDate || "2019-01-01",
    description: data?.description || "Completed graduation with strong academic performance."
  };

  return (
    <div className="form-container">
      {onBack && (
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      )}

      <h3>Academic Records / Academic Details</h3>

      <div className="form-grid">

        {/* Institution */}
        <div>
          <label>Name of Institution</label>
          <input id="Name of institution"  type="text" value={formData.institution} placeholder="Enter Name of institution" readOnly />
        </div>

        {/* Department */}
        <div>
          <label>Department</label>
          <input id="Department"  type="text" value={formData.department} placeholder="Enter department" readOnly />
        </div>

        {/* Course */}
        <div>
          <label>Course</label>
          <input id="Course"  type="text" value={formData.course} placeholder="Enter course" readOnly />
        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input  id="location" type="text" value={formData.location} placeholder="Enter location" readOnly />
        </div>

        {/* Start Date */}
        <div>
          <label>Start Date</label>
          <input  id="Start Date" type="date" value={formData.startDate} placeholder="start Date" readOnly />
        </div>

        {/* End Date */}
        <div>
          <label>End Date</label>
          <input id="End Date" type="date" value={formData.endDate} placeholder="end Date" readOnly />
        </div>

        {/* Description */}
        <div className="full-width">
          <label>Description</label>
          <textarea id="Description" value={formData.description} placeholder="Enter description" readOnly />
        </div>

      </div>
    </div>
  );
};

export default EducationForm;