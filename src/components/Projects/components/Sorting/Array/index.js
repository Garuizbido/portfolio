import "./index.scss";
import React from "react";
import Sketch from "react-p5";

const Array = ({ array, algorithm }) => {
  const width = 2000;
  const height = 1000;

  let start = false;

  let storage = [];

  let values = array;
  let i = 0;
  let j = 0;

  let rect_width = width / values.length;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function swap(i, j) {
    await sleep(2);
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
        await swap(i, j);
      }
    }
    await swap(i + 1, high);
    return i + 1;
  }

  async function quickSort(low, high) {
    if (high < low) return;
    let pi = await partition(low, high);
    await Promise.all([quickSort(low, pi - 1), quickSort(pi + 1, high)]);
  }

  async function merge(low, mid, high) {
    await sleep(50);
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
        let temp = values[j];
        if (values[j] > values[j + 1]) {
          values[j] = values[j + 1];
          values[j + 1] = temp;
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
      p5.rect(i * rect_width, height, rect_width, -values[i] * 1.5, 20);
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(220);
    p5.stroke(100, 143, 143);
    p5.fill(50);

    if (p5.mouseIsPressed) {
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
