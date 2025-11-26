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
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [75, 70, 78, 65, 85, 80],
        borderColor: "#FF9437",
        backgroundColor: "rgba(255,148,55,0)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#777" } },
      y: { display: false, min: 50, max: 100 },
    },
  };

  return (
    <StudentDashboard>
      <div className="dashboard-home">

        {/* WELCOME */}
        <div className="welcome-box">
          <img
            src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
            className="welcome-img"
          />
          <h3 className="welcome-text">Welcome back, K!</h3>
        </div>

        {/* QUICK OVERVIEW */}
        <h5 className="section-heading">Quick Overview</h5>

        <div className="row gx-4 gy-3 overview-row">
          {[
            { title: "Attendance", value: "92%", sub: "+3%" },
            { title: "Upcoming Exams", value: "2" },
            { title: "Outstanding Fees", value: "0" },
            { title: "Notifications", value: "3" },
          ].map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="overview-card">
                <p className="overview-title">{item.title}</p>
                <p className="overview-value">{item.value}</p>
                {item.sub && <span className="overview-sub">{item.sub}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* PROGRESS */}
        <h5 className="section-heading mt-4">Academic Progress</h5>

        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: "75%" }}></div>
        </div>

        <p className="progress-sub">Overall Progress</p>

        {/* TREND GRAPH */}
        <div className="chart-box">
          <h6 className="trend-title">Monthly Trend</h6>
          <h3 className="trend-score">85%</h3>
          <Line data={chartData} options={chartOptions} height={70} />
        </div>

        {/* RECENT GRADES */}
        <h5 className="section-heading mt-4">Recent Grades</h5>

        <div className="table-wrapper">
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
                <td><span className="grade-badge">A+</span></td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>88/100</td>
                <td><span className="grade-badge bplus">A</span></td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>90/100</td>
                <td><span className="grade-badge aminus">B+</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* UPCOMING EXAMS */}
        <h5 className="section-heading mt-4">Upcoming Exams</h5>

        <div className="table-wrapper">
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
        <h5 className="section-heading mt-4">Leave Status</h5>

        <div className="table-wrapper">
          <table className="table dash-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Status</th>
                <th>Days Remaining</th>
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
