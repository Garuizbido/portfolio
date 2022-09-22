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
  const height = window.innerHeight * 0.5;

  let values = array;

  let storage = [];

  let states = [];

  for (let x = 0; x < values.length; x++);
  states.push(-1);

  let rect_width = width / values.length;

  function clearStates() {
    for (let x = 0; x < values.length; x++) states[x] = -1;
  }

  async function finishSort() {
    for (let x = 0; x < values.length; x++) {
      states[x] = 1;
      await sleep(5);
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function swap(i, j) {
    await sleep(30);
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  async function selectionSort(n) {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
      states[i - 1] = 1;
      min_idx = i;
      for (j = i + 1; j < n; j++) if (values[j] < values[min_idx]) min_idx = j;
      states[min_idx] = 0;
      await swap(min_idx, i);
      states[min_idx] = -1;
    }
    states[i - 1] = 1;
    states[i] = 1;
  }

  async function insertionSort(n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
      states[i] = 0;
      await sleep(50);
      key = values[i];
      j = i - 1;
      while (j >= 0 && values[j] > key) {
        states[j + 1] = 1;
        values[j + 1] = values[j];
        j -= 1;
      }
      values[j + 1] = key;
    }
  }

  async function partition(low, high) {
    for (let i = low; i < high; i++) {
      states[i] = 1;
    }
    let pivotIndex = low;
    let pivotValue = values[high];
    states[pivotIndex] = 0;
    for (let i = low; i < high; i++) {
      if (values[i] < pivotValue) {
        await swap(i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(pivotIndex, high);
    for (let i = low; i < high; i++) {
      states[i] = -1;
    }

    return pivotIndex;
  }

  async function quickSort(low, high) {
    if (low >= high) {
      return;
    }
    let index = await partition(low, high);
    states[index] = -1;
    await Promise.all([quickSort(low, index - 1), quickSort(index + 1, high)]);
  }

  async function merge(low, mid, high) {
    await sleep(25);
    let index1 = low;
    let index2 = mid;
    let storageIndex = low;
    while (index1 < mid && index2 < high) {
      if (values[index1] < values[index2]) {
        storage[storageIndex] = values[index1];
        values[index1] = -1;
        index1++;
      } else {
        storage[storageIndex] = values[index2];
        values[index2] = -1;
        index2++;
      }
      storageIndex++;
    }
    if (high - index2 < mid - index1) {
      for (let i = index1; i < mid; i++) {
        storage[storageIndex] = values[i];
        values[i] = -1;
        storageIndex++;
      }
    } else {
      for (let i = index2; i < high; i++) {
        storage[storageIndex] = values[i];
        values[i] = -1;
        storageIndex++;
      }
    }
    for (let i = low; i < high; i++) {
      values[i] = storage[i];
      storage[i] = -1;
    }
  }

  async function mergeSort(low, high) {
    if (high - low > 1) {
      const mid = Math.floor((low + high) / 2);
      states[mid] = -1;
      await mergeSort(low, mid);
      await mergeSort(mid, high);
      await merge(low, mid, high);
    }
  }

  async function bubbleSort(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        states[j] = 1;
        states[j + 1] = 0;
        if (values[j] > values[j + 1]) {
          await swap(j, j + 1);
        }
        states[j] = -1;
        states[j + 1] = -1;
      }
    }
  }

  function simulateSorting(p5) {
    p5.stroke(100, 143, 143);
    p5.fill(220);
    for (let i = 0; i < values.length; i++) {
      if (states[i] === 0) {
        p5.fill(255, 0, 0);
      } else if (states[i] === 1) {
        p5.fill(100, 200, 50);
      } else {
        p5.fill(255);
      }

      p5.rect(
        i * rect_width,
        height,
        rect_width,
        -values[i] * (height / 500),
        20
      );
    }
  }

  async function startSort() {
    clearStates();
    if (algorithm === "bubble") await bubbleSort(values.length);
    if (algorithm === "quick") await quickSort(0, values.length - 1);
    if (algorithm === "merge") await mergeSort(0, values.length);
    if (algorithm === "insertion") await insertionSort(values.length);
    if (algorithm === "selection") await selectionSort(values.length);
    await finishSort();
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();

    simulateSorting(p5);
  };
  return (
    <>
      <Sketch setup={setup} draw={draw} />
      <input className="play-button" type="button" onClick={startSort} />
    </>
  );
};

export default Array;
