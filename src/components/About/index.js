import "./index.scss";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["a", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>
        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} size="4x" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} size="4x" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} size="4x" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} size="4x" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faC} size="4x" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faHtml5} size="4x" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;
