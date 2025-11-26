import StudentDashboard from "../StudentDashboard";
import "./StudentProfile.css";

export default function StudentProfile() {
    return (
        <StudentDashboard>
            <div className="profile-student">
                {/* Page Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Student Profile</h2>
                    <button className="btn btn-warning text-white px-4">Edit Profile</button>
                </div>

                {/* PROFILE HEADER SECTION */}
                <div className="d-flex align-items-center gap-3 mb-4 profile-header-box">

                    <img
                        src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
                        className="profile-pic"
                        alt="profile"
                    />

                    <div>
                        <h4 className="fw-bold mb-1">theK</h4>
                        <p className="text-muted mb-0">Student ID: 123456789</p>
                        <p className="text-primary mb-0">
                            Academic Program: Bachelor of Science in Computer Science
                        </p>
                    </div>

                </div>

                {/* PERSONAL INFORMATION */}
                <h5 className="section-title mt-4">Personal Information</h5>
                <hr />

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <p className="label">Full Name</p>
                        <p className="value">Sophia Clark</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Student ID</p>
                        <p className="value">123456789</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Date of Birth</p>
                        <p className="value">May 15, 2003</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Gender</p>
                        <p className="value">Female</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Nationality</p>
                        <p className="value">Indian</p>
                    </div>
                </div>

                {/* CONTACT INFORMATION */}
                <h5 className="section-title mt-4">Contact Information</h5>
                <hr />

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <p className="label">Email Address</p>
                        <p className="value">sophiaclark@example.edu</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Phone Number</p>
                        <p className="value">(555) 123-4567</p>
                    </div>

                    <div className="col-md-12 mb-3">
                        <p className="label">Address</p>
                        <p className="value">123 University Ave, Cityville, State, 12345</p>
                    </div>
                </div>

                {/* ACADEMIC INFORMATION */}
                <h5 className="section-title mt-4">Academic Information</h5>
                <hr />

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <p className="label">Program</p>
                        <p className="value">Bachelor of Science</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Major</p>
                        <p className="value">Computer Science</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">Year of Study</p>
                        <p className="value">2023</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="label">GPA</p>
                        <p className="value">8.9</p>
                    </div>
                </div>
            </div>
        </StudentDashboard>
    );
}
