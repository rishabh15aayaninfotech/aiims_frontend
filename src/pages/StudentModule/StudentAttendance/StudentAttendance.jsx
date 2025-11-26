import StudentDashboard from "../StudentDashboard";
import "./StudentAttendance.css";

export default function StudentAttendance() {
  return (
    <StudentDashboard>
      <div className="student-attendance">
        {/* PAGE HEADER */}
        <h2 className="fw-bold mb-1">Attendance Monitoring</h2>
        <p className="text-muted mb-4">
          Track your attendance records efficiently and view detailed statistics.
          Monitor class attendance and analyze monthly or semester-wise patterns.
        </p>

        {/* OVERALL ATTENDANCE BOX */}
        <div className="overall-box mb-4 p-3 rounded">
          <h6 className="fw-bold">Attendance Percentage</h6>
          <h2 className="fw-bold text-orange mt-2">92%</h2>
        </div>

        {/* ATTENDANCE SUMMARY TABLE */}
        <h5 className="fw-bold mt-4">Attendance Summary</h5>

        <div className="table-responsive mt-2">
          <table className="table attendance-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Late</th>
                <th>Peak Attendance</th>
                <th>Remarks / Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>28</td>
                <td>2</td>
                <td>1</td>
                <td className="text-orange fw-bold">98%</td>
                <td className="text-orange fw-bold pointer">Work</td>
              </tr>

              <tr>
                <td>Chemistry I</td>
                <td>27</td>
                <td>4</td>
                <td>0</td>
                <td className="text-orange fw-bold">96%</td>
                <td className="text-orange fw-bold pointer">Pending Clearance</td>
              </tr>

              <tr>
                <td>English Composition</td>
                <td>29</td>
                <td>1</td>
                <td>0</td>
                <td className="text-orange fw-bold">99%</td>
                <td className="text-orange fw-bold pointer">Work</td>
              </tr>

              <tr>
                <td>History & Arts</td>
                <td>26</td>
                <td>5</td>
                <td>1</td>
                <td className="text-orange fw-bold">92%</td>
                <td className="text-orange fw-bold pointer">Pending Approval</td>
              </tr>

              <tr>
                <td>Computer Science Lab</td>
                <td>30</td>
                <td>0</td>
                <td>0</td>
                <td className="text-orange fw-bold">100%</td>
                <td className="text-orange fw-bold pointer">Work</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ATTENDANCE HISTORY */}
        <h5 className="fw-bold mt-4">Attendance History</h5>

        {/* TOGGLE BUTTONS */}
        <div className="d-flex gap-3 my-3">
          <button className="btn toggle-btn active-toggle">Monthly</button>
          <button className="btn toggle-btn">Semester</button>
        </div>

        {/* CALENDAR SECTION */}
        <div className="row mt-4">
          {/* Month 1 */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold">October 2023</h6>

            <div className="calendar-box mt-2 p-3 rounded">
              <div className="calendar-grid">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className="calendar-cell">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Month 2 */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold">November 2023</h6>

            <div className="calendar-box mt-2 p-3 rounded">
              <div className="calendar-grid">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="calendar-cell">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentDashboard>
  );
}
