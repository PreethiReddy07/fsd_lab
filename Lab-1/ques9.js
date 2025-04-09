class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return "Area: " + (this.width * this.height);
    }
}
let obj = new Rectangle(2, 3);
console.log(obj.area());