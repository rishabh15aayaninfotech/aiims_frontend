import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import StudentDashboard from "../StudentDashboard";
import "./StudentAttendance.css";

export default function StudentAttendance() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  return (
    <StudentDashboard>
      <div className="student-attendance">

        {/* HEADER */}
        <h2 className="fw-bold mb-2">Attendance Monitoring</h2>
        <h6 className="fw-semibold mb-4">Overall Attendance</h6>

        {/* OVERALL SUMMARY */}
        <div className="overall-box p-3 rounded mb-4">
          <h6 className="fw-semibold mb-1">Attendance Percentage</h6>
          <h2 className="fw-bold text-orange">92%</h2>
        </div>

        {/* SUMMARY TABLE */}
        <h5 className="fw-bold mt-4">Attendance Summary</h5>

        <div className="table-container mt-3">
          <table className="table att-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Late</th>
                <th>Peak Attendance</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Introduction to Psychology</td>
                <td>29</td>
                <td>2</td>
                <td>1</td>
                <td className="text-orange fw-bold">Work</td>
                <td className="status-text">Pending Biometric</td>
              </tr>

              <tr>
                <td>Calculus I</td>
                <td>26</td>
                <td>4</td>
                <td>0</td>
                <td className="text-orange fw-bold">Work</td>
                <td className="status-text">Pending Biometric</td>
              </tr>

              <tr>
                <td>English Composition</td>
                <td>29</td>
                <td>1</td>
                <td>0</td>
                <td className="text-orange fw-bold">Work</td>
                <td className="status-text">Pending Biometric</td>
              </tr>

              <tr>
                <td>History & Arts</td>
                <td>27</td>
                <td>3</td>
                <td>1</td>
                <td className="text-orange fw-bold">Work</td>
                <td className="status-text">Pending Biometric</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* HISTORY SECTION */}
        <h5 className="fw-bold mt-5">Attendance History</h5>

        <div className="toggle-btns d-flex gap-3 mt-3 mb-4">
          <button className="btn toggle-btn active-toggle">Monthly</button>
          <button className="btn toggle-btn">Semester</button>
        </div>

        <div className="row gy-4">

          {/* CALENDAR 1 */}
          <div className="col-md-6">
            <h6 className="fw-bold mb-2 text-dark">November 2025</h6>
            <div className="calendar-box p-3 rounded">
              <Calendar onChange={setDate1} value={date1} />
            </div>
          </div>

          {/* CALENDAR 2 */}
          <div className="col-md-6">
            <h6 className="fw-bold mb-2 text-dark">December 2025</h6>
            <div className="calendar-box p-3 rounded">
              <Calendar onChange={setDate2} value={date2} />
            </div>
          </div>

        </div>

        <p className="legend mt-3 small">
          <span className="lg present"></span> Present &nbsp;&nbsp;
          <span className="lg absent"></span> Absent &nbsp;&nbsp;
          <span className="lg late"></span> Late
        </p>

      </div>
    </StudentDashboard>
  );
}
