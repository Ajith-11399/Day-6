//! Task - 1 => Class - Movie :-
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
};
const film = new Movie("Casino Royale", "EON Productions", "PG13");
console.log(
    "Movie Title:" + " " + film.title + ",",
    "Studio:" + " " + film.studio + ",",
    "Rating:" + " " + film.rating
);


//! Task - 1 => Class - Movie with getPG method :-
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG")
    }
};
const films = [
    new Movie("Casino Royale", "EON Productions", "PG13"),
    new Movie("Vikram", "RKFI", "Not Rated"),
    new Movie("Intersteller", "Paramount Pictures", "PG-13"),
    new Movie("Deadpool", "Marvel Studios", "PG"),
    new Movie("Joker", "Warner.Bros", "PG"),
    new Movie("Black Adam", "DC Films", "PG-13"),
    new Movie("John Wick", "87Eleven Productions", "PG")
];
const RMovies = Movie.getPG(films).sort();
console.log(RMovies);





//! Task - 2 => Class - Circle :-
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    set Radius(n){
        this.radius = n;
    }
    get Radius(){
        return this.radius;
    }
    set Color(o){
        this.color = o;
    }
    get Color(){
        return this.color;
    }
    get toString(){
        return `"Circle[radius = ${this.radius}, color = ${this.color}]"`
    }
    get Area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get Circumference(){
        return 2*Math.PI*this.radius;
    }
};
const circle1 = new Circle("2.0", "Blue");
console.log(circle1);
console.log("Radius :" + " " + circle1.Radius);
console.log("Color :" + " " + circle1.Color);
console.log(circle1.toString);
console.log(circle1.Area);
console.log(circle1.Circumference);





//! !Task - 3 => Class - Person : -
class Person {
    constructor(name, age, dob, gender, description) {
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.description = description;
    }
};
const Ajith = new Person("AJ", "25", "11-03-1999", "Male", "Full Stack Developer");
console.log(
    "Name :" + " " + Ajith.name + ",",
    "Age :" + " " + Ajith.age + ",",
    "DOB :" + " " + Ajith.dob + ",",
    "Gender :" + " " + Ajith.gender + ",",
    "Job Description :" + " " + Ajith.description
);





//! Task - 4 => Class - Uber : -
class Uber {
    constructor(price, km) {
        this.price = price;
        this.km = km;
    }
    set Cost(a){
        this.price = a;
        // this.km = a;
    }
    set Kilometer(b){
        this.km = b;
    }
    get cost(){
        return this.price*this.km;
    }
};
const ride = new Uber(20,10);
console.log("Uber price :" + " " + ride.cost);
