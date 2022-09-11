import "./index.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../../assets/images/logo-g.png";
import LogoAnimation from "./Logo";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const greetingArray = [
    "h",
    "e",
    "l",
    "l",
    "o",
    " ",
    "t",
    "r",
    "a",
    "v",
    "e",
    "l",
    "l",
    "e",
    "r",
  ];

  const nameArray = ["a", "b", "r", "i", "e", "l"];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "e",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4500);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={greetingArray}
            idx={12}
          />
          <br />
          <span className={`${letterClass} _27`}>I</span>
          <span className={`${letterClass} _28`}>'m</span>
          <img src={Logo} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={29}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={35}
          />
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <LogoAnimation />
    </div>
  );
};

export default Home;
