import { useState } from "react";
import FacultyDashboard from "../FacultyDashboard";
import "./FacultyClassManagement.css";

export default function FacultyClassManagement() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <FacultyDashboard>
      <div className="faculty-class">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-4">Course & Class Management</h2>

        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === "courses" ? "tab active" : "tab"}
            onClick={() => setActiveTab("courses")}
          >
            My Courses
          </button>

          <button
            className={activeTab === "materials" ? "tab active" : "tab"}
            onClick={() => setActiveTab("materials")}
          >
            Course Materials
          </button>

          <button
            className={activeTab === "schedule" ? "tab active" : "tab"}
            onClick={() => setActiveTab("schedule")}
          >
            Class Schedule
          </button>
        </div>

        {/* UNDERLINE */}
        <div className="tab-underline"></div>

        {/* ===== TAB 1 — My Courses ===== */}
        {activeTab === "courses" && (
          <>
            <h5 className="fw-bold mt-4 mb-3">Assigned Courses</h5>

            <div className="table-wrapper mt-2">
              <table className="table table-custom">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Semester</th>
                    <th>Enrolled Students</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Introduction to Programming</td>
                    <td className="link-cell">CS101</td>
                    <td className="link-cell">Fall 2024</td>
                    <td>30</td>
                    <td className="action-link">View Details</td>
                  </tr>

                  <tr>
                    <td>Data Structures and Algorithms</td>
                    <td className="link-cell">CS201</td>
                    <td className="link-cell">Spring 2025</td>
                    <td>25</td>
                    <td className="action-link">View Details</td>
                  </tr>

                  <tr>
                    <td>Database Management Systems</td>
                    <td className="link-cell">CS301</td>
                    <td className="link-cell">Fall 2025</td>
                    <td>20</td>
                    <td className="action-link">View Details</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ===== TAB 2 ===== */}
        {activeTab === "materials" && (
          <p className="placeholder-text mt-5">Upload & Manage Course Materials...</p>
        )}

        {/* ===== TAB 3 ===== */}
        {activeTab === "schedule" && (
          <p className="placeholder-text mt-5">Class Schedule Page...</p>
        )}

      </div>
    </FacultyDashboard>
  );
}
