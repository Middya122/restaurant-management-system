import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav>
      <div className="logo">MIDDYA</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <Link
              to={element.link}
              key={element.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setShow(false)}
            >
              {element.title}
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="menu"
        spy={true}
        smooth={true}
        duration={500}
        className="menuBtn"
      >
        OUR MENU
      </Link>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;