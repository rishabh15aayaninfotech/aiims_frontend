import "./Footer.css";
import logo from "./images/logo.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container container">

        {/* TOP ROW */}
        <div className="footer-top">

          {/* LEFT: LOGO + HINDI TITLE */}
          <div className="footer-left">
            <img src={logo} alt="AIIMS Logo" className="footer-logo" />

            <div>
              <h4 className="footer-title-hindi">
                अखिल भारतीय आयुर्विज्ञान <br />
                संस्थान, गोरखपुर
              </h4>
            </div>
          </div>

          {/* MIDDLE: CONTACT INFO */}
          <div className="footer-middle">
            <h6 className="contact-title">Contact Us</h6>

            <p className="contact-line">admin@aiimsgorakhpur.org</p>
            <p className="contact-line">
              Kunraghat, Gorakhpur, Uttar Pradesh 273008
            </p>
            <p className="contact-line">+91 1234567890</p>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="footer-right">
            <div className="footer-icons">

              <Link to="#">
                <FaLinkedinIn />
              </Link>

              <Link to="#">
                <FaFacebookF />
              </Link>

              <Link to="#">
                <FaInstagram />
              </Link>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="footer-divider" />

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p className="footer-p">© 2025 www.aiimsgorakhpur.edu.in All Right Reserved</p>

          <div className="footer-bottom-links">
            <Link to="/terms">Terms Of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
