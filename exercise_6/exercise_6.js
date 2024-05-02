//Exercise 6
//
//• Try creating a json object variable for a book. The book should
//have a title, description, author and number of pages
//• Try printing these object property values in your console
//individually and via the whole book object
//• Update the description of the book.

const book = {
  title: "Clear Thinking",
  description: "Turning Ordinary Moments into Extraordinary Results",
  author: "Shane Parrish",
  no_of_pages: 267,
};

console.log(book["title"]);
console.log(book["description"]);
console.log(book["author"]);
console.log(book["no_of_pages"]);

console.log(book);

book.description = "This is a new description";

console.log(book["description"]);
