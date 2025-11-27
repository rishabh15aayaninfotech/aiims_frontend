import "./Loader.css";
import logo from "./images/logo.png";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} className="loader-logo" alt="logo" />
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>
      <div className="ring ring4"></div>
    </div>
  );
}
