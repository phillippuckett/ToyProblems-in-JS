// Q: The code does not execute properly. Why not?
function multiply(a, b) {
    a * b
}

// A: Because nothing is being returned.
var multiply = function(a, b) {
    return a * b;
};