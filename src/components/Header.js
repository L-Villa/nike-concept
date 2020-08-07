import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <section className="header-content">
        <div className="header-logo"></div>
        <nav>
          <div className="nav-links nav-links-left">
            <div className="nav-link">Men</div>
            <div className="nav-link">Women</div>
            <div className="nav-link">Boys</div>
            <div className="nav-link">Girls</div>
          </div>
          <div className="nav-links nav-links-right">
            <div className="nav-link">Cart</div>
            <div className="nav-link">Search</div>
            <div className="nav-link">Menu</div>
          </div>
        </nav>
      </section>
    </div>
  );
}
