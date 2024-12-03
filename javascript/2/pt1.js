const fs = require("fs");

const fileContent = fs.readFileSync("day2.txt", "utf-8").split("\n");

let arrays = [];
let totalUnsafe = 0;
fileContent.forEach((el) => {
  arrays.push(el.trim().split(" ").map(Number));
});

for (let index = 0; index < arrays.length; index++) {
  const array = arrays[index];
  let unsafe = false;
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < array.length - 1; i++) {
    const diff = array[i + 1] - array[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      unsafe = true;
      break;
    }
    if (diff > 0) {
      decreasing = false;
    } else if (diff < 0) {
      increasing = false;
    }
  }

  if (unsafe || (!increasing && !decreasing)) {
    totalUnsafe++;
  }
}

console.log(arrays.length - totalUnsafe);
