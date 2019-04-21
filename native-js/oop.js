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
