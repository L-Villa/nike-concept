import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <section className="home-landing">
        <div className="black-side">
          <div className="shoe-wrapper">
            <div className="shoe-image"></div>
            <div className="circle-backdrop"></div>
          </div>
          <div className="home-landing-social-links">
            <div className="social-link">FB</div>
            <div className="social-link">TWI</div>
            <div className="social-link">INS</div>
          </div>
        </div>
        <div className="white-side">
          <div className="white-side-content-container">
            <div className="white-side-text-container">
              <p>Running Shoe</p>
              <h2>Pegasus Turbo 2</h2>
              <p>
                Engineered for comfort when running to your next destination.
                The Pegasus Turbo 2 delivers a powerful combination of support,
                impact cushioning, and instant responsiveness.
              </p>
            </div>
            <button>Shop Now</button>
          </div>
          <div className="backdrop-text">Pegasus Turbo 2</div>
        </div>
      </section>
    </div>
  );
}
