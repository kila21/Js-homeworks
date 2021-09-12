function rotate([...arr], num, side = "right") {
  if (!Array.isArray(arr)) {
    throw new Error("first parameter should be an array");
  } else if (!(typeof num === "number")) {
    throw new Error("second parameter should be a number");
  } else if (side && !(typeof side === "string")) {
    throw new Error("third parameter should be a string");
  } else {
    let i = 0;
    if (side === "left") {
      while (i < num) {
        let number = arr.shift();
        arr.push(number);
        i++;
      }
    } else if (side === "right") {
      while (i < num) {
        let number = arr.pop();
        arr.unshift(number);
        i++;
      }
    } else {
      throw new Error("third parameter should be 'right' or 'left'");
    }
    console.log(...arr);
  }
}
console.log(typeof [...[1,2,3]])
try {
  const arr = [1, 2, 3];
  rotate(arr, 1, "left"); // result: [2,3,1]
  rotate(arr, 1); // result: [3,1,2]
  rotate(arr, 2); // result: [2,3,1]
} catch (err) {
  console.log(err);
}
