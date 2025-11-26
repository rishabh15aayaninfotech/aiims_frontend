import StudentDashboard from "../StudentDashboard";
import "./StudentCommunication.css";
import { FaEnvelope } from "react-icons/fa";

export default function StudentCommunication() {
  return (
    <StudentDashboard>
      <div className="student-communication">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Communication & Notifications</h2>
        <p className="text-muted small mb-4">
          Stay updated with your latest messages and alerts.
        </p>

        {/* =================== TABS =================== */}
        <div className="comm-tabs mb-4">
          <span className="tab active">Inbox</span>
          <span className="tab">Announcements</span>
          <span className="tab">Notifications</span>
        </div>

        {/* =================== TODAY =================== */}
        <h6 className="section-label">Today</h6>

        <div className="message-card">
          <FaEnvelope className="msg-icon" />
          <div>
            <h6 className="msg-title">Class Cancellation</h6>
            <p className="msg-sender">Dr. Verma</p>
          </div>
        </div>

        <div className="message-card">
          <FaEnvelope className="msg-icon" />
          <div>
            <h6 className="msg-title">Assignment Submission</h6>
            <p className="msg-sender">Ms. Kapoor</p>
          </div>
        </div>

        {/* =================== YESTERDAY =================== */}
        <h6 className="section-label mt-4">Yesterday</h6>

        <div className="message-card">
          <FaEnvelope className="msg-icon" />
          <div>
            <h6 className="msg-title">Fee Reminder</h6>
            <p className="msg-sender">Administration</p>
          </div>
        </div>

        <div className="message-card">
          <FaEnvelope className="msg-icon" />
          <div>
            <h6 className="msg-title">Project Feedback</h6>
            <p className="msg-sender">Mr. Singh</p>
          </div>
        </div>

      </div>
    </StudentDashboard>
  );
}
