person = {
    name: "Chethna",
    age: 15,

    greet: function () {
        return `Welcome ${this.name} Your age is ${this.age}`
    }
    ,
    isAdult: function () {
        if (this.age >= 18) {
            return `${this.name} you are now considered as an adult`
        }
        else {
            return `${this.name} you are not considered as an adult`
        }
    }
}

console.log(person.greet())

console.log(person.isAdult())