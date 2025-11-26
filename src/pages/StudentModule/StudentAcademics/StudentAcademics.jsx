import StudentDashboard from "../StudentDashboard";
import "./StudentAcademics.css";

export default function StudentAcademics() {
  return (
    <StudentDashboard>
      <div className="student-academics">
        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-4">Academic Information</h2>

        {/* ENROLLED COURSES */}
        <h5 className="fw-bold">Enrolled Courses</h5>

        <div className="table-responsive mt-3">
          <table className="table academics-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Credits</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Introduction to Computer Science</td>
                <td>Dr. Richard Harper</td>
                <td>3</td>
                <td>
                  <span className="grade-badge">A</span>
                </td>
              </tr>

              <tr>
                <td>Calculus I</td>
                <td>Dr. Samuel Reed</td>
                <td>4</td>
                <td>
                  <span className="grade-badge grade-bplus">B+</span>
                </td>
              </tr>

              <tr>
                <td>English Composition</td>
                <td>Prof. Olivia Carter</td>
                <td>3</td>
                <td>
                  <span className="grade-badge">A-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CLASS SCHEDULE */}
        <h5 className="fw-bold mt-5">Class Schedule</h5>

        <div className="row mt-3">

          {/* Calendar */}
          <div className="col-md-4">
            <div className="calendar-container p-3 rounded">
              <h6 className="fw-bold text-center">October 2023</h6>

              <div className="calendar-grid mt-3">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i} className="calendar-head">{d}</div>
                ))}

                {[...Array(30)].map((_, i) => (
                  <div key={i} className="calendar-cell">{i + 1}</div>
                ))}
              </div>
            </div>
          </div>

          {/* CLASS TABLE */}
          <div className="col-md-8">
            <div className="table-responsive mt-3 mt-md-0">
              <table className="table schedule-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Course</th>
                    <th>Location</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>9:00 AM - 10:30 AM</td>
                    <td>Introduction to Computer Science</td>
                    <td>Room 405</td>
                  </tr>

                  <tr>
                    <td>11:00 AM - 12:30 PM</td>
                    <td>Calculus I</td>
                    <td>Room 507</td>
                  </tr>

                  <tr>
                    <td>1:00 PM - 2:30 PM</td>
                    <td>English Composition</td>
                    <td>Room 312</td>
                  </tr>

                  <tr>
                    <td>3:00 PM - 4:30 PM</td>
                    <td>Introduction to Computer Science Lab</td>
                    <td>Lab 207</td>
                  </tr>

                  <tr>
                    <td>2:30 PM - 3:30 PM</td>
                    <td>Calculus I Lab</td>
                    <td>Lab 322</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </StudentDashboard>
  );
}
