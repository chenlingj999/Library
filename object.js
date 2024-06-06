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
function createBookCell(book, index) {
    if (book instanceof Book) {
        var cell = document.createElement('div');
        cell.className = 'book';

        var title = document.createElement('h3');
        var author = document.createElement('p');
        var pageNum = document.createElement('p');
        var hasRead = document.createElement('p');
        var removeBook = document.createElement('button');

        title.textContent = 'Title: ' + book.title;
        author.textContent = 'Author: ' + book.author;
        pageNum.textContent = 'Page Number: ' + book.pageNum;
        hasRead.textContent = 'Has Read: ' + (book.hasRead ? 'Yes' : 'No');
        removeBook.textContent = 'Remove Book';

        //add the function to the remove button
        removeBook.addEventListener('click', () => {
            //remove from array
            myLibrary.splice(index, 1);
            displayBook();
        });

        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(pageNum);
        cell.appendChild(hasRead);
        cell.appendChild(removeBook);

        return cell;
    }
}

function displayBook() {
    const library = document.getElementById('library');
    //Empty library
    library.innerHTML = '';
    //Make sure library exists
    if (!library) console.error('No library found');

    let index = 0;
    for (var book of myLibrary) {
        bookCell = createBookCell(book, index);
        if (bookCell) {
            library.appendChild(bookCell);
            index++;
        }
    }
}

const open = document.getElementById("addBook");
const close = document.getElementById("closeBtn");
const submit = document.getElementById("confirmBtn");
const dialog = document.getElementById("mydialog");

//opens dialog
open.addEventListener('click', () => {
    dialog.showModal();
});

//closes dialog
close.addEventListener('click', () => {
    dialog.close();
});

//handler for submit btn
dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pageNum = document.getElementById('pageNum').value;
    let hasRead = document.getElementById('hasRead').value;

    var book = new Book(title, author, pageNum, hasRead);

    addBookToLibrary(book);

    displayBook();

    dialog.close();
});

//test
var b1 = new Book(1, 1, 1, true);
var b2 = new Book(2, 2, 2, false);
var b3 = new Book(3, 3, 3, true);

addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);

displayBook();