let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  function info(){
    return `${title} by ${author}, ${pages} pages long, ${read ? "read" : "not yet read"}.`
  }
}

function addBookToLibrary() {
  const bookName = prompt("Input Book Name");
  const author = prompt("Input Author");
  const pages = prompt("input pages");
  const readStatus = (/y/.test(prompt("Input Y/N for read status")));

  myLibrary.push(new Book(bookName, author, pages, readStatus));
}
