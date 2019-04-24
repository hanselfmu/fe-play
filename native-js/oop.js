console.log('testing OOP stuff');

class PersonByClass {
  ageSymbol;
  constructor(name, age) {
    const self = this;
    privatize(self, 'name', name);
    this.ageSymbol = Symbol('age');
    this[this.ageSymbol] = age;
  }

  getAge() {
    return this[this.ageSymbol];
  }
  setAge(newAge) {
    this[this.ageSymbol] = newAge;
  }
}

const PersonByFunc = (function () {
  const names = new WeakMap();
  const ages = new WeakMap();
  function Person(name, age) {
    names.set(this, name);
    ages.set(this, age);
  }

  Person.prototype.getName = function () {
    return names.get(this);
  }

  Person.prototype.setName = function (newName) {
    return names.set(this, newName);
  }

  Person.prototype.sayName = function() {
    console.log(names.get(this));
  }

  return Person;
})();

// downside is that a new getter-setter pair gets generated for every new object
function privatize(self, fieldName, initialVal) {
  const defaultSet = () => {
    throw new TypeError('cannot modify member function');
  };
  let _val = initialVal;
  const cappedFieldName = fieldName[0].toUpperCase() + fieldName.substring(1);
  Object.defineProperty(self, `get${cappedFieldName}`, {
    get() {
      return function () {
        return _val;
      }
    },
    set: defaultSet,
  });
  Object.defineProperty(self, `set${cappedFieldName}`, {
    get() {
      return function (v) {
        _val = v;
      }
    },
    set: defaultSet,
  });
}

const pbc = new PersonByClass('chan', 29);
const pbf = new PersonByFunc('chan', 29);

/*
Classical Inheritances
There are three common ways:
1. class extends;
2. Object.setPrototypeOf
3. Object.create
*/
class Driver extends PersonByFunc {
  constructor(car) {
    super();
    this.car = car;
  }
  sayName() {
    console.log(`this driver is ${this.getName()} and has a car ${this.car}`);
  }
}

function Student(name, age, grade) {
  PersonByFunc.call(this, name, age);
  this.grade = grade;
}

Student.prototype.sayName = function() {
  console.log(`this student is ${this.getName()} with grade ${this.grade}`);
}

Object.setPrototypeOf(Student.prototype, PersonByFunc.prototype);

function Teacher(name, age, tenure) {
  PersonByFunc.call(this, name, age);
  this.tenure = tenure;
}

// Object.create also requires explicit (re)assignment of constructor because constructor is not enumerable.
// In fact, to resemble the original inheritance, constructor should be defined using Object.defineProperty.
Teacher.prototype.sayName = function() {
  console.log(`this teacher is ${this.getName()} and does${this.tenure ? '' : ' not'} have tenure`);
}
Teacher.prototype = Object.assign(Object.create(PersonByFunc.prototype, {
  constructor: {
    value: Teacher,
  }
}), Teacher.prototype);
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
// });

const dri = new Driver('han', 30, 'bmw');
console.log(dri);
const tea = new Teacher('pucca', 28, true);
console.log(tea);
const stu = new Student('pucca', 28, 'A');
console.log(stu);

/*
prototypal Inheritance

*/
