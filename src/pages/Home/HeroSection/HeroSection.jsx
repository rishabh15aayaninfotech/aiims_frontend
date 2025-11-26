import "./HeroSection.css";
import heroImg from "../images/hero.png";
import { FaUserGraduate, FaBook, FaUsers } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        
        {/* MAIN HERO CARD */}
        <div className="hero-card">
          
          {/* LEFT - IMAGE */}
          <div className="hero-left">
            <img src={heroImg} alt="Students celebrating" className="hero-img" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="hero-right">
            <h1 className="hero-title">
              Student<br />
              Management<br />
              System
            </h1>
            <a href="/student-portal" className="hero-btn">
              Student Portal
            </a>
          </div>
        </div>

        {/* FEATURE BOXES */}
        <div className="features-row">
          <div className="feature-box pink-box">
            <FaUserGraduate className="feature-icon" />
            <span className="feature-text">Personalize education with Educate</span>
          </div>

          <div className="feature-box blue-box">
            <FaBook className="feature-icon" />
            <span className="feature-text">Explore Educate products & solutions</span>
          </div>

          <div className="feature-box yellow-box">
            <FaUsers className="feature-icon" />
            <span className="feature-text">Sign-in support for students & families</span>
          </div>
        </div>

      </div>
    </section>
  );
}