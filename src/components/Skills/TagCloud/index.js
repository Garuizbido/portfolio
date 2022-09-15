import React from "react";
import "./index.scss";
import TagCloud from "TagCloud";

function About() {
  const options = {
    radius: 500,
    maxSpeed: "medium",
    initSpeed: "fast",
    direction: 135,
    keep: true,
  };

  const myTags = [
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
  ];

  TagCloud(".content", myTags, options);

  return (
    <div className="tag-cloud">
      <span className="content"></span>
    </div>
  );
}

export default About;
