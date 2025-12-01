import FacultyDashboard from "../FacultyDashboard";
import "./FacultySecurity.css";
import { FaShieldAlt, FaClipboardList, FaLock, FaClock, FaCodeBranch } from "react-icons/fa";

export default function FacultySecurity() {
  return (
    <FacultyDashboard>
      <div className="faculty-security">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Security & Access Control</h2>
        <p className="text-muted mb-4">
          Our system employs a role-based access control (RBAC) system, ensuring that each faculty member’s
          account is granted limited access only to functionalities relevant to their teaching and evaluation duties.
          This approach minimizes the risk of unauthorized access to sensitive data and operations.
        </p>

        {/* SECTION TITLE */}
        <h5 className="fw-bold mb-3">Security Measures</h5>

        {/* SECURITY CARDS */}
        <div className="security-list">

          {/* MFA */}
          <div className="security-card">
            <div className="icon-box">
              <FaShieldAlt />
            </div>
            <div>
              <h6 className="sec-title">Multi-Factor Authentication (MFA)</h6>
              <p className="sec-text">
                Enhance your account security by enabling multi-factor authentication (MFA). This adds an extra
                layer of protection by requiring a one-time password (OTP) generated on your device in addition to your password.
              </p>
            </div>
          </div>

          {/* Audit Logs */}
          <div className="security-card">
            <div className="icon-box">
              <FaClipboardList />
            </div>
            <div>
              <h6 className="sec-title">Audit Logs</h6>
              <p className="sec-text">
                Every action performed within the system, such as attendance updates, marks entry, and edits,
                is meticulously tracked. These logs provide a comprehensive record of all activities, ensuring accountability
                and facilitating oversight.
              </p>
            </div>
          </div>

          {/* Encrypted Communication */}
          <div className="security-card">
            <div className="icon-box">
              <FaLock />
            </div>
            <div>
              <h6 className="sec-title">Encrypted Communication</h6>
              <p className="sec-text">
                All data transferred within the system is protected using industry-standard encryption protocols.
                This ensures that your information remains confidential and protected from unauthorized interception during transmission.
              </p>
            </div>
          </div>

          {/* Automatic Logout */}
          <div className="security-card">
            <div className="icon-box">
              <FaClock />
            </div>
            <div>
              <h6 className="sec-title">Automatic Logout</h6>
              <p className="sec-text">
                To prevent unauthorized access, the system automatically logs you out after a period of inactivity.
                This feature helps safeguard your account and the data it accesses.
              </p>
            </div>
          </div>

          {/* Version Control */}
          <div className="security-card">
            <div className="icon-box">
              <FaCodeBranch />
            </div>
            <div>
              <h6 className="sec-title">Version Control</h6>
              <p className="sec-text">
                The system maintains version control for all academic documents, allowing you to track changes and
                revert to previous versions if needed. This ensures the integrity and accuracy of your course materials.
              </p>
            </div>
          </div>

          {/* Data Access Restrictions */}
          <div className="security-card">
            <div className="icon-box">
              <FaShieldAlt />
            </div>
            <div>
              <h6 className="sec-title">Data Access Restrictions</h6>
              <p className="sec-text">
                Data sharing is strictly restricted to assigned permissions. Faculty members can only access and
                modify information related to their courses and students. This prevents unauthorized access to other departments’ data.
              </p>
            </div>
          </div>

        </div>

        <p className="contact-note mt-4">
          If you have any questions or concerns regarding security and access control, please contact the IT support
          team at support@acme.edu.
        </p>

      </div>
    </FacultyDashboard>
  );
}
