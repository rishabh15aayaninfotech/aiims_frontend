import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <header className="aiims-header py-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">

          {/* GRID ROW */}
          <div className="row w-100 align-items-center">

            {/* LEFT — LOGO */}
            <div className="col-4 col-lg-2 d-flex align-items-center">
              <Link to="/">
                <img src={logo} alt="AIIMS Logo" className="aiims-logo" />
              </Link>
            </div>

            {/* CENTER — TEXT (visible only on desktop) */}
            <div className="col-lg-8 d-none d-lg-flex flex-column text-center institute-text">
              <h2 className="title-hindi">
                अखिल भारतीय आयुर्विज्ञान संस्थान, गोरखपुर
              </h2>
              <h5 className="title-eng">
                ALL INDIA INSTITUTE OF MEDICAL SCIENCES, GORAKHPUR
              </h5>
              <p className="sub-text">
                (An autonomous organization under the Ministry of Health &
                Family Welfare, Govt. of India)
              </p>
            </div>

            {/* RIGHT — BUTTONS + TOGGLER */}
            <div className="col-8 col-lg-2 d-flex justify-content-end align-items-center">

              {/* MOBILE TOGGLER */}
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#aiimsNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* DESKTOP BUTTONS */}
              <div className="d-none d-lg-flex">
                <Link to="/login" className="login-btn-nav me-2">
                  Login
                </Link>
                <Link to="/register" className="register-btn">
                  Register
                </Link>
              </div>

            </div>
          </div>

          {/* MOBILE COLLAPSE MENU */}
          <div className="collapse navbar-collapse mt-3" id="aiimsNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mb-2">
                <Link to="/login" className="login-btn-nav w-100">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="register-btn w-100">Register</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
