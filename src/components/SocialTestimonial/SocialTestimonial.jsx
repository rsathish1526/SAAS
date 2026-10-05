import React from "react";
import "./SocialTestimonial.css";
import bg from "../../assets/images/social-reference.jpg";

export default function SocialTestimonial() {
  return (
    <section className="social-test">
      <img
        className="social-bg"
        src={bg}
        alt="TrailHive social testimonial"
      />
    </section>
  );
}