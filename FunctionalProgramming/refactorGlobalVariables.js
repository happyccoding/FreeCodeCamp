// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(arrBook, bookName) {
  return [...arrBook, bookName];

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arrBook, bookName) {
  var index = arrBook.indexOf(bookName);
  if (index < 0) return;
  return [...arrBook.slice(0, index), ...arrBook.slice(index + 1)];
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(newestBookList);

//console.log(bookList);
