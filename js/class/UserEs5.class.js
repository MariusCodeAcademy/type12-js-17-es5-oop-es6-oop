'use-strict';

export default function UserES5(vardas, pavarde, metinisAtlygis) {
  this.firstName = vardas;
  this.lastName = pavarde;
  this.salary = metinisAtlygis;
  this.createdAt = new Date().toLocaleTimeString();

  // metodas
  this.fullName = function () {
    const nameString = `${this.firstName} ${this.lastName}`;
    console.log(nameString);
    return nameString;
  };

  this.iAm = function () {
    return `As esu ${this.fullName()} objektas ir esu sukurtas ${this.createdAt}`;
  };
}
