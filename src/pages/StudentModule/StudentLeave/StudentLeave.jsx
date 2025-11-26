import StudentDashboard from "../StudentDashboard";
import "./StudentLeave.css";

export default function StudentLeave() {
  return (
    <StudentDashboard>
      <div className="student-leave">

        {/* PAGE HEADING */}
        <h2 className="fw-bold mb-1">Leave Management</h2>
        <p className="text-muted small mb-4">
          Manage your leave requests and view their status.
        </p>

        {/* SUBMIT FORM */}
        <div className="leave-form-card">
          <h5 className="form-title">Submit New Leave Request</h5>

          {/* Leave Type */}
          <label className="form-label mt-3">Leave Type</label>
          <select className="form-select custom-input">
            <option>Select Leave Type</option>
            <option>Sick Leave</option>
            <option>Personal Leave</option>
            <option>Vacation</option>
          </select>

          {/* Reason */}
          <label className="form-label mt-3">Reason for Leave</label>
          <input
            type="text"
            className="form-control custom-input"
            placeholder="Enter reason for leave"
          />

          {/* Calendar */}
          <div className="calendar-section mt-4">
            <h6 className="calendar-month">July 2024</h6>

            <div className="calendar">
              <div className="calendar-header">
                <span>{`<`}</span>
                <span>{`>`}</span>
              </div>

              <div className="calendar-grid">
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <div className="cal-day-head">{d}</div>
                ))}

                {[
                  "", "", "", "", "", 1, 2, 3, 4, 5, 6, 7, 8, 9,
                  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                  22, 23, 24, 25, 26, 27, 28, 29, 30
                ].map((d, i) => (
                  <div key={i} className={`cal-day ${d === 10 ? "active" : ""}`}>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn submit-btn mt-3">Submit Request</button>
        </div>

        {/* LEAVE REQUEST HISTORY */}
        <h5 className="fw-bold mt-5">Leave Request History</h5>

        <div className="table-responsive mt-3">
          <table className="table leave-table">
            <thead>
              <tr>
                <th>Request Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2024-07-15</td>
                <td>Sick Leave</td>
                <td>Flu</td>
                <td><span className="status approved">Approved</span></td>
              </tr>

              <tr>
                <td>2024-06-10</td>
                <td>Personal Leave</td>
                <td>Family Event</td>
                <td><span className="status approved">Approved</span></td>
              </tr>

              <tr>
                <td>2024-05-22</td>
                <td>Vacation</td>
                <td>Travel</td>
                <td><span className="status rejected">Rejected</span></td>
              </tr>

              <tr>
                <td>2024-04-20</td>
                <td>Personal Leave</td>
                <td>Appointment</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </StudentDashboard>
  );
}
