import FacultyDashboard from "../FacultyDashboard";
import "./FacultyDashboardHome.css";

import { FaBell, FaRegEnvelope } from "react-icons/fa";

export default function FacultyDashboardHome() {
  return (
    <FacultyDashboard>
      <div className="faculty-home">

        {/* HEADER */}
        <div className="faculty-welcome">
          <img
            src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
            className="faculty-img"
          />
          <h3>Welcome, Dr. Sharma!</h3>
        </div>

        {/* QUICK STATS */}
        <h4 className="section-heading">Quick Stats</h4>

        <div className="stats-row">
          <div className="stat-card">
            <p className="stat-label">Total Classes</p>
            <h3 className="stat-value">12</h3>
            <span className="stat-green">+20%</span>
          </div>

          <div className="stat-card">
            <p className="stat-label">Assigned Courses</p>
            <h3 className="stat-value">3</h3>
            <span className="stat-green">+5%</span>
          </div>

          <div className="stat-card">
            <p className="stat-label">Student Engagement</p>
            <h3 className="stat-value">85%</h3>
            <span className="stat-green">+2%</span>
          </div>
        </div>

        {/* UPCOMING LECTURES */}
        <h4 className="section-heading mt-4">Upcoming Lectures</h4>

        <div className="table-box">
          <table className="table faculty-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Lecture Title</th>
                <th>Date & Time</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Introduction to Programming</td>
                <td>Lecture 5: Data Structures</td>
                <td>October 21, 2024 · 10:00 AM</td>
                <td>Room 204</td>
              </tr>

              <tr>
                <td>Calculus II</td>
                <td>Lecture 3: Integration Basics</td>
                <td>October 22, 2024 · 11:00 AM</td>
                <td>Room 105</td>
              </tr>

              <tr>
                <td>Linear Algebra</td>
                <td>Lecture 7: Vector Spaces</td>
                <td>October 23, 2024 · 9:00 AM</td>
                <td>Room 301</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* STUDENT ATTENDANCE SUMMARY */}
        <h4 className="section-heading mt-4">Student Attendance Summary</h4>

        <div className="attendance-box">
          <p className="att-title">Attendance Rate by Course</p>
          <h2 className="att-percent">92%</h2>
          <p className="att-sub">Last 7 Days · +3%</p>

          {/* Fake Bars */}
          <div className="att-bars">
            <div className="bar-item">
              <div className="bar bar1"></div>
              <p>Intro Programming</p>
            </div>

            <div className="bar-item">
              <div className="bar bar2"></div>
              <p>Calculus II</p>
            </div>

            <div className="bar-item">
              <div className="bar bar3"></div>
              <p>Linear Algebra</p>
            </div>
          </div>
        </div>

        {/* PENDING LEAVE REQUESTS */}
        <h4 className="section-heading mt-4">Pending Leave Requests</h4>

        <div className="table-box">
          <table className="table faculty-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Leave Date</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Emma Carter</td>
                <td>October 20, 2024</td>
                <td>Medical Appointment</td>
              </tr>

              <tr>
                <td>Olivia Bennett</td>
                <td>October 22, 2024</td>
                <td>Family Emergency</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RECENT COMMUNICATIONS */}
        <h4 className="section-heading mt-4">Recent Communications/Notifications</h4>

        <div className="notification-card">
          <FaRegEnvelope className="note-icon" />
          <div>
            <h6>New Assignment Submission</h6>
            <p>October 21, 2024 · 10:00 AM</p>
          </div>
        </div>

        <div className="notification-card">
          <FaRegEnvelope className="note-icon" />
          <div>
            <h6>Student Inquiry: Project Deadline</h6>
            <p>October 21, 2024 · 9:15 AM</p>
          </div>
        </div>

      </div>
    </FacultyDashboard>
  );
}
