function rmHtmlTags(string) {
  if (typeof string !== "string") {
    throw new Error("parameter should be a string");
  } else {
    while (string[0] === "<") {
      let slicedString = string.replace(/<\/?[^>]+(>|$)/g, "");
      return slicedString;
    }
  }
}

try {
  console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>"));
} catch (e) {
  console.log(e);
}
