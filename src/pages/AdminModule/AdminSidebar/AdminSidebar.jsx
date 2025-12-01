import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaCalendar,
  FaBook,
  FaClipboardList,
  FaWpforms,
  FaFileAlt,
  FaCertificate,
  FaComments,
  FaCog,
  FaQuestionCircle,
  FaAngleDown,
  FaAngleUp
} from "react-icons/fa";
import { useState } from "react";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>

      {/* TOP HEADER */}
      <div className="sidebar-header">
        <NavLink to="/admin/dashboard/home">
          <div>
            <h4 className="sidebar-title">Dashboard</h4>
            <p className="sidebar-role">admin</p>
          </div>
        </NavLink>

        <button 
          className="toggle-btn"
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <FaAngleDown className="header-arrow" /> : <FaAngleUp className="header-arrow" />}
        </button>
      </div>

      {/* MENU - Will be hidden when collapsed */}
      {!isCollapsed && (
        <>
          <ul className="sidebar-menu">

            <li>
              <NavLink to="/admin/profile" className="menu-link">
                <FaUser className="menu-icon" />
                <span>admin Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/attendance" className="menu-link">
                <FaCalendar className="menu-icon" />
                <span>Attendance Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/class" className="menu-link">
                <FaBook className="menu-icon" />
                <span>Course & Class Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/exam" className="menu-link">
                <FaClipboardList className="menu-icon" />
                <span>Examination Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/evaluation" className="menu-link">
                <FaClipboardList className="menu-icon" />
                <span>Evaluation Performance</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/leaves" className="menu-link">
                <FaWpforms className="menu-icon" />
                <span>Leave Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/communication" className="menu-link">
                <FaComments className="menu-icon" />
                <span>Communication</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/admin/reports" className="menu-link">
                <FaComments className="menu-icon" />
                <span>Reports & Analysis</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/security" className="menu-link">
                <FaCog className="menu-icon" />
                <span>Security Access Control</span>
              </NavLink>
            </li>

          </ul>
        </>
      )}

    </aside>
  );
}