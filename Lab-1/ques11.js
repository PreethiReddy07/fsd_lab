class Animal {
    speak() {
        return "Animals can speak";
    }
}
class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}
let obj = new Animal();
console.log(obj.speak());
let obj2 = new Dog();
console.log(obj2.speak());