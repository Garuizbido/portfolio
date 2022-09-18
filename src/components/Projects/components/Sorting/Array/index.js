import "./index.scss";
import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";

const Array = ({ array, algorithm }) => {
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

  const width = window.innerWidth * 0.94;
  const height = window.innerHeight * 0.55;

  let start = false;

  let storage = [];

  let values = array;
  let i = 0;
  let j = 0;

  let rect_width = width / values.length;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function swap(i, j) {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  async function partition(low, high) {
    let pivot = values[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      if (values[j] < pivot) {
        i++;
        await sleep(20);
        swap(i, j);
      }
    }
    swap(i + 1, high);
    return i + 1;
  }

  async function quickSort(low, high) {
    if (high < low) return;
    let pi = await partition(low, high);
    await quickSort(low, pi - 1);
    await quickSort(pi + 1, high);
  }

  async function merge(low, mid, high) {
    await sleep(20);
    let index1 = low;
    let index2 = mid;
    let storageIndex = low;
    while (index1 < mid && index2 < high) {
      if (array[index1] < array[index2]) {
        storage[storageIndex] = array[index1];
        array[index1] = -1;
        index1++;
      } else {
        storage[storageIndex] = array[index2];
        array[index2] = -1;
        index2++;
      }
      storageIndex++;
    }
    if (high - index2 < mid - index1) {
      for (let i = index1; i < mid; i++) {
        storage[storageIndex] = array[i];
        array[i] = -1;
        storageIndex++;
      }
    } else {
      for (let i = index2; i < high; i++) {
        storage[storageIndex] = array[i];
        array[i] = -1;
        storageIndex++;
      }
    }
    for (let i = low; i < high; i++) {
      array[i] = storage[i];
      storage[i] = -1;
    }
  }

  async function mergeSort(low, high) {
    if (high - low > 1) {
      const mid = Math.floor((low + high) / 2);
      await mergeSort(low, mid);
      await mergeSort(mid, high);
      await merge(low, mid, high);
    }
  }

  function bubbleSort() {
    for (let k = 0; k < 8; k++) {
      if (i < values.length) {
        if (values[j] > values[j + 1]) {
          swap(j, j + 1);
        }
        j++;

        if (j >= values.length - i - 1) {
          j = 0;
          i++;
        }
      }
    }
  }

  function simulateSorting(p5) {
    for (let i = 0; i < values.length; i++) {
      p5.rect(
        i * rect_width,
        height,
        rect_width,
        -values[i] * (height / 500),
        20
      );
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();
    p5.stroke(100, 143, 143);
    p5.fill(220);

    if (
      p5.mouseIsPressed &&
      p5.mouseY <= height &&
      p5.mouseY >= 0 &&
      p5.mouseX <= width &&
      p5.mouseX >= 0
    ) {
      start = true;
    }
    if (start) {
      if (algorithm === "bubble") bubbleSort();
      if (algorithm === "quick") quickSort(0, values.length - 1);
      if (algorithm === "merge") mergeSort(0, values.length);
    }
    simulateSorting(p5);
  };
  return <Sketch setup={setup} draw={draw} />;
};

export default Array;
