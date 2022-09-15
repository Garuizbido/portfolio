import React from "react";
import "./index.scss";
import TagCloud from "TagCloud";

function About() {
  const options = {
    radius: 600,
    maxSpeed: "fast",
    initSpeed: "medium",
    direction: 135,
    keep: true,
  };

  const skills = [
    "JavaScript",
    "CSS",
    "HTML",
    "C++",
    "C",
    "Java",
    "Verilog",
    "VHDL",
    "Vscode",
    "React",
    "Python",
    "Linux",
    "git",
    "Unix",
    "Subversion",
    "JSON",
    "PyScript",
    "Node",
    "Typescript",
    "SQL",
    "MongoDB",
  ];

  TagCloud(".content", skills, options);

  return (
    <div className="cload-container">
      <span className="content"></span>
    </div>
  );
}

export default About;
