import React, { useState } from "react";
import "./Home.css";
import shoeRight from "../images/shoeRight.png";
import shoeBack from "../images/shoeBack.png";
import shoeIso from "../images/shoeIso.png";

export default function Home() {
  const shoeImages = [shoeRight, shoeBack, shoeIso];
  const [currentImage, setCurrentImage] = useState(shoeImages[0]);
  const [count, setCount] = useState(0);

  const handleLeftArrow = () => {
    let countTracker;
    if (count >= 1) {
      countTracker = count - 1;
      setCount(countTracker);
      setCurrentImage(shoeImages[countTracker]);
    } else {
      countTracker = 0;
      setCount(countTracker);
    }
  };
  const handleRightArrow = () => {
    let countTracker;
    if (count <= 1) {
      countTracker = count + 1;
      setCount(countTracker);
      setCurrentImage(shoeImages[countTracker]);
    } else {
      countTracker = 2;
      setCount(countTracker);
    }
  };
  const handleImageClick = (index) => {
    setCount(index);
    setCurrentImage(shoeImages[index]);
  };

  return (
    <div>
      <section className="home-landing">
        <div className="black-side">
          <div className="shoe-wrapper">
            <img className="shoe-image" src={currentImage} alt="" />
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
            <div className="shoe-image-container">
              {shoeImages.map((image, index) => {
                return (
                  <img
                    onClick={() => handleImageClick(index)}
                    key={index}
                    className="shoe-images"
                    src={image}
                    alt="Shoe View"
                  />
                );
              })}
              <div onClick={handleLeftArrow}>&larr;</div>
              <div onClick={handleRightArrow}>&rarr;</div>
            </div>
          </div>
          <div className="backdrop-text">Pegasus Turbo 2</div>
        </div>
      </section>
    </div>
  );
}
