import FacultyDashboard from "../FacultyDashboard";
import "./FacultyLeaveManagement.css";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function FacultyLeaveManagement() {
  return (
    <FacultyDashboard>
      <div className="faculty-leave">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Leave Management</h2>
        <p className="small text-muted mb-4">
          Manage student leave requests for your courses.
        </p>

        {/* PENDING REQUESTS */}
        <h5 className="fw-bold mb-3">Pending Requests</h5>

        <div className="table-wrapper">
          <table className="table leave-table">

            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Leave Dates</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ethan Harper</td>
                <td className="course-link">Introduction to Programming</td>
                <td>
                  <span className="date-line">2024-07-15</span><br />
                  <span className="date-line">2024-07-17</span>
                </td>
                <td>Family emergency</td>
                <td><span className="status-pill pending">Pending</span></td>
                <td>
                  <FaCheck className="action-btn approve" />
                  <FaTimes className="action-btn reject" />
                </td>
              </tr>

              <tr>
                <td>Olivia Bennett</td>
                <td className="course-link">Calculus I</td>
                <td>
                  <span className="date-line">2024-07-20</span>
                </td>
                <td>Medical appointment</td>
                <td><span className="status-pill pending">Pending</span></td>
                <td>
                  <FaCheck className="action-btn approve" />
                  <FaTimes className="action-btn reject" />
                </td>
              </tr>

              <tr>
                <td>Noah Carter</td>
                <td className="course-link">Linear Algebra</td>
                <td>
                  <span className="date-line">2024-07-22</span><br />
                  <span className="date-line">2024-07-24</span>
                </td>
                <td>Personal reasons</td>
                <td><span className="status-pill pending">Pending</span></td>
                <td>
                  <FaCheck className="action-btn approve" />
                  <FaTimes className="action-btn reject" />
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        {/* LEAVE HISTORY */}
        <h5 className="fw-bold mt-5 mb-3">Leave History</h5>

        <input
          type="text"
          className="search-box mb-3"
          placeholder="Search by student name or course"
        />

        <div className="table-wrapper">
          <table className="table leave-table">

            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Leave Dates</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ethan Harper</td>
                <td className="course-link">Introduction to Programming</td>
                <td>2024-06-10 to 2024-06-12</td>
                <td>Illness</td>
                <td><span className="status-pill approved">Approved</span></td>
              </tr>

              <tr>
                <td>Olivia Bennett</td>
                <td className="course-link">Calculus I</td>
                <td>2024-06-15</td>
                <td>Family event</td>
                <td><span className="status-pill approved">Approved</span></td>
              </tr>

              <tr>
                <td>Noah Carter</td>
                <td className="course-link">Linear Algebra</td>
                <td>2024-06-20 to 2024-06-22</td>
                <td>Travel</td>
                <td><span className="status-pill rejected">Rejected</span></td>
              </tr>

              <tr>
                <td>Ethan Harper</td>
                <td className="course-link">Introduction to Programming</td>
                <td>2024-05-05</td>
                <td>Medical appointment</td>
                <td><span className="status-pill approved">Approved</span></td>
              </tr>

              <tr>
                <td>Olivia Bennett</td>
                <td className="course-link">Calculus I</td>
                <td>2024-05-12 to 2024-05-14</td>
                <td>Personal reasons</td>
                <td><span className="status-pill approved">Approved</span></td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </FacultyDashboard>
  );
}
