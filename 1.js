/*Multiples of 3 and 5
Input: Number n
output:sum of multiples of 3 and 5 below 1000 
Examples:3, 5, 6, 9
result = 23
steps:

1.Filter all the multiples of 3 & 5 below 1000 using filter()
3.Add those numbers recursively using reduce*/
//functions:Filter(),reduce(),sum()

function reduce (array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine (current, array[i]);
    return current;
}
function filter (array, test) {
    var passed = [ ];
    for (var i = 0; i < array.length; i++) {
        if (test (array[i]))
        passed.push (array[i]);
    }
    return passed;
}
var sum = function (n) {  
    var x = [ ];
    for (var i = 0; i < n; i++){
        x[i] = i;
    }
//Using filter to make an array of multiples of 5 & 3
    var p = filter (x, function (y) {
        if (y < 3)    return false;
        if (y % 3 === 0 || y % 5 === 0 )    return true;
        return false;
    });//debug(p);
/* Using reduce to find sum*/
    debug (reduce (p, function (a, b) {
        return a + b;
    }, 0));
    
}

sum(1000);
