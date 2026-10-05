import React from "react";
import "./Explore.css";
import exploreImage from "../../assets/images/explore.jpg";

export default function Explore() {
  return (
    <section className="explore">
      <div className="explore-content">
        <div className="explore-text">
          <span>EXPLORE</span>

          <h2>
            Find new trails to explore and
            <br />
            unforgettable adventures
          </h2>

          <p>
            Discover amazing outdoor places and find your next adventure
            with TrailHive.
          </p>

          <button>Explore trails →</button>
        </div>

        <div className="explore-image">
          <img src={exploreImage} alt="Explore trails" />
        </div>
      </div>
    </section>
  );
}