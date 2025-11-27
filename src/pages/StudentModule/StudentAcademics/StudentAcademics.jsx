import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import StudentDashboard from "../StudentDashboard";
import "./StudentAcademics.css";

export default function StudentAcademics() {
  const [scheduleDate, setScheduleDate] = useState(new Date());

  return (
    <StudentDashboard>
      <div className="student-academics">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-3">Academic Information</h2>

        {/* ================= ENROLLED COURSES ================= */}
        <h5 className="fw-bold">Enrolled Courses</h5>

        <div className="table-wrapper mt-3">
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
                <td className="instructor">Dr. Eleanor Harper</td>
                <td>3</td>
                <td><span className="grade-badge">A</span></td>
              </tr>

              <tr>
                <td>Calculus I</td>
                <td className="instructor">Dr. Samuel Bernett</td>
                <td>4</td>
                <td><span className="grade-badge bplus">B+</span></td>
              </tr>

              <tr>
                <td>English Composition</td>
                <td className="instructor">Prof. Olivia Carter</td>
                <td>3</td>
                <td><span className="grade-badge aminus">A-</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= CLASS SCHEDULE ================= */}
        <h5 className="fw-bold mt-5">Class Schedule</h5>

        <div className="row gy-4 align-items-center">

          {/* LEFT CALENDAR */}
          <div className="col-md-5">
            <div className="calendar-box p-3 rounded">
              <h6 className="fw-bold text-center mb-2">
                December 2025
              </h6>

              <Calendar
                onChange={setScheduleDate}
                value={scheduleDate}
                className="react-calendar"
              />
            </div>
          </div>

          {/* RIGHT SCHEDULE TABLE */}
          <div className="col-md-7">
            <div className="table-wrapper">
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
                    <td className="location">Room 201</td>
                  </tr>

                  <tr>
                    <td>10:45 AM - 12:00 PM</td>
                    <td>Calculus I</td>
                    <td className="location">Room 305</td>
                  </tr>

                  <tr>
                    <td>12:30 PM - 1:30 PM</td>
                    <td>English Composition</td>
                    <td className="location">Room 122</td>
                  </tr>

                  <tr>
                    <td>2:00 PM - 3:00 PM</td>
                    <td>Computer Science Lab</td>
                    <td className="location">Lab 225</td>
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
