import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoG from "../../assets/images/logo-g.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faUser,
  faFolder,
  faLightbulb,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  console.log();
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoG} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          icon={faBars}
          color="#ff2010"
          size="3x"
          className="hamburger-icon"
          onClick={() => {
            setShowNav(false);
          }}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Garuizbido"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabriel-ruiz-60557a226/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#ff2010"
        size="3x"
        className="hamburger-icon"
        onClick={() => {
          setShowNav(true);
        }}
      />
    </div>
  );
};

export default Sidebar;
