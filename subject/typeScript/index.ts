class Person {
  name: string = 'init name';
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHi(msg: string): void {
    console.log(`I am ${this.name}, age ${this.age}, ${msg}`);
  }
}

const tom = new Person('tom', 18);

console.log(tom.name);
console.log(tom.sayHi('asdf'))
// console.log(tom.age);