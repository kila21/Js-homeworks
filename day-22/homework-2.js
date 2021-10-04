const get = require("fetch").fetchUrl;
const url = "https://reqres.in/api/users";
class Countries {
  constructor(str) {
    if (typeof str !== "string") {
      throw new Error("url should be a string");
    } else {
      this.api = str;
    }
  }

  send(num) {
    if (typeof num !== "number") {
      throw new Error("parameter should be a number");
    }
    this.api = this.api + `?page=${num}`;
    return new Promise((resolve, reject) => {
      get(this.api, (error, meta, body) => {
        const { data } = JSON.parse(body);
        const status = meta.status;
        if (status === 200) {
          // console.log(status);
          resolve(data);
        } else {
          reject(`We have error, status code: ${status}`);
        }
        //   console.log(data);
      });
    });
  }
}

const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send(2);
    console.log(data); // array of countries
    console.log(countries.api);
  } catch (error) {
    console.log(error);
  }
})();
