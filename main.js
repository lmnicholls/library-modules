// write your code here to make the tests pass
var Library = function () {
  // Initialize empty library array
  var library = [];
  
  // Push book object to library
  var addBook = function(book) {
    library.push(book);
  };

  // If book is in library, book can be checked out and is set to true
  var checkOutBook = function (book) {
    if (library.includes(book)) {
      book.setAttribute('checkedOut', true);
    } else console.log(`This book does not exist in this library.`);
  };

  // If book is in library, book can be returned and is set to false
  var returnBook = function (book) {
    if (library.includes(book)) {
      book.setAttribute('checkedOut', false);
    } else console.log(`Are you sure you got the book from this library?`);
  };

  // public functions made available
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function (title, author) {

  // Create a book object
  var book = {
    title: title,
    author: author,
    checkedOut: false
  };

  // Return the value of checkedOut in book
  var getAttribute = function (checkedOut) {
    return book[checkedOut];
  };

  // If book has the key you can set the books value
  var setAttribute = function (key, value) {
    if (Object.keys(book).includes(key)) {
      book[key] = value;
    }
  };
  
  // Public functions made available
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};