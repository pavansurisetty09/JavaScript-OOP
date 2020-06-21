class Book {
    constructor (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
 getSummary() {
     return `${this.title} was written by ${this.author} in ${this.Year}`
 }
}

//Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
       
    };
}

// Instantiate Magazine
const mag1 = new Magazine('mag One', 'John Doe', '2018', 'Jan');
const mag2 = new Magazine('mag Two', 'Jane Doe', '2016', 'June');

console.log(mag2);