import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The Only thing we're serious about is food.</p>
          </div>

          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            deleniti ullam eaque, ut necessitatibus a architecto quasi
            nesciunt repellat non aliquam, magni maxime neque alias
            perferendis! At, sint. Harum consectetur asperiores aliquid
            suscipit inventore nemo odio! Itaque tempore delectus culpa,
            illum iste repellat quisquam ut consequuntur adipisci,
            voluptatibus modi tenetur.
          </p>

          <Link to="/">
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>

        <div className="banner">
          <img src="/about.png" alt="About us" />
        </div>
      </div>
    </section>
  );
};

export default About;