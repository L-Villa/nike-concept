import React from "react";
import "./Header.css";
import search from "../images/icons/search.png";
import shoppingCart from "../images/icons/shoppingCart.png";

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
            <img className="nav-icon" src={shoppingCart} alt="" />
            <img className="nav-icon" src={search} alt="" />
            <div className="svg-container">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <rect width="10" height="10" />
                <rect y="20" width="10" height="10" />
                <rect x="20" width="10" height="10" />
                <rect y="40" width="10" height="10" />
                <rect x="20" y="20" width="10" height="10" />
                <rect x="20" y="40" width="10" height="10" />
                <rect x="40" width="10" height="10" />
                <rect x="40" y="20" width="10" height="10" />
                <rect x="40" y="40" width="10" height="10" />
              </svg>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
