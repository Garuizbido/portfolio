import "./index.scss";
import { useState, useEffect } from "react";
import TagCloud from "./TagCloud";
import Loader from "react-loaders";

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
        <p>
          Software engineer with an array of tools at my disposal. I consider
          myself
          <br /> a fullstack developer as I enjoy both front and back ends.
        </p>
        <p>test3</p>
        <p>
          While I am proud of my tools, I always seek out to learn more if
          possible, <br />
          as well as utilize my knowledge in any way I can.
        </p>
      </div>
      <div className="tag-cloud-container">
        <TagCloud />
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Skills;
