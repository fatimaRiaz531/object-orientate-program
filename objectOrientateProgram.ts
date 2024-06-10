//  learning outcomes : 

//                   Their are some rules to follow the ojects and make a program. object & intenses same meanings.
//                   These have 4 pillors/ rules/ principles

// class members:
//                   classes are use to makr objects and we call as blue print

// example 1:
class Person{
    name= "Fatima";
    age = 20;
    walk = 'walking';
    // constructor function
    constructor(name:string, age:number){
    this.name= name;
    this.age =age;
    
    }
    Walk(){
    console.log("walking");
    }
} 
let p1 = new Person("Fatima", 20);            // these function is used to call a object class function
console.log(p1.age);
console.log(p1.name);
console.log(p1.walk);

// example 2:

class Dog{
    name: string;
    constructor(name: string){
        this.name= name;
    }
    walk(){
        console.log("walking...");
    }
    woof(){
        console.log("woof woof!!!");
    }
}
let dog1= new Dog("Tommy");
console.log(dog1)

// example 3:

class Cat{
    name: string;
    constructor(name: string){
        this.name= name;
    }
    walk(){
        console.log("walking...");
    }
    woof(){
        console.log("meow meow!!!");
    }
}
let cat1= new Dog("sweetie");
console.log(cat1)