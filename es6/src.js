/**
 * Created by chan on 2/14/17.
 */

// ES6 Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log("Person: my name is " + this.name);
    }
}

class Teacher extends Person {

}

let p = new Person('Hans', 18);
let t = new Teacher('Jim', 20);