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
        </div>
        <div className="white-side"></div>
      </section>
    </div>
  );
}
