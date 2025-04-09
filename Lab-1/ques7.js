let car = {
    make: "Tata",
    model: "Altroz",
    year: 2008,
    getDetails() {
        return "Car's make :" + this.make + " Model: " + this.model + " year: " + this.year;
    }
};
let electricCar = {
    _proto_: car,
    batteryCapacity: 48,
    getBatteryInfo() {
        return "Battery capacity: " + this.batteryCapacity + " amp hours"
    }
};
console.log(car.getDetails());
console.log(electricCar.getBatteryInfo());
console.log(electricCar.getDetails());