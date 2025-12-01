import { useState } from "react";
import FacultyDashboard from "../FacultyDashboard";
import "./FacultyAttendance.css";

export default function FacultyAttendance() {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  return (
    <FacultyDashboard>
      <div className="faculty-attendance">

        {/* HEADER */}
        <h2 className="fw-bold mb-4">Attendance Management</h2>

        {/* ========== SECTION 1: MARK ATTENDANCE ========== */}
        <h5 className="fw-bold">Mark Attendance</h5>

        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <label className="label">Subject / Course</label>
            <select className="form-select custom-select">
              <option>Select Course</option>
              <option>Calculus I</option>
              <option>Linear Algebra</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label className="label">Select Date</label>
            <input type="date" className="form-control custom-input" />
          </div>
        </div>

        {/* Student Attendance Table */}
        <div className="table-wrapper mt-2">
          <table className="table table-custom">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Present</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "John Carter", id: "ST1023" },
                { name: "Mia Thompson", id: "ST1044" },
                { name: "Aria Mitchell", id: "ST1055" }
              ].map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.id}</td>
                  <td><input type="checkbox" className="form-check-input" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-end">
          <button className="btn-orange mt-2">Submit Attendance</button>
        </div>

        {/* ========== SECTION 2: ATTENDANCE RECORDS ========== */}
        <h5 className="fw-bold mt-5">Attendance Records</h5>

        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <label className="label">Subject / Course</label>
            <select className="form-select custom-select">
              <option>Select Course</option>
              <option>Calculus I</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label className="label">Select Date</label>
            <input type="date" className="form-control custom-input" />
          </div>
        </div>

        <div className="table-wrapper mt-2">
          <table className="table table-custom">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "2024-01-15", status: "Present" },
                { date: "2024-01-20", status: "Absent" },
                { date: "2024-01-26", status: "Present" }
              ].map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td>
                  <td>
                    <span className={`status-pill ${r.status.toLowerCase()}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ========== SECTION 3: ATTENDANCE REPORTS ========== */}
        <h5 className="fw-bold mt-5">Attendance Reports</h5>

        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <label className="label">Subject / Course</label>
            <select className="form-select custom-select">
              <option>Select Course</option>
              <option>Calculus I</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label className="label">Select Date</label>
            <input type="date" className="form-control custom-input" />
          </div>
        </div>

        <div className="text-end">
          <button className="btn-orange mt-2">Download Report</button>
        </div>

        <div className="table-wrapper mt-3">
          <table className="table table-custom">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Attendance %</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Samir Patel", id: "ST1098", percent: 92 },
                { name: "Olivia Brown", id: "ST1102", percent: 80 }
              ].map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.id}</td>
                  <td>
                    <div className="progress-box">
                      <div className="progress-fill" style={{ width: `${s.percent}%` }}></div>
                    </div>
                    <span className="percent-text">{s.percent}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </FacultyDashboard>
  );
}
