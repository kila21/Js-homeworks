function f(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter should be an array");
  } else {
    const res = arr.slice();
    let i = 0;
    let sum = 0;
    while (i < res.length) {
      if (Array.isArray(res[i])) {
        res.splice(i, 1, ...res[i]);
      } else if (!Array.isArray(res[i]) && typeof res[i] !== "number") {
        throw new Error("should be a number or array");
      } else {
        i++;
      }
    }
    res.forEach((el) => {
      sum += el;
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

  const arr2 = [[[[[1, 2]]]]];
  f(arr2); // 3
  const arr3 = [[[[[1, 2]]], 2], 1];
  f(arr3); // 6
  const arr4 = [[[[[]]]]];
  f(arr4); // 0
  const arr5 = [[[[[], 3]]]];
  f(arr5); // 3
} catch (err) {
  console.log(err);
}
