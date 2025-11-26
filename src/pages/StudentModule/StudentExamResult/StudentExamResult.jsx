import StudentDashboard from "../StudentDashboard";
import "./StudentExamResult.css";

export default function StudentExamResult() {
    return (
        <StudentDashboard>
            <div className="student-exam">
                {/* PAGE TITLE */}
                <h2 className="fw-bold mb-4">Examination & Result</h2>

                {/* UPCOMING EXAMS */}
                <h5 className="fw-bold mb-3">Upcoming Examinations</h5>

                <div className="table-responsive">
                    <table className="table exam-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Subject</th>
                                <th>Duration</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>2024-04-15</td>
                                <td>10:00 AM</td>
                                <td>Calculus II</td>
                                <td>2 hours</td>
                            </tr>

                            <tr>
                                <td>2024-04-17</td>
                                <td>2:00 PM</td>
                                <td>Linear Algebra</td>
                                <td>2 hours</td>
                            </tr>

                            <tr>
                                <td>2024-04-20</td>
                                <td>9:00 AM</td>
                                <td>Probability & Statistics</td>
                                <td>2.5 hours</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* PAST RESULTS */}
                <h5 className="fw-bold mt-5 mb-3">Past Examination Results</h5>

                <div className="table-responsive">
                    <table className="table exam-table">
                        <thead>
                            <tr>
                                <th>Exam Date</th>
                                <th>Subject</th>
                                <th>Grade</th>
                                <th>Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>2023-12-10</td>
                                <td>Calculus I</td>
                                <td className="fw-bold">A</td>
                                <td>92/100</td>
                            </tr>

                            <tr>
                                <td>2023-12-12</td>
                                <td>Linear Algebra</td>
                                <td className="fw-bold">B+</td>
                                <td>85/100</td>
                            </tr>

                            <tr>
                                <td>2023-12-15</td>
                                <td>Probability & Statistics</td>
                                <td className="fw-bold">A-</td>
                                <td>90/100</td>
                            </tr>

                            <tr>
                                <td>2023-05-20</td>
                                <td>Discrete Mathematics</td>
                                <td className="fw-bold">B</td>
                                <td>80/100</td>
                            </tr>

                            <tr>
                                <td>2023-05-22</td>
                                <td>Data Structures</td>
                                <td className="fw-bold">A</td>
                                <td>95/100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </StudentDashboard>
    );
}
