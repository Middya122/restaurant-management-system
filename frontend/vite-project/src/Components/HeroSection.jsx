import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="hero-section" id="heroSection">
      <Navbar />

      <div className="container">
        {/* LEFT SIDE */}
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>

          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="Delicious food" />
            </div>

            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>

                <h1 className="title dishes_title">
                  Dishes
                </h1>

                <img
                  src="/threelines.svg"
                  alt="Decorative lines"
                />
              </div>

              <img
                src="/logo.svg"
                alt="MIDDYA logo"
                className="logo"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="Food dishes" />
          </div>

          <h1 className="title dishes_title">
            Dishes
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;