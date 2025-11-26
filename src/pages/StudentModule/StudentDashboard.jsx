import StudentSidebar from "./StudentSidebar/StudentSidebar";
import "./StudentDashboard.css";

export default function StudentDashboard({ children }) {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-3"><StudentSidebar /></div>
        <div className="col-md-9 right-side-common"><div className="dashboard-content">
          {children}
        </div></div>
      </div>
    </div>
  );
}
