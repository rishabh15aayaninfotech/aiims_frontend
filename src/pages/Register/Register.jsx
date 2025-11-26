import { Link } from "react-router-dom";
import "./Register.css";
import logo from "./images/logo.png";
import bg from "./images/bg-login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  return (
    <div className="register-page" style={{ backgroundImage: `url(${bg})` }}>
      
      <div className="register-overlay"></div>

      {/* Main Card */}
      <div className="register-card">

        {/* Header */}
        <div className="register-header">
          <div>
            <h4 className="register-welcome">Welcome !</h4>
            <h2 className="register-title">Register to</h2>
            <p className="register-subtitle">
              अखिल भारतीय आयुर्विज्ञान <br />
              संस्थान, गोरखपुर
            </p>
          </div>

          <img src={logo} className="register-logo" alt="logo" />
        </div>

        {/* Form */}
        <form>

          {/* ROLE */}
          <label className="form-label">Role</label>
          <select className="form-control form-select mb-3">
            <option>Select Role</option>
            <option>Student</option>
            <option>Faculty</option>
            <option>Department</option>
          </select>

          {/* FULL NAME */}
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your full name"
          />

          {/* MOBILE / EMAIL */}
          <label className="form-label">Mobile Number or Email</label>
          <div className="otp-wrapper">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Mobile Number or Email"
            />

            <button type="button" className="otp-btn">Send OTP</button>
          </div>

          {/* OTP */}
          <label className="form-label mt-3">OTP</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter OTP"
          />

          {/* PASSWORD */}
          <label className="form-label">Password</label>
          <div className="password-wrapper">
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Password"
            />
            <span
              className="pass-icon"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <label className="form-label mt-3">Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showCPass ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Confirm Password"
            />
            <span
              className="pass-icon"
              onClick={() => setShowCPass(!showCPass)}
            >
              {showCPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="register-page-btn mt-4">
            Submit
          </button>

          {/* Already have account */}
          <p className="register-bottom-text mt-3">
            Already have an account?{" "}
            <Link to="/login" className="login-link">Login</Link>
          </p>

        </form>
      </div>

    </div>
  );
}
