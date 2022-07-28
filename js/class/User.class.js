'use-strict';
// sukuriam klase
export default class User {
  constructor(vardas, pavarde, metinisAtlygis) {
    this.firstName = vardas;
    this.lastName = pavarde;
    this.salary = metinisAtlygis;
    this.createdAt = new Date().toLocaleTimeString();
  }

  // metodas
  fullName() {
    const nameString = `${this.firstName} ${this.lastName}`;
    console.log(nameString);
    return nameString;
  }

  getMonthlyPay() {
    const monthlyPay = (this.salary / 12).toFixed(2);
    console.log(`${this.fullName()} Monthly salary is: 💸${monthlyPay}`);
    return monthlyPay;
  }
}
