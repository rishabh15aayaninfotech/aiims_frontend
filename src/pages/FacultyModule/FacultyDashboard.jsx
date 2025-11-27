import FacultySidebar from "./FacultySidebar/FacultySidebar";
import "./FacultyDashboard.css";

export default function FacultyDashboard({ children }) {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-3"><FacultySidebar /></div>
        <div className="col-md-9 right-side-common"><div className="dashboard-content">
          {children}
        </div></div>
      </div>
    </div>
  )
}
