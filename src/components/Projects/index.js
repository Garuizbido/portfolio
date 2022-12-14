import "./index.scss";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";

import AnimatedLetters from "../AnimatedLetters";
import projectData from "../../data/projects.json";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, idx) => {
          return (
            <div className={`image-box _${idx}`} key={idx}>
              <img
                src={process.env.PUBLIC_URL + project.cover}
                className="project-image"
                alt=""
              />{" "}
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <Link to={`/projects/${project.url}`}>
                  <button className="btn">View</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["m", "y", " ", "p", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectData.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
