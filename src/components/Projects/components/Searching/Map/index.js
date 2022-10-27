import "./index.scss";
import React from "react";
import { useEffect, useState } from "react";
import Sketch from "react-p5";

const Map = ({ algorithm }) => {
  const [p5, setP5] = useState();

  useEffect(() => {
    window.addEventListener("resize", windowResized);

    return () => window.removeEventListener("resize", windowResized);
  }, []);

  function windowResized() {
    if (p5) {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let grid = [];
  let path = [];

  let working = false;

  const width = window.innerWidth * 0.6;
  const height = window.innerHeight * 0.7;

  const rows = 30;
  const cols = 40;

  const total = rows * cols;

  const rect_width = width / cols;
  const rect_heigth = height / rows;

  let start_x = 5;
  let start_y = 15;

  let end_x = 35;
  let end_y = 15;

  let mode = "none";

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      grid[i][j] = -1;
    }
  }

  grid[start_x][start_y] = 1;
  grid[end_x][end_y] = 2;

  function handleMousePress(x, y) {
    if (!working) {
      if (mode === "none") {
        if (grid[x][y] === -1) {
          grid[x][y] = 0;
          mode = "wall";
        } else if (grid[x][y] === 0) {
          grid[x][y] = -1;
        } else if (grid[x][y] === 1) {
          grid[x][y] = -1;
          mode = "start";
        } else if (grid[x][y] === 2) {
          grid[x][y] = -1;
          mode = "end";
        }
      } else if (mode === "start") {
        if (grid[x][y] === -1) {
          start_x = x;
          start_y = y;
          grid[x][y] = 1;
          mode = "none";
        }
      } else if (mode === "end") {
        if (grid[x][y] === -1) {
          end_x = x;
          end_y = y;
          grid[x][y] = 2;
          mode = "none";
        }
      } else if (mode === "wall") {
        mode = "none";
      }
    }
  }

  async function dijkstraSearch() {
    working = true;
    let toVisit = [[start_x, start_y]];
    let u;
    while (toVisit.length !== 0) {
      u = toVisit.shift();
      if (grid[u[0]][u[1]] === -1) {
        grid[u[0]][u[1]] = 3;
        if (
          u[0] < cols - 1 &&
          (grid[u[0] + 1][u[1]] === -1 || grid[u[0] + 1][u[1]] === 2)
        )
          toVisit.push([u[0] + 1, u[1]]);
        if (
          u[0] > 0 &&
          (grid[u[0] - 1][u[1]] === -1 || grid[u[0] - 1][u[1]] === 2)
        )
          toVisit.push([u[0] - 1, u[1]]);
        if (
          u[1] < rows &&
          (grid[u[0]][u[1] + 1] === -1 || grid[u[0]][u[1] + 1] === 2)
        )
          toVisit.push([u[0], u[1] + 1]);
        if (
          u[1] > 0 &&
          (grid[u[0]][u[1] - 1] === -1 || grid[u[0]][u[1] - 1] === 2)
        )
          toVisit.push([u[0], u[1] - 1]);
      } else if (grid[u[0]][u[1]] === 1) {
        if (
          u[0] < cols - 1 &&
          (grid[u[0] + 1][u[1]] === -1 || grid[u[0] + 1][u[1]] === 2)
        )
          toVisit.push([u[0] + 1, u[1]]);
        if (
          u[0] > 0 &&
          (grid[u[0] - 1][u[1]] === -1 || grid[u[0] - 1][u[1]] === 2)
        )
          toVisit.push([u[0] - 1, u[1]]);
        if (
          u[1] < rows &&
          (grid[u[0]][u[1] + 1] === -1 || grid[u[0]][u[1] + 1] === 2)
        )
          toVisit.push([u[0], u[1] + 1]);
        if (
          u[1] > 0 &&
          (grid[u[0]][u[1] - 1] === -1 || grid[u[0]][u[1] - 1] === 2)
        )
          toVisit.push([u[0], u[1] - 1]);
      } else if (grid[u[0]][u[1]] === 2) {
        break;
      }
      await sleep(10);
    }
    working = false;
  }

  async function startSearch() {
    if (algorithm === "dijkstra") {
      await dijkstraSearch();
      await drawShortest();
    }
  }

  async function drawShortest() {
    await sleep(10);
  }

  function drawWalls(p5) {
    if (mode === "wall") {
      const x = Math.trunc(p5.mouseX / rect_width);
      const y = Math.trunc(p5.mouseY / rect_heigth);
      if (grid[x][y] === -1) {
        grid[x][y] = 0;
      }
    }
  }

  function clearMap() {
    if (!working) {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] === 3) grid[i][j] = -1;
        }
      }
    }
  }

  function clearWalls() {
    if (!working) {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] === 0) grid[i][j] = -1;
        }
      }
    }
  }

  function visualizeMap(p5) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j] === -1) p5.fill(255);
        else if (grid[i][j] === 0) p5.fill(80, 80, 80);
        else if (grid[i][j] === 1) p5.fill(255, 0, 0);
        else if (grid[i][j] === 2) p5.fill(100, 200, 50);
        else if (grid[i][j] === 3) p5.fill(173, 216, 230);
        else if (grid[i][j] === 4) p5.fill(255, 255, 51);
        p5.rect(i * rect_width, j * rect_heigth, rect_width, rect_heigth);
      }
    }
  }

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(width, height).parent(canvasParentRef);
    canvas.mousePressed(() => {
      handleMousePress(
        Math.trunc(p5.mouseX / rect_width),
        Math.trunc(p5.mouseY / rect_heigth)
      );
    });
  };

  const draw = (p5) => {
    p5.background(0);
    drawWalls(p5);
    visualizeMap(p5);
  };

  return (
    <>
      <div className="controls">
        <div>
          <input
            type="button"
            className="play-button"
            value="Start"
            onClick={startSearch}
          />
        </div>
        <div>
          <input
            type="button"
            className="clear-map-button"
            value="Clear map"
            onClick={clearMap}
          />
        </div>
        <div>
          <input
            type="button"
            className="clear-walls-button"
            value="Clear Walls"
            onClick={clearWalls}
          />
        </div>
        <div>
          <input
            type="button"
            className="generate-maze-button"
            value="Generate Maze"
            onClick={clearWalls}
          />
        </div>
      </div>
      <div className="map-container">
        <Sketch setup={setup} draw={draw} />
      </div>
      <div className="instructions-container">
        <p>
          Instructions: <br />
          1. Choose Searching Algorithm. <br />
          2. Click on white block to add walls. <br />
          &nbsp;&nbsp; Click again to stop adding walls.
          <br />
          3. Click on red block to pickup start.
          <br />
          &nbsp;&nbsp; Click again to set start.
          <br />
          4. Click on green block to change end.
          <br />
          &nbsp;&nbsp; Click again to set end.
        </p>
      </div>
    </>
  );
};

export default Map;

/*
<Sketch setup={setup} draw={draw} />
<input type="button" value="Generate Maze" />
      <input type="button" value="Clear Walls" onClick={clearWalls} />
*/
