import "./index.scss";
import { useState } from "react";

import Dropdown from "../Dropdown";
import AnimatedLetters from "../../../AnimatedLetters";
import Map from "./Map";

const logo = [
  "p",
  "a",
  "t",
  "h",
  " ",
  "f",
  "i",
  "n",
  "d",
  "i",
  "n",
  "g",
  " ",
  "v",
  "i",
  "s",
  "u",
  "a",
  "l",
  "i",
  "z",
  "e",
  "r",
];

const algorithms = [
  { label: "A*", value: "astar" },
  { label: "Dijkstra's", value: "quick" },
  { label: "Gready Best-First", value: "greedy" },
  { label: "Swarm", value: "swarm" },
];

const Sorting = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [algorithm, setAlgorithm] = useState("bubble");

  return (
    <div className="searching-container">
      <div className="topbar-container">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={logo} idx={12} />
        </h1>
        <div className="algorithm-dropdown">
          <h2>Algorithm:</h2>
          <Dropdown
            value={algorithm}
            options={algorithms}
            onChange={(event) => {
              setAlgorithm(event.target.value);
            }}
          />
        </div>
        <div className="map-container">
          <Map />
        </div>
        <input type="button" value="Generate Maze" />
        <input type="button" value="Clear Walls" />
      </div>
    </div>
  );
};

export default Sorting;
