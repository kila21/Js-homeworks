function compose(...callbacks) {
  let result = "";
  for (let i = 0; i < callbacks.length; i++) {
    result = callbacks[i](result);
  }
  let reversedResult = result.split("").reverse().join("");
  return (str) => str + reversedResult;
}

const result = compose(
  (str) => {
    return str + "c";
  },
  (str) => {
    return str + "b";
  }
)("a"); // 'abc'

console.log(result);
