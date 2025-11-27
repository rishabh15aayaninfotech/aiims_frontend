import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import logo from "./images/logo.png";
import bg from "./images/bg-contact.jpg";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptcha = (value) => {
    console.log("Captcha Value:", value);
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setCaptchaVerified(false);
  };

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${bg})` }}>

      {/* Overlay */}
      <div className="contact-overlay"></div>

      {/* CENTER CARD */}
      <div className="contact-page-card">

        {/* HEADER SECTION */}
        <div className="contact-header">
          <div>
            <h4 className="contact-welcome">Get In Touch</h4>
            <h2 className="contact-page-title">Contact Us</h2>

            <p className="contact-subtitle">
              अखिल भारतीय आयुर्विज्ञान <br />
              संस्थान, गोरखपुर
            </p>
          </div>

          <img src={logo} alt="logo" className="contact-logo" />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          {/* EMAIL */}
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          {/* SUBJECT */}
          <label className="form-label">Subject</label>
          <select 
            name="subject"
            className="form-control form-select mb-3"
            value={formData.subject}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="admission">Admission Query</option>
            <option value="academic">Academic Issue</option>
            <option value="technical">Technical Support</option>
            <option value="administrative">Administrative Help</option>
            <option value="other">Other</option>
          </select>

          {/* MESSAGE */}
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control mb-3"
            placeholder="Describe your issue or query in detail..."
            rows="3"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          {/* RECAPTCHA */}
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LfGt_grAAAAAKP2MrWG_PwVCP7t7bYjbZ78qeNn"
              onChange={handleCaptcha}
            />
          </div>

          {/* BUTTON */}
          <button 
            type="submit" 
            className="contact-btn mt-3"
            disabled={!captchaVerified}
          >
            Send Message
          </button>


          {/* BACK TO LOGIN */}
          <p className="login-redirect mt-3">
            Need to login?{" "}
            <Link to="/login" className="login-link">Go to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}