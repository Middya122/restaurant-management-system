import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <img src="/notFound.svg" alt="Page not found" />

        <h1>LOOKS LIKE YOU'RE LOST</h1>

        <p>We can't seem to find the page you're looking for.</p>

        <Link to="/">
          <span>
            Go Back Home
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;