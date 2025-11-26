import StudentDashboard from "../StudentDashboard";
import "./StudentDashboardHome.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function StudentDashboardHome() {
  // LINE CHART DATA
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Progress",
        data: [70, 72, 75, 68, 80, 85],
        borderColor: "#FF9437",
        backgroundColor: "rgba(255,148,55,0.2)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#666" } },
      y: { ticks: { color: "#666" }, min: 60, max: 100 },
    },
  };

  return (
    <StudentDashboard>
      <div className="dashboard-home">

        {/* WELCOME HEADER */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <img
            src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
            className="dash-profile"
          />
          <h3 className="fw-bold">Welcome back, K!</h3>
        </div>

        {/* QUICK OVERVIEW CARDS */}
        <h5 className="fw-bold mb-3">Quick Overview</h5>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="overview-card">
              <p className="label">Attendance</p>
              <h3 className="value">92%</h3>
              <span className="trend">+3%</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="overview-card">
              <p className="label">Upcoming Exams</p>
              <h3 className="value">2</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="overview-card">
              <p className="label">Outstanding Fees</p>
              <h3 className="value">0</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="overview-card">
              <p className="label">Notifications</p>
              <h3 className="value">3</h3>
            </div>
          </div>
        </div>

        {/* ACADEMIC PROGRESS */}
        <h5 className="fw-bold mb-2">Academic Progress</h5>

        <div className="progress-bar-container mb-3">
          <div className="progress-bar-fill" style={{ width: "75%" }}></div>
        </div>

        <p className="progress-info text-orange">Overall Progress</p>

        <div className="chart-box my-4">
          <h6 className="fw-bold">Monthly Trend</h6>
          <h3 className="trend-number">85%</h3>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* RECENT GRADES */}
        <h5 className="fw-bold mt-4">Recent Grades</h5>

        <div className="table-responsive mt-2">
          <table className="table dash-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calculus</td>
                <td>92/100</td>
                <td><span className="grade-badge">A</span></td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>88/100</td>
                <td><span className="grade-badge">B+</span></td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>90/100</td>
                <td><span className="grade-badge">A-</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* UPCOMING EXAMS */}
        <h5 className="fw-bold mt-5">Upcoming Exams</h5>

        <div className="table-responsive mt-2">
          <table className="table dash-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Math II</td>
                <td>2024-05-16</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>2024-05-18</td>
                <td>2:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LEAVE STATUS */}
        <h5 className="fw-bold mt-5">Leave Status</h5>

        <div className="table-responsive mt-2">
          <table className="table dash-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Status</th>
                <th>Approved Days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sick Leave</td>
                <td><span className="status-approved">Approved</span></td>
                <td>3</td>
              </tr>
              <tr>
                <td>Casual Leave</td>
                <td><span className="status-pending">Pending</span></td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </StudentDashboard>
  );
}
