import StudentDashboard from "../StudentDashboard";
import "./StudentDashboardHome.css";

import { FaBell, FaCheckCircle } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

export default function StudentDashboardHome() {
  const [date, setDate] = useState(new Date());

  return (
    <StudentDashboard>
      <div className="dashboard-home">

        {/* TOP WELCOME */}
        <div className="welcome-section">
          <img
            src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
            className="welcome-img"
          />
          <div>
            <h3 className="welcome-text">Welcome back, K!</h3>
          </div>
        </div>

        {/* ENROLLMENT DETAILS */}
        <h4 className="section-heading">Enrollment Details</h4>
        <div className="info-grid">
          <div><label>Academic Year</label><p>2023–2024</p></div>
          <div><label>Program</label><p>Bachelor of Technology</p></div>
          <div><label>Semester</label><p>5th Semester</p></div>
          <div><label>Enrollment No.</label><p>KSY2023019</p></div>
        </div>

        {/* NOTIFICATIONS */}
        <h4 className="section-heading">Notifications</h4>
        <div className="notification-box">
          <FaBell className="bell-icon" />
          <p>Registration forms for Fall semester</p>
        </div>

        {/* ATTENDANCE BLOCK */}
        <h4 className="section-heading">Attendance</h4>

        <div className="attendance-table-wrapper">
          <table className="table mini-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Total Classes</th>
                <th>Attended</th>
                <th>Attendance %</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Computer Networks</td>
                <td>30</td>
                <td>27</td>
                <td>
                  <div className="progress-small"><div style={{ width: "90%" }}></div></div>
                </td>
              </tr>
              <tr>
                <td>Mathematics III</td>
                <td>28</td>
                <td>24</td>
                <td>
                  <div className="progress-small"><div style={{ width: "82%" }}></div></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Activities */}
        <h4 className="section-heading">Recent Activities</h4>
        <div className="activity-box">
          <p><FaCheckCircle className="act-icon" /> Assignment Submission</p>
          <span>English Literature</span>
        </div>

        {/* FEES & FINANCE */}
        <h4 className="section-heading">Fees & Finance</h4>

        <div className="fee-box">
          <div><label>Total Fee</label><p>₹48,000</p></div>
          <div><label>Paid</label><p>₹48,000</p></div>
          <div><label>Due</label><p>₹0</p></div>
        </div>

        {/* COURSES & SUBJECTS */}
        <h4 className="section-heading mt-4">Courses & Subjects</h4>

        <table className="table mini-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSE301</td>
              <td>Computer Networks</td>
              <td>4</td>
            </tr>
            <tr>
              <td>MAT205</td>
              <td>Maths III</td>
              <td>3</td>
            </tr>
            <tr>
              <td>ENG102</td>
              <td>English Literature</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        {/* EXAMS */}
        <h4 className="section-heading mt-4">Exams</h4>

        <div className="row">
          <div className="col-md-4">
            <Calendar className="custom-calendar" value={date} onChange={setDate} />
          </div>

          <div className="col-md-8">
            <table className="table mini-table mt-3 mt-md-0">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Networks</td>
                  <td>2025-11-05</td>
                  <td>10:00 AM</td>
                </tr>
                <tr>
                  <td>Maths III</td>
                  <td>2025-11-08</td>
                  <td>01:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </StudentDashboard>
  );
}
