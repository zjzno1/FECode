var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = 'init name';
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("I am " + this.name + ", age " + this.age + ", " + msg);
    };
    return Person;
}());
var tom = new Person('tom', 18);
console.log(tom.name);
console.log(tom.sayHi('asdf'));
// console.log(tom.age);
