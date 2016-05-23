/*10001st prime no.
input: 10001 the size of array having prime numbers
output: 10001st prime number
Examples:2, 3, 5, 7, 11, and 13 6th prime no. is 13
*/

/*
1.Modify filter as we don' now the array size
2.Find the  prime number and keep storing in an array.
Numbers divisible by only 1 and itself:are called prime nos.
*/
//modify filter() to take one argument and keep checking for array length to be 10001
function filter(test) {
	var passed = [ ];
	for (var i = 0; ; i++) {
		if (test(i))
			passed.push(i);
		if(passed.length === 10001)    break;
	}
	return passed;
}
//Using filter() to make an array of prime numbers
var p = filter(function(y){
	var m = Math.sqrt(y);
	if (y === 2)	return true;
	if(y % 2 === 0 || y < 2)	return false;
	for(var i = 3; i <= m; i++)
	if(y % i === 0)	   return false;
	return true;
});

debug(p[10000]);
