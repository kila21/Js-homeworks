class DB {
  constructor() {
    this.map = new Map();
    this.id = "uniqueId-";
    this.idNum = 0;
  }
  create(obj) {
    if (typeof obj !== "object") {
      throw new Error("par should be an object");
    } else {
      this.idNum++;
      //   this.id += this.idNum;
      this.map.set(this.id + this.idNum, obj);
      //   console.log(this.map.keys());
      return this.id + this.idNum;
    }
  }

  read(id) {
    if (!id) {
      throw new Error("method read() needs parameter");
    } else if (typeof id !== "string") {
      throw new Error("parameter for method read() should be a string");
    } else {
      for (let i of this.map.keys()) {
        if (i === id) {
          const newObject = this.map.get(i);
          newObject["id"] = id;
          return newObject;
        }
      }
      return null;
    }
  }

  readAll(par) {
    if (par) {
      throw new Error("method readAll() should be without parameter");
    } else {
      const newArray = new Array();
      for (let i of this.map.values()) {
        for (let x in i) {
          if (x === "name") {
            newArray.push({ name: i[x] });
          }
        }
      }
      //   newArray.push(...this.map.values());
      return newArray;
    }
  }

  update(id, update) {
    if (typeof id !== "string") {
      throw new Error("id parameter should be a string");
    } else {
      this.map.forEach((i, uniq, arr) => {
        //   console.log(i, item);
        if (uniq === id) {
          for (let x of Object.keys(i)) {
            if (Object.keys(update) == x) {
              i[x] = Object.values(update);
            }
          }
        }
      });
      return this.map;
    }
  }

  delete(user) {
    if (typeof user !== "string") {
      throw new Error("delete parameter should be a string");
    }
    this.map.forEach((item, index) => {
      if (index === user) {
        this.map.delete(index);
        console.log(this.map);
      }
    });
  }
}

const db = new DB();

const person = {
  name: "Pitter", // required field with type string
  age: 21, // required field with type number
  country: "ge", // required field with type string
  salary: 500, // required field with type number
};
const person2 = {
  name: "luka",
};
const id = db.create(person);
const id2 = db.create(person2);
const customer = db.read(id);
const customer2 = db.read(id2);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true
