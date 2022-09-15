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
import C from "../../assets/images/c.png";
import Python from "../../assets/images/python.png";
import Java from "../../assets/images/java.png";
import Javascript from "../../assets/images/js.png";
import Swift from "../../assets/images/swift.png";

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
            consider myslef an ambitious, prolific and goal-oriented person.
            Nevertheless, I also value the journey more than the destination, as
            I enjoy the learning process thoroughly.
          </p>
          <p>
            {" "}
            I am still a novice, however I am quitely confident in my skills and
            creativity,as well as my problem solving capabilities. While I can
            appreciate the art, I also enjoy the technical aspect. As an
            engineer, I always strive to better myself in both work and life.
          </p>
          <p>
            I thoroughly enjoy takling new problems head on and venturing on new
            endeavors, as well as learning from these experiences.
          </p>
        </div>
        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <img src={Java} alt=""></img>
            </div>
            <div className="face2">
              <img src={Javascript} alt=""></img>
            </div>
            <div className="face3">
              <img src={Swift} alt=""></img>
            </div>
            <div className="face4">
              <img src={Python} alt=""></img>
            </div>
            <div className="face5">
              <img src={Cpp} alt=""></img>
            </div>
            <div className="face6">
              <img src={C} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;
