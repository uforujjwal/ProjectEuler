/*Sum of all primes below 2000000
input:  prime numbers below 2000000
output: Sum of these prime numbers
Examples:Primes below 10 
input: 2 + 3 + 5 + 7 
output:17
*/

/*
1.Find the  prime number below 10
Numbers divisible by only 1 and itself:

2.keep adding all the prime numbers.


var sum = function (n) {
    var i = 2, s = 0
    while (i <= n) {
        if (isPrime (i))
            s += i;
        i++;
    }
    return s;
}

var isPrime = function (n) {
    var i = 2,sqn = Math.sqrt (n);
    while (sqn % i !== 0)
        i++;
    if (i === sqn)
        return true;
    else 
    	return false;
}
*/

function reduce (array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
    	current = combine(current, array[i]);
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
    for(var i = 0; i <= n; i++)
        x[i] = i;

//Using filter() to make an array of prime numbers
    var p = filter (x, function (y) {
        var m = Math.sqrt (y);
        if (y === 2) return true;
        if(y % 2 === 0 || y < 2) return false;
        for(var i = 3; i <= m; i++)
            if(y % i === 0) return false;
        return true;
    });
/* Using reduce() to find sum*/
    console.log (reduce (p, function (a, b) {
        return a + b;
    }, 0));

}
sum(2000000);
