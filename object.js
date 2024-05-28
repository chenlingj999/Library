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

