import "./index.scss";
import { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import Array from "./Array";
import AnimatedLetters from "../../../AnimatedLetters";

const logo = [
  "s",
  "o",
  "r",
  "t",
  "i",
  "n",
  "g",
  " ",
  "a",
  "l",
  "g",
  "o",
  "i",
  "t",
  "h",
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
  { label: "Bubble Sort", value: "bubble" },
  { label: "Insertion Sort", value: "insertion" },
  { label: "Merge Sort", value: "merge" },
  { label: "Quick Sort", value: "quick" },
  { label: "Selection Sort", value: "selection" },
];

const sizes = [
  { label: "25", value: 25 },
  { label: "50", value: 50 },
  { label: "75", value: 75 },
  { label: "100", value: 100 },
  { label: "125", value: 125 },
  { label: "150", value: 150 },
  { label: "175", value: 175 },
  { label: "200", value: 200 },
  { label: "225", value: 225 },
  { label: "250", value: 250 },
  { label: "275", value: 275 },
  { label: "300", value: 300 },
];

const Sorting = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [algorithm, setAlgorithm] = useState("bubble");
  const [size, setSize] = useState(25);
  const [array, setArray] = useState([]);

  const createArray = () => {
    let temp = [];
    for (let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * 500));
    }
    return temp;
  };

  const handleArray = () => {
    setArray(createArray);
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4500);
  }, []);

  return (
    <div className="sorting-container">
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
        <div className="size-dropdown">
          <h2>Size:</h2>
          <Dropdown
            value={size}
            options={sizes}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </div>
        <input type="button" value="Randomize" onClick={handleArray} />
      </div>
      <div className="array-container">
        <Array array={array} algorithm={algorithm} />
      </div>
      <div className="instructions-container">
        <p>
          Instructions: <br />
          1. Choose Sorting Algorithm <br />
          2. Choose algorithm size <br />
          3. Click Randomize <br />
          4. Click anywhere on graph to run.
        </p>
      </div>
    </div>
  );
};

export default Sorting;
