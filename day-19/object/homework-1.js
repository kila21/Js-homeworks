function readingStatus(books) {
  for (book of books) {
    if (book.haveRead) console.log("have read");
    else console.log("havent");
  }
}

var books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];

// console.log(readingStatus(books));
readingStatus(books);
