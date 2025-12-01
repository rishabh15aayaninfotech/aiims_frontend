import { Link } from "react-router-dom";
import "./Register.css";
import logo from "./images/logo.png";
import bg from "./images/bg-login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptcha = (value) => {
    if (value) setCaptchaVerified(true);
  };

  return (
    <div className="register-page" style={{ backgroundImage: `url(${bg})` }}>

      <div className="register-overlay"></div>

      <div className="register-card">

        {/* HEADER */}
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

        {/* FORM */}
        <form>
          <div className="row align-items-center">
            <div className="col-md-6">{/* ROLE */}
              <label className="form-label">Role</label>
              <select className="form-control form-select mb-3">
                <option>Select Role</option>
                <option>Student</option>
                <option>Faculty</option>
                <option>Department</option>
              </select>
            </div>
            <div className="col-md-6">
              {/* FULL NAME */}
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your full name"
              />
            </div>
            <div className="col-md-6">
              {/* MOBILE NUMBER */}
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control mb-3 mobile-input"
                placeholder="Enter your Mobile Number"
              />

              <div className="row mb-3">
                {/* SEND OTP BUTTON */}
                <div className="col-6">
                  <button type="button" className="otp-send-btn w-100">Send OTP</button>
                </div>

                {/* OTP INPUT */}
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control otp-input"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Email */}
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control mb-3 mobile-input"
                placeholder="Enter your Email"
              />

              <div className="row mb-3">
                {/* SEND OTP BUTTON */}
                <div className="col-6">
                  <button type="button" className="otp-send-btn w-100">Send OTP</button>
                </div>

                {/* OTP INPUT */}
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control otp-input"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>

            </div>
            <div className="col-md-6">{/* PASSWORD */}
              <label className="form-label">Password</label>
              <div className="password-wrapper mb-3">
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
            </div>
            <div className="col-md-6">
              {/* CONFIRM PASSWORD */}
              <label className="form-label">Confirm Password</label>
              <div className="password-wrapper mb-3">
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
            </div>
            <div className="col-md-6 mt-3">
              <div className="recaptcha-box">
                <ReCAPTCHA
                  sitekey="6LfGt_grAAAAAKP2MrWG_PwVCP7t7bYjbZ78qeNn"
                  onChange={handleCaptcha}
                />
              </div>
            </div>
            <div className="col-md-6 mt-3">
              {/* SUBMIT */}

              <button type="submit" className="register-page-btn">
                Submit
              </button>
              <p className="register-bottom-text mt-2">
                Already have an account?{" "}
                <Link to="/login" className="login-link">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
}
