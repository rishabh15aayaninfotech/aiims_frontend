import FacultyDashboard from "../FacultyDashboard";
import "./FacultyExamManagement.css";

export default function FacultyExamManagement() {
  return (
    <FacultyDashboard>
      <div className="faculty-exam">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-4">Examination Management</h2>

        {/* UPCOMING EXAMS */}
        <h5 className="fw-bold mb-3">Upcoming Examinations</h5>

        <div className="table-wrapper mb-4">
          <table className="table exam-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Exam Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Introduction to Programming</td>
                <td className="orange-text">Midterm Exam</td>
                <td>2024-09-18</td>
                <td>10:00 AM</td>
                <td className="action-link">View Details</td>
              </tr>

              <tr>
                <td>Data Structures & Algorithms</td>
                <td className="orange-text">Final Exam</td>
                <td>2024-04-10</td>
                <td>2:00 PM</td>
                <td className="action-link">View Details</td>
              </tr>

              <tr>
                <td>Database Management Systems</td>
                <td className="orange-text">Quiz 2</td>
                <td>2024-05-22</td>
                <td>11:00 AM</td>
                <td className="action-link">View Details</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GRADE SUBMISSION */}
        <h5 className="fw-bold mb-3">Grade Submission</h5>

        <div className="row mb-2">
          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option>Choose a course</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option>Choose an exam</option>
            </select>
          </div>
        </div>

        <button className="btn-orange mb-4">Upload Grades</button>

        {/* STUDENT PERFORMANCE ANALYTICS */}
        <h5 className="fw-bold mb-3">Student Performance Analytics</h5>

        <div className="col-md-4 mb-3">
          <select className="form-select custom-select">
            <option>Choose a course</option>
          </select>
        </div>

        <button className="btn-orange mb-4">View Analytics</button>

        {/* ASSESSMENT REPORTS */}
        <h5 className="fw-bold mb-3 mt-4">Assessment Reports</h5>

        <div className="row mb-2">
          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option>Choose a course</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option>Choose an exam</option>
            </select>
          </div>
        </div>

        <button className="btn-orange">Submit Report</button>

      </div>
    </FacultyDashboard>
  );
}
