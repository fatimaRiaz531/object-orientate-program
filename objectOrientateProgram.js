"use strict";
// class members:
Object.defineProperty(exports, "__esModule", { value: true });
// example 1:
class Person {
    name = "Fatima";
    age = 20;
    walk = 'walking';
    // constructor function
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Walk() {
        console.log("walking");
    }
}
let p1 = new Person("Fatima", 20);
console.log(p1.age);
console.log(p1.name);
console.log(p1.walk);
// example 2:
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walking...");
    }
    woof() {
        console.log("woof woof!!!");
    }
}
let dog1 = new Dog("Tommy");
console.log(dog1);
// example 3:
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walking...");
    }
    woof() {
        console.log("meow meow!!!");
    }
}
let cat1 = new Dog("sweetie");
console.log(cat1);
