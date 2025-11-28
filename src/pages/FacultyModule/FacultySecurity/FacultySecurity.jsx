import FacultyDashboard from "../FacultyDashboard";
import "./FacultySecurity.css";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function FacultySecurity() {
  return (
    <FacultyDashboard>
      <div className="faculty-report">
        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Security Management</h2>
        <p className="small text-muted mb-4">
          Security
        </p>
      </div>
    </FacultyDashboard>
  );
}
