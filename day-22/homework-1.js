// befor refactoring:
const get = require("fetch").fetchUrl;
const url = "https://reqres.in/api/users?page=2";

const send = function (url) {
  return new Promise((resolve, reject) => {
    get(url, (error, meta, body) => {
      const { data } = JSON.parse(body);
      const status = meta.status;
      if (status === 200) {
        // console.log(status);
        resolve([data[2].first_name + " " + data[2].last_name]);
      } else {
        reject(`We have error, status code: ${status}`);
      }
      //   console.log(data);
    });
  });
};

// **After refactoring**:

// const get = require("fetch").fetchUrl;
// const url = "https://reqres.in/api/users?page=2";

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
