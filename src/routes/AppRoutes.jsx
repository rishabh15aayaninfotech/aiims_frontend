import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import StudentDashboard from "../pages/StudentModule/StudentDashboard";
import StudentProfile from "../pages/StudentModule/StudentProfile/StudentProfile";
import StudentAttendance from "../pages/StudentModule/StudentAttendance/StudentAttendance";
import StudentAcademics from "../pages/StudentModule/StudentAcademics/StudentAcademics";
import StudentExamResult from "../pages/StudentModule/StudentExamResult/StudentExamResult";
import StudentDashboardHome from "../pages/StudentModule/StudentDashboardHome/StudentDashboardHome";
import StudentLeave from "../pages/StudentModule/StudentLeave/StudentLeave";
import StudentFees from "../pages/StudentModule/StudentFees/StudentFees";
import StudentCertificate from "../pages/StudentModule/StudentCertificate/StudentCertificate";
import StudentCommunication from "../pages/StudentModule/StudentCommunication/StudentCommunication";
import StudentSettings from "../pages/StudentModule/StudentSettings/StudentSettings";
import FacultyDashboardHome from "../pages/FacultyModule/FacultyDashboardHome/FacultyDashboardHome";
import FacultyDashboard from "../pages/FacultyModule/FacultyDashboard";
import Contact from "../pages/Contact/Contact";
import FacultyProfile from "../pages/FacultyModule/FacultyProfile/FacultyProfile";
import FacultyAttendance from "../pages/FacultyModule/FacultyAttendance/FacultyAttendance";
import FacultyClassManagement from "../pages/FacultyModule/FacultyClassManagement/FacultyClassManagement";
import FacultyExamManagement from "../pages/FacultyModule/FacultyExamManagement/FacultyExamManagement";
import FacultyLeave from "../pages/FacultyModule/FacultyLeaveManagement/FacultyLeaveManagement";
import FacultyEvaluation from "../pages/FacultyModule/FacultyEvaluation/FacultyEvaluation";
import Terms from "../pages/Terms/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import FacultyCommunication from "../pages/FacultyModule/FacultyCommunication/FacultyCommunication";
import FacultyReports from "../pages/FacultyModule/FacultyReports/FacultyReports";
import FacultySecurity from "../pages/FacultyModule/FacultySecurity/FacultySecurity";
import AdminDashboard from "../pages/AdminModule/AdminDashboard";
import AdminDashboardHome from "../pages/AdminModule/AdminDashboardHome/AdminDashboardHome";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Login/Register */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Contact Page */}
      <Route path="/contact" element={<Contact />} />

      {/* Student Module */}
      <Route path="/student/dashboard" element={<Navigate to="/student/dashboard/home" replace />} />
      <Route path="/student/dashboard/home" element={<StudentDashboardHome />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/academics" element={<StudentAcademics />} />
      <Route path="/student/exam-results" element={<StudentExamResult />} />
      <Route path="/student/leaves" element={<StudentLeave />} />
      <Route path="/student/fees" element={<StudentFees />} />
      <Route path="/student/certificates" element={<StudentCertificate />} />
      <Route path="/student/communication" element={<StudentCommunication />} />
      <Route path="/student/settings" element={<StudentSettings />} />

      {/* Faculty Module */}
      <Route path="/faculty/dashboard" element={<Navigate to="/faculty/dashboard/home" replace />} />
      <Route path="/faculty/dashboard/home" element={<FacultyDashboardHome />} />
      <Route path="/faculty/profile" element={<FacultyProfile />} />
      <Route path="/faculty/attendance" element={<FacultyAttendance />} />
      <Route path="/faculty/class" element={<FacultyClassManagement />} />
      <Route path="/faculty/exam" element={<FacultyExamManagement />} />
      <Route path="/faculty/evaluation" element={<FacultyEvaluation />} />
      <Route path="/faculty/leaves" element={<FacultyLeave />} />
      <Route path="/faculty/communication" element={<FacultyCommunication />} />
      <Route path="/faculty/reports" element={<FacultyReports />} />
      <Route path="/faculty/security" element={<FacultySecurity />} />

      {/* Admin Module */}
      <Route path="/admin/dashboard" element={<Navigate to="/admin/dashboard/home" replace />} />
      <Route path="/admin/dashboard/home" element={<AdminDashboardHome />} />

      {/* Privacy Policy & Terms of Service */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

    </Routes>
  );
}
