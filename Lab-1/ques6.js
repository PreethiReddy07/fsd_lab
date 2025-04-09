function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.describe = function describe() {
        return "Name: " + this.name + " Age: " + this.age;
    }
}


function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
    Student.prototype.study = function study() {
        return this.name + " is studying for grade " + this.grade;
    }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let Studentobj = new Student("John", 30, "A");
console.log(Studentobj.describe());
console.log(Studentobj.study())