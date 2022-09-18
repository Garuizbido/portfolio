import "./index.scss";
import { useState } from "react";

import Dropdown from "./Dropdown";
import Array from "./Array";

const algorithms = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Quick Sort", value: "quick" },
  { label: "Merge Sort", value: "merge" },
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

  return (
    <div className="sorting-container">
      <div className="topbar-container">
        <input type="button" value="Randomize" onClick={handleArray} />
        <h1>Sorting Algorithm Visualizer</h1>
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
      </div>
      <div className="array-container">
        <Array array={array} algorithm={algorithm} />
      </div>
    </div>
  );
};

export default Sorting;
