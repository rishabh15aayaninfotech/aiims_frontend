import FacultyDashboard from "../FacultyDashboard";
import "./FacultyProfile.css";

export default function FacultyProfile() {
    return (
        <FacultyDashboard>
            <div className="faculty-profile-container">

                {/* Top Header */}
                <div className="top-header">
                    <h2 className="page-title">Faculty Profile</h2>
                    <button className="edit-btn">Edit Profile</button>
                </div>

                {/* Profile Intro Card */}
                <div className="profile-card">
                    <img
                        src="https://i.ibb.co/4f2Bq0Q/profile-placeholder.png"
                        className="profile-image"
                        alt="Faculty"
                    />

                    <div>
                        <h4 className="faculty-name">Dr. Anya Sharma</h4>
                        <p className="faculty-role">Professor of Computer Science</p>
                        <p className="faculty-id">Faculty ID: 12345</p>
                    </div>
                </div>

                {/* PERSONAL INFORMATION */}
                <h5 className="section-heading">Personal Information</h5>
                <div className="info-box">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="label">Full Name</p>
                            <p className="value">Sophia Clark</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Faculty ID</p>
                            <p className="value">12345</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Date of Birth</p>
                            <p className="value">June 15, 1997</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Gender</p>
                            <p className="value">Female</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Nationality</p>
                            <p className="value">Indian</p>
                        </div>
                    </div>
                </div>

                {/* CONTACT INFORMATION */}
                <h5 className="section-heading">Contact Information</h5>
                <div className="info-box">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="label">Email</p>
                            <p className="value">anya.sharma@university.edu</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Phone Number</p>
                            <p className="value">+1-555-123-4567</p>
                        </div>

                        <div className="col-md-12">
                            <p className="label">Office</p>
                            <p className="value">Room 302, Science Building</p>
                        </div>
                    </div>
                </div>

                {/* ACADEMIC QUALIFICATIONS */}
                <h5 className="section-heading">Academic Qualifications</h5>
                <div className="info-box">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="label">Highest Degree</p>
                            <p className="value">Ph.D. in Computer Science</p>
                        </div>

                        <div className="col-md-6">
                            <p className="label">Institution</p>
                            <p className="value">Institute of Advanced Studies</p>
                        </div>
                    </div>
                </div>

                {/* TEACHING SPECIALIZATIONS */}
                <h5 className="section-heading">Teaching Specializations</h5>
                <div className="info-box">
                    <p className="label">Specializations</p>
                    <p className="value">
                        Artificial Intelligence<br />
                        Machine Learning
                    </p>
                </div>

            </div>
        </FacultyDashboard>
    );
}
