// 1 // Q: The code does not execute properly. Why not?
function multiply(a, b) {
    a * b
}

// A: Because nothing is being returned.
var multiply = function(a, b) {
    return a * b;
};





// 2 // Q: Correct this code, so that the greet function returns the expected value.
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
}

// A:
function Person(name){
  this.name = name;
};

Person.prototype.greet = function(){
  return "Hi my name is " + name;
//   return "Hi " + otherName + ", my name is " + name;
};
