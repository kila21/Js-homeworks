function reverse(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter should be an array");
  } else {
    if (arr.length === 0) {
      throw new Error("cant be an empty array");
    } else {
      arr.sort((a, b) => {
        return -1;
      });
      console.log(arr);
    }
  }
}
try {
  const arr = [3, 2, 1];
  reverse(arr); // [1,2,3]
} catch (err) {
  console.log(err);
}
