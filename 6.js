/*Input: Number 100
output:difference between the sum of the squares 100 natural numbers and the square of the sum of same.
Examples:1^2 + 2^2 + ... + 10^2 = 385
(1 + 2 + ... + 10)^2 = 552 = 3025
result = 2640
steps:

1.Find sum of 100 natural numbers using reduce and square it.
3.Find squares of 100 naturals  numbers and add using reduce */
//functions:reduce(),sum()

function reduce (array, combine, start) {
	var current = start;
    for (var i = 0; i < array.length; i++)
		current = combine(current, array[i]);
    return current;
}
function filter (array, test) {
    var passed = [ ];
    for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
	  	passed.push(array[i]);
    }
    return passed;
}
var sum = function (n) {  
	var x = [];
    for(var i = 0; i < n; i++) {
       x[i] = i+1;
 	}//debug(x);
//Using resuce() to find sum of 100 natural nos.
/* Using reduce to find sum*/
    var sq = reduce(x, function(a, b) {
        return a + b;
    }, 0);
  //Squaring the above result
    sq *= sq;//debug(sq);
/* Using reduce to find sum of sqrares*/
    var sq1 = reduce(x, function(a, b) {
    	return a + b * b;
    }, 0);//debug(sq1);
    var diff = sq - sq1;
    debug(diff);
}

sum(100);
