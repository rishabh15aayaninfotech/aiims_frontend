import StudentSidebar from "./StudentSidebar/StudentSidebar";
import "./StudentDashboard.css";

export default function StudentDashboard({ children }) {
  return (
    <div className="dashboard-wrapper container">
      <StudentSidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}
