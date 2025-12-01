import { Link } from "react-router-dom";
import "./EventSection.css";
import img from "../images/video.png";

export default function EventSection() {
  return (
    <section className="event-section py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <div className="event-image">
              <img src={img}
                className="event-img" alt="events" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-content">
              <div className="top-bars">
                <span></span>
                <span></span>
              </div>
              <h3 className="event-title">Check it out event activities hosted by AIIMS</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec nulla ipsum.
              </p>
              <button className="btn-orange">
                Explore Events
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}