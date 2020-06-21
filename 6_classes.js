class Book {
    constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
 getSummary() {
     return `${this.title} was written by ${this.author} in ${this.Year}`
 }

getAge() {Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

 }
revise(newYear) {
    this.year = newYear;
    this.revised = true;
}

static topBookStore() {
return 'Barnes & Noble';
}

};


//Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
// console.log(Book.topBookStore());