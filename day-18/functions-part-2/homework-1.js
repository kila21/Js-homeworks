function mix(...arg) {
  let result;
  const object = { errors: [] };

  for (let i = 0; i < arg.length; i++) {
    try {
      if (i === 0) result = arg[i]();
      else {
        result = arg[i](result);
      }
    } catch (err) {
      let errorObject = {};
      errorObject["name"] = err.name;
      errorObject["message"] = err.message;
      errorObject["stack"] = err.stack;
      errorObject["level"] = i;
      object.errors.push(errorObject);
    }
  }
  object["value"] = result;
  return object;
}

const result = mix(
  () => {
    return 0;
  },
  (prev) => {
    return prev + 1;
  },
  (prev) => {
    throw new RangeError("Range is wrong");
  },
  (prev) => {
    return prev * 3;
  }
);

console.log(result);
