/*Input: Number n:600851475143
output:largest prime facor of 600851475143 
Examples:
n = 13195 prime factor 5,7,13,29
steps:
1. Find the factors of n
2.Filter all the prime numbers in factors
//functions:checkDiv(): to see if current no has any prime factors
,lprime():to make an array of prime factors of given no*/
function reduce (array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine (current, array[i]);
    return current;
}
var checkDiv = function (ar,b) {
    return ar.every(function (val) {
        return b % val
    })
    }
var lprime = function (n) {  
    var p = [2],a = 2;
    var b = a+1;
    while (b <= n) {
        if (Math.floor(Math.sqrt (b)) <= a) {//debug("1:"+p.length);
            if(!checkDiv(b,p)) {                 
                b ++;  //debug("2:"+p.length);              
            }
            else {
                if(n % b === 0){
                    p.push (b);//debug("3:"+p.length);
                    b ++;
                }
                else b++;
            }
        }
        else a ++;    
    }
    return p;  
}
//debug(checkDiv(2,[2,3]));
var l = lprime(10);

debug(l);