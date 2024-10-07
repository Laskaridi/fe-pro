function BookConstructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    // this.bookInfo = function(){
    //     console.log(`Book name ${this.title} production year ${this.year}`);
    // }
}
BookConstructor.prototype.bookInfo = function(){
    console.log(`Book name ${this.title} production year ${this.year}`);
}

let book1 = new BookConstructor('Harry Potter', 'J.K. Rowling', 1997);
let book2 = new BookConstructor('Harry Potter 2', 'J.K. Rowling', 1998);
console.log(book1);
console.log(book2);
book1.bookInfo();

let arrayValue = [1,2,4];
console.log(arrayValue);

class Book{
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }
    getAllInfo(){
        console.log(`Book name ${this._title} production year ${this._year}`);
    }
    get title(){
        return `Geter result ${this._title}`;
    }
    set title(newTitle){
        this._title = newTitle
    }
    static createBookFromCSV(csvString) {
        const [title, author, year] = csvString.split(",");
        return new Book(title, author, parseInt(year));
    }
}


let book3 = new Book('Harry Potter 3', 'J.K. Rowling', 2000);
console.log(book3);
book3.getAllInfo();

console.log(book3.title);
book3.title = 'Poter SET';
console.log(book3);

// book3.createBookFromCSV('Javascript', 'Oreily', 2012);
let jsBook = Book.createBookFromCSV('Javascript, Oreily, 2012')
console.log(jsBook);

class Product{
    constructor(name, price){
        this._name=name;
        this._price=price;
    }
    getInfo(){
        console.log(`${this._name} has price ${this._price}`);
    }
}
let myProduct = new Product('apple', '1$');
console.log(myProduct);

// наслідування

class Elecronics extends Product{
    constructor(name, price, type){
        super(name, price);
        this._type = type;
    }
    getElectronicInfo(){
        console.log(`${this._name}  Type ${this._type}`);
    }
}
let laptop = new Elecronics('HP', 900, 'laptop');
console.log(laptop);
laptop.getInfo();
laptop.getElectronicInfo();

// Поліморфізм

class Basket{
    constructor(){
        this.products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    get totalPrice(){
        let price = 0;
        this.products.forEach(item=>{
            price+=item._price;
        });
        return price;
    }
}

let simpleBook = new Product('Simple book', 100);
let phone = new Elecronics('Mobile phone', 250, 'mobile');

let basket = new Basket();
console.log(basket);
basket.addProduct(simpleBook);
basket.addProduct(phone);

console.log(`Shopping total price ${basket.totalPrice}`);