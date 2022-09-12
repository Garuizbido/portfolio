import "./index.scss";
import { useState, useEffect } from "react";

import AnimatedLetters from "../AnimatedLetters";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["m", "y", " ", "p", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
      </div>
    </div>
  );
};

export default Projects;
