import { useState } from "react";
import "./Login.css";
import logo from "./images/logo.png";
import bg from "./images/bg-login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>

      {/* Overlay */}
      <div className="login-overlay"></div>

      {/* CENTER CARD */}
      <div className="login-page-card">

        {/* HEADER SECTION */}
        <div className="login-header">
          <div>
            <h4 className="login-welcome">Welcome !</h4>
            <h2 className="login-page-title">Log in to</h2>

            <p className="login-subtitle">
              अखिल भारतीय आयुर्विज्ञान <br />
              संस्थान, गोरखपुर
            </p>
          </div>

          <img src={logo} alt="logo" className="login-logo" />
        </div>

        {/* FORM */}
        <form>

          {/* ROLE */}
          <label className="form-label">Role</label>
          <select className="form-control form-select mb-3">
            <option>Select Role</option>
            <option>Student</option>
            <option>Faculty</option>
            <option>Department</option>
          </select>

          {/* USERNAME */}
          <label className="form-label">User name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your User name"
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

          {/* OPTIONS ROW */}
          <div className="login-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span> I'm not a robot</span>
            </label>

            <a href="#" className="forgot-password">
              Forgot Password ?
            </a>
          </div>

          {/* BUTTON */}
          <button type="submit" className="login-btn mt-3">
            Submit
          </button>

          {/* CONTACT */}
          <p className="contact-info mt-3">
            Having an issue while login?{" "}
            <a href="#">Contact Us</a>
          </p>
        </form>
      </div>
    </div>
  );
}
