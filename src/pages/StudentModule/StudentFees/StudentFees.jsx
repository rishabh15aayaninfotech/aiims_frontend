import StudentDashboard from "../StudentDashboard";
import "./StudentFees.css";

export default function StudentFees() {
  return (
    <StudentDashboard>
      <div className="student-fees">

        {/* PAGE HEADING */}
        <h2 className="fw-bold mb-1">Fee Management</h2>
        <p className="text-muted small mb-4">
          View your fee statements and payment history.
        </p>

        {/* ================== FEE STATEMENT ================== */}
        <h5 className="fw-bold mb-3">Fee Statement</h5>

        <div className="table-container">
          <table className="table fees-table">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>Semester</th>
                <th>Total Fee</th>
                <th>Paid Amount</th>
                <th>Outstanding Balance</th>
                <th>Due Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2023-2024</td>
                <td>Fall</td>
                <td>$6,000</td>
                <td>$4,500</td>
                <td>$600</td>
                <td>2023-11-15</td>
              </tr>

              <tr>
                <td>2023-2024</td>
                <td>Spring</td>
                <td>$5,000</td>
                <td>$5,000</td>
                <td>$0</td>
                <td>2024-03-15</td>
              </tr>

              <tr>
                <td>2022-2023</td>
                <td>Fall</td>
                <td>$5,500</td>
                <td>$5,500</td>
                <td>$0</td>
                <td>2023-01-10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================== PAYMENT HISTORY ================== */}
        <h5 className="fw-bold mt-5 mb-3">Payment History</h5>

        <div className="table-container">
          <table className="table fees-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2023-11-10</td>
                <td>Fall Semester Payment</td>
                <td>$4,500</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>2024-03-16</td>
                <td>Spring Semester Payment</td>
                <td>$5,000</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>2024-07-20</td>
                <td>Late Fee Payment</td>
                <td>$60</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>2024-08-20</td>
                <td>Fall Semester Payment</td>
                <td>$6,000</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ACTION BUTTON */}
        <div className="d-flex justify-content-end mt-3">
          <button className="btn outstanding-btn">
            Pay Outstanding Balance
          </button>
        </div>

      </div>
    </StudentDashboard>
  );
}
