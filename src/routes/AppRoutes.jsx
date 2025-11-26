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
// import StudentLogin from "../pages/StudentLogin";
// import FacultyLogin from "../pages/FacultyLogin";
// import DepartmentLogin from "../pages/DepartmentLogin";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Login/Register */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Student Module */}
      <Route path="/student/dashboard" element={<Navigate to="/student/dashboard/home" replace />} />
      <Route path="/student/dashboard/home" element={<StudentDashboardHome />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/academics" element={<StudentAcademics />} />
      <Route path="/student/exam-results" element={<StudentExamResult />} />


      {/* <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/faculty-login" element={<FacultyLogin />} />
      <Route path="/department-login" element={<DepartmentLogin />} /> */}
    </Routes>
  );
}
