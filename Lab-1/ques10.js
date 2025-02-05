class bankAccount {
    constructor(accholder, balance) {
        this.accholder = accholder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return "After deposit: " + this.balance;
    }
    withdraw(amount) {
        this.balance -= amount;
        return "After withdraw: " + this.balance;
    }
    transferAmount(account, amount) {
        this.balance -= amount;
        return "The amount of " + amount + " is transferred to " + account;
    }
}
let obj = new bankAccount("Shreya", 1000000);
console.log(obj.balance);
console.log(obj.deposit(2000));
console.log(obj.withdraw(1000));
console.log(obj.transferAmount("Sana", 3000));
console.log(obj.balance);