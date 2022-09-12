import "./index.scss";
import { useState, useEffect } from "react";

import AnimatedLetters from "../AnimatedLetters";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["m", "y", " ", "s", "k", "i", "l", "l", "s"]}
            idx={15}
          />
        </h1>
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
      </div>
    </div>
  );
};

export default Skills;
