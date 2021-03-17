// write your code here to make the tests pass
var Library = function () {
  var library = [];
  
  var addBook = function(book) {
    library.push(book);
  };

  var checkOutBook = function (book) {
    if (library.includes(book)) {
      book.setAttribute('checkedOut', true);
    }
  };

  var returnBook = function (book) {
    if (library.includes(book)) {
      book.setAttribute('checkedOut', false);
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function (title, author) {

  var book = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function (checkedOut) {
    return book[checkedOut];
  };

  var setAttribute = function (key, value) {
    if (Object.keys(book).includes(key)) {
      book[key] = value;
    }
  };
  
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};