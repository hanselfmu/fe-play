// utils
function checkPrototypeRelatedProperties(obj) {
    console.log(obj);
    console.log(obj.__proto__);
    console.log(obj.prototype);
}

// setup
var Base = function (age) {
    this.name = 'base';
    this.age = age;

    this.act = function() {
        console.log('base act: do nothing');
    }
};

var constructorPatternChild = new Base(3);

checkPrototypeRelatedProperties(constructorPatternChild);

