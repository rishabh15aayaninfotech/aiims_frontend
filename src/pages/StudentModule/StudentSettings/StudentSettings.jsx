import StudentDashboard from "../StudentDashboard";
import "./StudentSettings.css";

export default function StudentSettings() {
    return (
        <StudentDashboard>
            <div className="student-exam">
                {/* PAGE TITLE */}
                <h2 className="fw-bold mb-4">Settings</h2>
            </div>
        </StudentDashboard>
    );
}
