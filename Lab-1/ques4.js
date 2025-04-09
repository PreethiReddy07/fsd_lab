function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.study = function () {
        console.log(`${this.name} is studying hard!`);
        this.grade += 1;
    };

    this.getGrade = function () {
        return this.grade;
    };
}

const student1 = new Student("Alice", 30);
const student2 = new Student("Bob", 90);

student1.study();
student2.study();

console.log(`${student1.name}'s grade is now: ${student1.getGrade()}`);
console.log(`${student2.name}'s grade is now: ${student2.getGrade()}`);