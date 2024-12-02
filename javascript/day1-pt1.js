const fs = require("fs");

const fileContent = fs.readFileSync("day1.txt", "utf-8").split("\n");
let leftDistance = [];
let rightDistance = [];
let distances = 0;

fileContent.forEach((el) => {
  leftDistance.push(Number(el.trim().split("   ").at(0)));
  rightDistance.push(Number(el.trim().split("   ").at(1)));
});

sortedLeft = leftDistance.sort();
sortedRight = rightDistance.sort();

for (let index = 0; index < sortedLeft.length; index++) {
  distances =
    distances + Math.abs(sortedLeft.at(index) - sortedRight.at(index));
}
console.log(distances);
