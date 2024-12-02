const fs = require("fs");

const fileContent = fs.readFileSync("day1.txt", "utf-8").split("\n");
let leftDistance = [];
let rightDistance = [];
let leftMap = new Map();
let rightMap = new Map();
let distances = 0;

fileContent.forEach((el) => {
  leftDistance.push(Number(el.trim().split("   ").at(0)));
  rightDistance.push(Number(el.trim().split("   ").at(1)));
});

leftMap = calculateElementFrequencies(leftDistance);
rightMap = calculateElementFrequencies(rightDistance);

for (const [key, value] of leftMap.entries()) {
  if (rightMap.has(key)) {
    distances = distances + rightMap.get(key) * key * value;
  }
}

console.log(distances);

function calculateElementFrequencies(arr) {
  const frequencies = new Map();
  for (const item of arr) {
    if (frequencies.has(item)) {
      frequencies.set(item, frequencies.get(item) + 1);
    } else {
      frequencies.set(item, 1);
    }
  }
  return frequencies;
}
