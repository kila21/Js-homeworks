function f(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter should be an array");
  } else {
    let sum = 0;
    const newArr = arr.flat(Infinity);
    newArr.forEach((i) => {
      if (typeof i !== "number" || !Array.isArray(newArr)) {
        throw new Error("paremeter should be an array with numbers");
      } else {
        sum += i;
      }
    });
    console.log(sum);
  }
}

try {
  const arr = [
    [
      [1, 2],
      [1, 2],
    ],
    [
      [2, 1],
      [1, 2],
    ],
  ];
  f(arr);
  const arr2 = [[[[1, 2]]]];
  f(arr2); // 3
  const arr3 = [[[[[1, 2]]], 2], 1];
  f(arr3); // 6
  const arr4 = [[[[[]]]]];
  f(arr4); // 0
  const arr5 = [[[[[], 3]]]];
  f(arr5); // 3
  //   f([{ 1: 2 }]);
} catch (err) {
  console.log(err);
}
