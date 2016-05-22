// Q: Correct this code, so that the greet function returns the expected value.
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(otherName) {
    return "Hi " + otherName + ", my name is " + name;
}

// A: add "this" to the object property 'name'
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(otherName) {
    return "Hi " + otherName + ", my name is " + this.name;
}

/*NOTES*/

// Example //
var Person = function(name) {
    this.name = name;
};

Person.prototype.getName = function() {
    return this.name;
};

var first = new Person('Phillip');
var second = new Person('Sarah');

document.write('first = ' + first.getName() + '<br/>');
document.write('second = ' + second.getName());
