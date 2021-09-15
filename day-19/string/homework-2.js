function extractCurrencyValue(source) {
  if (typeof source !== "string") {
    throw new Error("parameter should be a string");
  } else {
    let newString = Number(source.slice(1));
    return newString;
  }
}

try {
  console.log(extractCurrencyValue("$120")); // 120
} catch (err) {
  console.log(err);
}
