/**
 * Created by chan on 2/9/17.
 */

function Parent() {
    this.name = 'parent';
}

var parent = new Parent();
var objCreateChild = Object.create(parent);
var objCreateChild2 = {};
objCreateChild2.__proto__ = Object.create(parent);

var es6ClassChild
