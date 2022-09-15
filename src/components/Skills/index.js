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
          myself a fullstack developer as I enjoy both front and back ends.
        </p>
        <p>
          I have extensive experience in object oriented languages, and I pry
          myself in my most important skill, problem solving. I believe that
          tools have to be used effectively in order for the project to work
          properly, therefore problem solving is the most important ability any
          developer could have.
        </p>
        <p>
          While I am proud of my tools, skills and knowledge, I always seek out
          to learn more if possible, as well as utilize my knowledge in any way
          I can.
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
