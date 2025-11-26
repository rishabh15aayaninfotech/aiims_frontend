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
  FaAngleRight
} from "react-icons/fa";

import "./StudentSidebar.css";

export default function StudentSidebar() {
  return (
    <aside className="student-sidebar">

      {/* TOP HEADER */}
      <div className="sidebar-header">
        <NavLink to="/student/dashboard/home">
          <div>
            <h4 className="sidebar-title">Dashboard</h4>
            <p className="sidebar-role">Student</p>
          </div>
        </NavLink>

        <FaAngleRight className="header-arrow" />
      </div>

      {/* MENU */}
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/student/profile" className="menu-link">
            <FaUser className="menu-icon" />
            <span>Students Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/attendance" className="menu-link">
            <FaCalendar className="menu-icon" />
            <span>Attendance</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/academics" className="menu-link">
            <FaBook className="menu-icon" />
            <span>Academics</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/exam-results" className="menu-link">
            <FaClipboardList className="menu-icon" />
            <span>Exams & Results</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/leaves" className="menu-link">
            <FaWpforms className="menu-icon" />
            <span>Leave Requests</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/fees" className="menu-link">
            <FaFileAlt className="menu-icon" />
            <span>Fees</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/certificates" className="menu-link">
            <FaCertificate className="menu-icon" />
            <span>Certificates</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/messages" className="menu-link">
            <FaComments className="menu-icon" />
            <span>Communication</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/settings" className="menu-link">
            <FaCog className="menu-icon" />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      {/* HELP SECTION */}
      <div className="sidebar-help">
        <FaQuestionCircle className="help-icon" />
        Help
      </div>

    </aside>
  );
}
