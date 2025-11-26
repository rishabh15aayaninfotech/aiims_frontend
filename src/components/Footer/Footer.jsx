import "./Footer.css";
import logo from "./images/logo.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container py-4">

        {/* TOP SECTION */}
        <div className="row align-items-start">

          {/* LEFT — LOGO + TITLE */}
          <div className="col-md-4 d-flex align-items-start">
            <img src={logo} alt="AIIMS Logo" className="footer-logo me-3" />

            <div>
              <h4 className="footer-title-hindi">
                अखिल भारतीय आयुर्विज्ञान संस्थान, गोरखपुर
              </h4>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="col-md-6 text-center  mt-4 mt-md-0">
            <h6 className="footer-contact-title">Contact Us</h6>
            <p className="footer-contact-text">admin@aiimsgorakhpur.edu.in</p>
            <p className="footer-contact-text">
              Kunraghat, Gorakhpur, Uttar Pradesh 273008
            </p>
            <p className="footer-contact-text">+91 1234567890</p>

            {/* SOCIAL ICONS */}
            
          </div>

          <div className="col-md-2 text-md-end">
            <div className="footer-icons mt-2">

              <Link to="/linkedin">
                <FaLinkedinIn />
              </Link>

              <Link to="/facebook">
                <FaFacebookF />
              </Link>

              <Link to="/instagram">
                <FaInstagram />
              </Link>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="footer-divider" />

        {/* BOTTOM COPYRIGHT TEXT */}
        <div className="d-flex justify-content-between flex-wrap footer-bottom-text">
          <p>© 2025 www.aiimsgorakhpur.edu.in | All Rights Reserved</p>

          <div className="d-flex gap-4">
            <Link className="footer-link" to="/terms">Terms Of Service</Link>
            <Link className="footer-link" to="/privacy">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
