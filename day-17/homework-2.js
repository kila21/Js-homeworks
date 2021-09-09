function f(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      throw new TypeError("parameter can't be an empty");
    } else {
      console.log(arr.splice(0, 1));
      console.log(arr.splice(0, 1));
      console.log(arr.splice(0, 1));
    }
  } else if (!Array.isArray(arr) || typeof arr === "string") {
    throw new TypeError("parameter type should be an array");
  }
}

try {
  f([1, 2, 3]);
} catch (err) {
  console.log(err);
}

// f([]);
// f([1,2,3]);
// f("content")
