import React, { useRef, useState } from "react";
import "./navbar.css";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { HiMenu } from "react-icons/hi";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className="nav-bar">
      <div className="some-wrapper">
        <div className="web-nav">
          <div className="nav-links">
            <Link smooth={true} duration={800} to="About">
              About Us
            </Link>
            <Link smooth={true} duration={800} to="FAQ">
              FAQ
            </Link>
            <Link smooth={true} duration={800} to="RoadMap">
              RoadMap
            </Link>
            <Link smooth={true} duration={800} to="Team">
              Team
            </Link>
          </div>
          <div className="external-links">
            <a className="twitter" href="/">
              <FaTwitter />
            </a>
          </div>
        </div>
        <Button className="metamsk-btn" label="Connect" />
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <button onClick={toggleAccordion} className="menu-slide-btn">
            Menu
            <HiMenu
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </button>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            About Us
          </Link>
          <Link onClick={toggleAccordion} smooth={true} duration={800} to="FAQ">
            FAQ
          </Link>
          <Link
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            RoadMap
          </Link>
          <Link
            // className="accordion__text"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            Team
          </Link>

          <div className="external-links">
            <a className="twitter" href="https://twitter.com/poniezunion">
              <FaTwitter />
            </a>
            {/* <a className="discord" href="/">
              <FaDiscord />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
