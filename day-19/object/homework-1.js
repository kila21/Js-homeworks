function readingStatus(books) {
  for (book of books) {
    console.log(
      `${book.author} ${book.haveRead ? "have" : "haven't"} read ${
        book.title
      } ${book.haveRead ? "" : "yet"}`
    );
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
