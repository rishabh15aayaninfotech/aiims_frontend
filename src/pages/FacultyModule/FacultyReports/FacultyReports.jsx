import FacultyDashboard from "../FacultyDashboard";
import "./FacultyReports.css";

export default function FacultyReports() {
  return (
    <FacultyDashboard>
      <div className="faculty-report">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Reports & Analysis</h2>

        {/* TABS */}
        <div className="tabs mb-4">
          <span className="tab active">Attendance Summary</span>
          <span className="tab">Student Performance</span>
          <span className="tab">Academic Summaries</span>
          <span className="tab">Export Reports</span>
        </div>

        {/* ================= ATTENDANCE SUMMARY TABLE ================= */}
        <h5 className="fw-bold mb-3">Attendance Summary</h5>

        <div className="table-card mb-4">
          <table className="table report-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Total Classes</th>
                <th>Classes Attended</th>
                <th>Attendance Percentage</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Liam Harper", "ST123455", 30, 28, 93],
                ["Olivia Bennett", "ST134566", 29, 27, 90],
                ["Noah Carter", "ST112233", 26, 21, 78],
                ["Emma Davis", "ST109950", 28, 27, 96],
                ["Ethan Parker", "ST105544", 25, 22, 88]
              ].map((s, i) => (
                <tr key={i}>
                  <td>{s[0]}</td>
                  <td className="orange-link">{s[1]}</td>
                  <td>{s[2]}</td>
                  <td>{s[3]}</td>
                  <td>
                    <div className="progress-box">
                      <div className="progress-fill" style={{ width: `${s[4]}%` }}></div>
                    </div>
                    <span className="percent-text">{s[4]}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= STUDENT PERFORMANCE DROPDOWN ================= */}
        <h5 className="fw-bold mb-2">Student Performance</h5>
        <select className="form-select custom-select mb-4">
          <option>Select</option>
        </select>

        {/* ================= PERFORMANCE OVER TIME ================= */}
        <div className="performance-card mb-4">
          <h6 className="card-title">Student Performance Over Time</h6>
          <h2 className="score-main">Average Score: 85</h2>
          <p className="score-sub">Last 6 Months +5%</p>

          {/* Fake Line Graph */}
          <div className="line-graph">
            <div className="curve"></div>
          </div>

          <div className="line-labels">
            <span>Month 1</span>
            <span>Month 2</span>
            <span>Month 3</span>
            <span>Month 4</span>
            <span>Month 5</span>
            <span>Month 6</span>
          </div>
        </div>

        {/* ================= ACADEMIC SUMMARIES ================= */}
        <h5 className="fw-bold mb-2">Academic Summaries</h5>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <select className="form-select custom-select">
              <option>Select</option>
            </select>
          </div>

          <div className="col-md-6">
            <select className="form-select custom-select">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="summary-cards mb-5">
          <div className="summary-box">
            <h6>Average Score</h6>
            <h2>78</h2>
          </div>

          <div className="summary-box">
            <h6>Pass Rate</h6>
            <h2>85%</h2>
          </div>

          <div className="summary-box">
            <h6>Top Performer</h6>
            <h2 className="orange-text">Liam Harper</h2>
          </div>
        </div>

        {/* ================= EXPORT REPORTS ================= */}
        <h5 className="fw-bold mb-2">Export Reports</h5>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <select className="form-select custom-select">
              <option>Select</option>
            </select>
          </div>

          <div className="col-md-6">
            <select className="form-select custom-select">
              <option>Select</option>
            </select>
          </div>
        </div>

        <button className="btn-orange">Export</button>
      </div>
    </FacultyDashboard>
  );
}
