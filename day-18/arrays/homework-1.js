function f(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter should be an array");
  } else {
    let newArray = [];
    let sum = 0;
    arr.forEach(flatten);
    function flatten(el) {
      if (Array.isArray(el)) {
        return el.forEach(flatten, (element) => {
          if (typeof element !== "number") {
            throw new Error("should be a number");
          }
        });
      } else if (!Array.isArray(el) && typeof el !== "number") {
        throw new Error("should be a number in array");
      }
      newArray.push(el); 
    }
    for(item of newArray){
      sum+=item;
    }
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
