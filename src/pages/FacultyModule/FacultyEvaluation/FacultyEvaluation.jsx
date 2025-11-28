import FacultyDashboard from "../FacultyDashboard";
import "./FacultyEvaluation.css";

export default function FacultyEvaluation() {
    return (
        <FacultyDashboard>
            <div className="faculty-eval">

                {/* PAGE TITLE */}
                <h2 className="fw-bold mb-3">Evaluation Performance</h2>

                {/* SEARCH BAR */}
                <div className="search-wrapper mb-4">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for students or courses"
                    />
                </div>

                {/* TAB MENU */}
                <div className="tabs mb-4">
                    <span className="tab active">Overall Performance</span>
                    <span className="tab">Course-Specific</span>
                    <span className="tab">Individual Student</span>
                </div>

                {/* TWO PERFORMANCE CARDS */}
                <div className="row g-3 mb-4">

                    {/* LEFT CARD */}
                    <div className="col-md-6">
                        <div className="perf-card">
                            <h6 className="card-title">Average Grade Distribution</h6>
                            <h2 className="grade-main">B+</h2>
                            <p className="grade-change">Last Semester +5%</p>

                            <div className="grade-bars">
                                {["A", "B", "C", "D", "E", "F"].map((l, i) => (
                                    <div key={i} className="bar-group">
                                        <div className="bar"></div>
                                        <span>{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD – Updated with Wave Chart */}
                    <div className="col-md-6">
                        <div className="perf-card">
                            <h6 className="card-title">Performance Over Time</h6>
                            <h2 className="grade-main">78%</h2>
                            <p className="grade-change">Last Year +12%</p>

                            {/* Wave Chart */}
                            <div className="wave-chart">
                                <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                                    <path
                                        d="M10 60 C40 20, 70 20, 100 55C130 90, 160 90, 190 60 C220 30, 250 30, 280 70"
                                        stroke="url(#grad)"
                                        strokeWidth="6"
                                        fill="none"
                                    />

                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#ff9c42" />
                                            <stop offset="100%" stopColor="#ff7a00" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Bottom Labels */}
                                <div className="wave-labels">
                                    <span>Sem 1</span>
                                    <span>Sem 2</span>
                                    <span>Sem 3</span>
                                    <span>Sem 4</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* STUDENT SUMMARY */}
                <h5 className="fw-bold mb-3">Student Performance Summary</h5>

                <div className="table-wrapper">
                    <table className="table eval-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Course</th>
                                <th>Average Grade</th>
                                <th>Attendance</th>
                                <th>Assignments Completed</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[
                                ["Liam Harper", "Calculus I", "B+", "92%", 7],
                                ["Olivia Bennett", "Intro to Programming", "B", "88%", 10],
                                ["Noah Carter", "Physics I", "C+", "76%", 7],
                                ["Emma Davis", "Linear Algebra", "B+", "90%", 9],
                                ["Ethan Parker", "Discrete Mathematics", "A", "96%", 10]
                            ].map((s, i) => (
                                <tr key={i}>
                                    <td>{s[0]}</td>
                                    <td className="orange-link">{s[1]}</td>
                                    <td className="fw-bold">{s[2]}</td>
                                    <td>{s[3]}</td>
                                    <td>
                                        <div className="assign-box">
                                            <div className="assign-fill" style={{ width: `${(s[4] / 10) * 100}%` }}></div>
                                        </div>
                                        <span className="assign-num">{s[4]}/10</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </FacultyDashboard>
    );
}
