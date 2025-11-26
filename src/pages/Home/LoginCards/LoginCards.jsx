import { Link } from "react-router-dom";
import "./LoginCards.css";
import student from "../images/student-login.png";
import faculty from "../images/faculty-login.png";
import department from "../images/department-login.png";

export default function LoginCards() {
  return (
    <section className="py-5">
      <div className="container">

        {/* STUDENT LOGIN CARD */}
        <div className="login-card-wrapper mb-5">
          <div className="login-card">
            
            {/* TOP DECORATION BARS */}
            <div className="top-bars">
              <span></span>
              <span></span>
            </div>

            <div className="row align-items-center">
              
              {/* LEFT CONTENT */}
              <div className="col-md-7">
                <div className="login-content">
                  <h3 className="login-title">Student's Login</h3>
                  <p className="login-text">Avoid the password, electronic <br />and other credentials, with code or code.</p>
                  
                  <div className="login-buttons">
                    <Link to="/login" className="btn-orange me-3">
                      See How it Works
                    </Link>
                    <Link to="/login" className="btn-outline-orange">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-md-5">
                <div className="login-image">
                  <img src={student} alt="Student Login" className="login-img" />
                </div>
              </div>

            </div>

            {/* BOTTOM DECORATION BARS */}
            <div className="bottom-bars">
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

        {/* FACULTY LOGIN CARD */}
        <div className="login-card-wrapper mb-5">
          <div className="login-card">
            
            {/* TOP DECORATION BARS */}
            <div className="top-bars">
              <span></span>
              <span></span>
            </div>

            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="login-image">
                  <img src={faculty} alt="Faculty Login" className="login-img" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="login-content">
                  <h3 className="login-title">Faculty Login</h3>
                  <p className="login-text">I've logged 100 articles on my database and found it all about me in a timely response.</p>
                  
                  <div className="login-buttons">
                    <Link to="/login" className="btn-orange me-3">
                      See How it Works
                    </Link>
                    <Link to="/login" className="btn-outline-orange">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>              

            </div>

            {/* BOTTOM DECORATION BARS */}
            <div className="bottom-bars">
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

        {/* DEPARTMENT LOGIN CARD */}
        <div className="login-card-wrapper mb-5">
          <div className="login-card">
            
            {/* TOP DECORATION BARS */}
            <div className="top-bars">
              <span></span>
              <span></span>
            </div>

            <div className="row align-items-center">
              
              {/* LEFT CONTENT */}
              <div className="col-md-7">
                <div className="login-content">
                  <h3 className="login-title">Department Login</h3>
                  <p className="login-text">I'm used for your online mail system. I'm not able to get you available for such programs since I started working.</p>
                  
                  <div className="login-buttons">
                    <Link to="/login" className="btn-orange me-3">
                      See How it Works
                    </Link>
                    <Link to="/login" className="btn-outline-orange">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-md-5">
                <div className="login-image">
                  <img src={department} alt="Department Login" className="login-img" />
                </div>
              </div>

            </div>

            {/* BOTTOM DECORATION BARS */}
            <div className="bottom-bars">
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}