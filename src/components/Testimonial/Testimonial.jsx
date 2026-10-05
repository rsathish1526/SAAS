import React from "react";
import "./Testimonial.css";

import logo1 from "../../assets/images/Logo (1).png";
import logo2 from "../../assets/images/Logo (2).png";
import logo3 from "../../assets/images/Logo (3).png";
import logo4 from "../../assets/images/Logo (4).png";
import logo5 from "../../assets/images/Logo (5).png";
import logo6 from "../../assets/images/Logo (6).png";
import logo7 from "../../assets/images/Logo (7).png";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-inner">

        <div className="testimonial-label">
          TESTIMONIAL
        </div>

        <h2 className="testimonial-quote">
          "TrailHive has completely changed the way I explore
          the outdoors. The personalized trail
          recommendations and virtual challenges have kept
          me motivated and engaged with my adventures."
        </h2>

        <p className="testimonial-author">
          - John R.
        </p>

        <div className="trusted">
          Trusted by teams at over 1,000 of the world's leading organizations
        </div>

        <div className="logos">
          <img src={logo1} alt="Dell" />
          <img src={logo2} alt="Zendesk" />
          <img src={logo3} alt="Rakuten" />
          <img src={logo4} alt="Pacific Funds" />
          <img src={logo5} alt="NCR" />
          <img src={logo6} alt="Lattice" />
          <img src={logo7} alt="TED" />
        </div>

      </div>
    </section>
  );
}