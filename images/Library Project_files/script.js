let myLibrary = [];

function Book (title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

Book.prototype.info = function () {
    console.log(this.title + " is written by " + this.author + ". It is " + this.pages + " long, and it has " + this.beenRead);
}

const fightClub = new Book("Fight Club", "Chuck", "180", "been read");
console.log(fightClub.info());

function addBookToLibrary () {

}

function displayForm () {
    document.getElementById('form1').style.display = 'block';
}

const submitButton = document.querySelector("#submitbutton");
console.log(submitButton);
submitButton.addEventListener('click', displayForm);