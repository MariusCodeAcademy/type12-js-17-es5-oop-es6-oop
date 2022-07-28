'use strict';

import User from './class/User.class.js';
import UserES5 from './class/UserEs5.class.js';

console.log('main.js');

console.groupCollapsed('User class es6');

{
  const u1 = new User('James', 'Bond', 100000);

  const u2 = new User('Mike', 'Tyson', 452220);
  const u3 = { firstName: 'Serbentautas', lastName: 'Bordiuras', salary: 890000 };

  [u1, u2].forEach((uOb) => console.log(uOb.iAm()));

  u2.fullName();
  u2.getMonthlyPay();
}
console.groupEnd();

console.group('User class ES5');

const u1 = new UserES5('James', 'Bond', 100000);
const u2 = new UserES5('Mike', 'Tyson', 452220);

[u1, u2].forEach((uOb) => console.log(uOb.iAm()));

console.groupEnd();

Array.prototype.avg = function () {
  let total = 0;
  this.forEach((nr) => {
    total += nr;
  });
  return total / this.length;
};

[1, 2, 5].avg();
console.log('[1, 2, 5].avg() ===', [1, 2, 5].avg());
