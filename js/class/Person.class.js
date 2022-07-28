class Person {
  constructor(vardas, gimimoMetai) {
    this.name = vardas;
    this.birthYear = gimimoMetai;
  }

  hello() {
    return `Hi, I am ${this.name} and I was born in ${this.birthYear}`;
  }
}

class Student extends Person {
  constructor(vardas, gimimoMetai, universitetas) {
    super(vardas, gimimoMetai);
    this.uni = universitetas || 'VDU';
  }

  helloSt() {
    return `${this.hello()}. Beja I am a Student in ${this.uni}`;
  }
}

class VilniusStudent extends Student {
  // prideti konstuktoriuje savybe speaksPolish: true | false
  // prideti metoda speak()
  // `Sveiki as Serbentautas ir (ne)kalbu lenkiskai`
}

const p1 = new Person('Eventas', 1920);
const s2 = new Student('Stidemtas', 1940);
const s3 = new VilniusStudent('Stidemtas', 1940, 'VDU', false);

console.log('p1.hello() ===', p1.hello());
console.log('s2.hello() ===', s2.helloSt());
console.log('s2 ===', s2);
