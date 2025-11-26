import StudentDashboard from "../StudentDashboard";
import "./StudentCertificate.css";

export default function StudentCertificate() {
  return (
    <StudentDashboard>
      <div className="student-certificate">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-1">Certificates</h2>
        <p className="text-muted small mb-4">Manage your academic certificates</p>

        {/* ================= AVAILABLE CERTIFICATES ================= */}
        <h5 className="fw-bold mb-3">Available Certificates</h5>

        <div className="table-container">
          <table className="table cert-table">
            <thead>
              <tr>
                <th>Certificate Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bonafide Certificate</td>
                <td><span className="tag issued">Issued</span></td>
                <td><span className="action-link">Download</span></td>
              </tr>

              <tr>
                <td>Migration Certificate</td>
                <td><span className="tag ready">Ready for Download</span></td>
                <td><span className="action-link">Download</span></td>
              </tr>

              <tr>
                <td>Mark Sheets</td>
                <td><span className="tag pending">Pending</span></td>
                <td><span className="action-link">View</span></td>
              </tr>

              <tr>
                <td>Provisional Degree</td>
                <td><span className="tag notreq">Not Requested</span></td>
                <td><span className="action-link">Request</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= REQUEST NEW CERTIFICATE ================= */}
        <h5 className="fw-bold mt-5 mb-3">Request New Certificate</h5>

        <div className="request-box">
          <select className="form-select custom-input mb-3">
            <option>Select Certificate Type</option>
            <option>Bonafide Certificate</option>
            <option>Migration Certificate</option>
            <option>Provisional Degree</option>
          </select>

          <input
            type="text"
            placeholder="Reason for Request"
            className="form-control custom-input mb-3"
          />

          <button className="btn submit-btn">Submit Request</button>
        </div>
      </div>
    </StudentDashboard>
  );
}
