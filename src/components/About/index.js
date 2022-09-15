import "./index.scss";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJsSquare,
  faPython,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import Cpp from "../../assets/images/c-.png";
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
          <p>
            I'm an enthusiastic developer that enjoys the art of coding. I
            consider myslef
            <br /> an ambitious, prolific and goal-oriented person.
            Nevertheless, I also value the
            <br /> journey more than the destination, as I enjoy the learning
            process thoroughly.
          </p>
          <p>
            {" "}
            I am still a novice, however I am quitely confident in my skills and
            creativity,
            <br /> as well as my problem solving capabilities. While I can
            appreciate the art, I <br />
            also enjoy the technical aspect. As an engineer, I always strive to
            better <br /> myself in both work and life.
          </p>
          <p>
            I thoroughly enjoy takling new problems head on, as well as learning
            from <br />
            these experiences.
          </p>
        </div>
        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwift} size="4x" />
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
              <img src={Cpp} alt="" width="400"></img>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;
