import AdminSidebar from "./AdminSidebar/AdminSidebar";
import "./AdminDashboard.css";

export default function AdminDashboard({ children }) {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-3"><AdminSidebar /></div>
        <div className="col-md-9 right-side-common"><div className="dashboard-content">
          {children}
        </div></div>
      </div>
    </div>
  )
}
