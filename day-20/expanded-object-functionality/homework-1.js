Object.prototype.mergeDeepRight = function (data) {
  for (let prop in data) {
    if (typeof data[prop] === "object") {
      if (!(prop in this)) {
        this[prop] = {};
      } else if (Array.isArray(data[prop])) {
        for (i of data[prop]) {
          this[prop].unshift(i);
        }
      }
      this[prop].mergeDeepRight(data[prop]);
    } else if (typeof data[prop] === "function") {
      return;
    } else {
      this[prop] = data[prop];
    }
  }
};

const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

Object.defineProperty(data, mergeDeepRight(), {
  enumerable: false,
});
data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(JSON.stringify(data));

// console.log(data)
// console.log(data.contact);
