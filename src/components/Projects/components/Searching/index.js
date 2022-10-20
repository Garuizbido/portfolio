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

const algorithms = [{ label: "Dijkstra's", value: "dijkstra" }];

const Sorting = () => {
  const [algorithm, setAlgorithm] = useState("dijkstra");

  return (
    <div className="searching-container">
      <div className="topbar-container">
        <h1>
          <AnimatedLetters
            letterClass={"text-animate"}
            strArray={logo}
            idx={12}
          />
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
      </div>
      <Map algorithm={algorithm} />
    </div>
  );
};

export default Sorting;
