import "./index.scss";
import React from "react";
import { useEffect, useState } from "react";
import Sketch from "react-p5";

const Map = () => {
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

  let grid = [];

  const width = window.innerWidth * 0.7;
  const height = window.innerHeight * 0.7;

  const rows = 30;
  const cols = 40;

  const rect_width = width / cols;
  const rect_heigth = height / rows;

  let start_x = 5;
  let start_y = 15;

  let end_x = 35;
  let end_y = 15;

  let mode = "wall";

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      grid[i][j] = -1;
    }
  }

  grid[start_x][start_y] = 1;
  grid[end_x][end_y] = 2;

  function handleMouse(x, y) {
    if (mode === "wall") {
      if (grid[x][y] === -1) grid[x][y] = 0;
      else if (grid[x][y] === 0) {
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
        grid[x][y] = 1;
        mode = "wall";
      }
    } else if (mode === "end") {
      if (grid[x][y] === -1) {
        grid[x][y] = 2;
        mode = "wall";
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
        p5.rect(i * rect_width, j * rect_heigth, rect_width, rect_heigth);
      }
    }
  }

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(width, height).parent(canvasParentRef);
    canvas.mousePressed(() => {
      handleMouse(
        Math.trunc(p5.mouseX / rect_width),
        Math.trunc(p5.mouseY / rect_heigth)
      );
    });
  };

  const draw = (p5) => {
    p5.background(0);
    visualizeMap(p5);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Map;
