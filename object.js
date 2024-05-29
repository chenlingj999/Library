const myLibrary = [];

function Book(title, author, pageNum, hasRead) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.hasRead = hasRead;
}

Book.prototype.info = function() {
    var attribute = [];
    for (var attr in this) {
        if (this.hasOwnProperty(attr) && typeof this[attr] !== 'function') {
            attribute.push(this[attr]);
        }
    }
    return attribute;
}

function addBookToLibrary(book) {
    if (book instanceof Book) myLibrary.push(book);
}

//create book cell to add to library
function createBookCell(book) {
    if (book instanceof Book) {
        var cell = document.createElement('div');
        cell.className = 'book';

        var title = document.createElement('h3');
        var author = document.createElement('p');
        var pageNum = document.createElement('p');
        var hasRead = document.createElement('p');

        title.textContent = 'Title: ' + book.title;
        author.textContent = 'Author: ' + book.author;
        pageNum.textContent = 'Page Number: ' + book.pageNum;
        hasRead.textContent = 'Has Read: ' + (book.hasRead ? 'Yes' : 'No');

        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(pageNum);
        cell.appendChild(hasRead);

        return cell;
    }
}

function displayBook() {
    const library = document.getElementById('library');
    //Empty library
    library.innerHTML = '';
    //Make sure library exists
    if (!library) console.error('No library found');

    for (var book of myLibrary) {
        bookCell = createBookCell(book);
        if (bookCell) {
            library.appendChild(bookCell);
        }
    }
}

//test
var b1 = new Book(1, 1, 1, true);
var b2 = new Book(2, 2, 2, false);
var b3 = new Book(3, 3, 3, true);

addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);

displayBook();