const fs = require("fs");

const fileContent = fs.readFileSync("day3.txt", "utf-8").split("\n");

const regExp = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;
let matches = [];

fileContent.forEach((line) => {
  let match;
  while ((match = regExp.exec(line)) !== null) {
    matches.push(match);
  }
});
let sum = 0;
for (let i = 0; i < matches.length; i++) {
  sum = sum + matches[i][1] * matches[i][2];
}

console.log(sum);
