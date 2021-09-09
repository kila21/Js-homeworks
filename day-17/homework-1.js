function getDivisors(number) {
  const array = [];
  if (typeof number !== "number") {
    throw new Error("parameter type is not a number");
  } else if (number === 0) {
    throw new Error("parameter can't be a 0");
  } else {
    let divisors = number;
    while (divisors > 0) {
      let result = number / divisors;
      if (result === parseInt(result)) {
        array.push(result);
      }
      divisors--;
    }
    console.log(array);
  }
}

try {
  getDivisors(0);
} catch (err) {
  console.log(err);
}
// getDivisors(12);
// getDivisors("content");
// getDivisors(0);
