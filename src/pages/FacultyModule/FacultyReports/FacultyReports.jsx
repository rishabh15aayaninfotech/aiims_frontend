import FacultyDashboard from "../FacultyDashboard";
import "./FacultyReports.css";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function FacultyReports() {
  return (
    <FacultyDashboard>
      <div className="faculty-report">
        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Report Management</h2>
        <p className="small text-muted mb-4">
          Manage student leave requests for your courses.
        </p>
      </div>
    </FacultyDashboard>
  );
}
