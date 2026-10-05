import React from "react";
import './Features.css';
import f1 from '../../assets/images/feature-1.jpg';
import f2 from '../../assets/images/feature-2.jpg';
import f3 from '../../assets/images/feature-3.jpg';

const cards = [
  { image: f1, title: 'ACCESS NATURE', text: 'Discover beautiful trails and outdoor locations around you.' },
  { image: f2, title: 'STAY ACTIVE', text: 'Keep yourself motivated with outdoor activities and challenges.' },
  { image: f3, title: 'CONNECT OUTDOORS', text: 'Meet other outdoor lovers and enjoy adventures together.' },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-inner">
        <div className="features-intro reveal">
          <span className="eyebrow">FEATURES</span>
          <h2>Stay Active<br />and<br />Healthy</h2>
          <a className="feature-link" href="#explore">Learn more →</a>
        </div>

        <div className="feature-grid">
          {cards.map((card) => (
            <article className="feature-card reveal" key={card.title}>
              <img src={card.image} alt={card.title.toLowerCase()} />
              <span>{card.title}</span>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
