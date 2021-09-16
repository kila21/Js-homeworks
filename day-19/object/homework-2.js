function readingStatus(books) {
  for (book of books) {
    console.log(
      `${book.author} ${book.haveRead ? "have" : "haven't"} read ${
        book.title
      } ${book.haveRead ? book.daysAgo + " days ago" : "yet"}`
    );
  }
}

var books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
    get daysAgo() {
      const msInDay = 24 * 60 * 60 * 1000;
      const date = new Date();
      return Math.floor((date - this.dateOfRead) / msInDay);
    },
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
    get daysAgo() {
      const msInDay = 24 * 60 * 60 * 1000;
      const date = new Date();
      return Math.floor((date - this.dateOfRead) / msInDay);
    },
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
    get daysAgo() {
      const msInDay = 24 * 60 * 60 * 1000;
      const date = new Date();
      return Math.floor((date - this.dateOfRead) / msInDay);
    },
  },
];

readingStatus(books);
