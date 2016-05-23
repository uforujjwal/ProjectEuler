/*Input: Number n
output:sum of even numbers of fibonacci sequence upto 4000000 
Examples:1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
result = 44
steps:
1. Find the fibonacci series
2.Filter all the even numbers in series
3.Add those numbers recursively using reduce*/
//functions:Filter(),reduce(),sum()

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
	var x = [1,2],i = 2;
	while (x[i-1] + x[i-2] < n) {
		x[i] = x[i-2]+x[i-1];
		i++;
	 }

//Using filter to make an array of even numbers
	var p = filter (x, function (y) {   
		if (y % 2 === 0) return true;
		return false;
	});
/* Using reduce to find sum*/
	debug(reduce(p, function(a, b) {
		return a + b;
	}, 0));
}

sum(4000000);
