/*Find the largest palindrome made from the product of two 3-digit numbers.*/
/*Input:# 3 digit numbers to check if the product of any two of them is a palindrome
output:Two 3 digit numbers that when multiplied gives a palindrome and is the largest of all such palindromes
Examples:9009 = 91 × 99,for a 2-digit 

Palindrome : reads same from both front and backwards.

1.have a list of all 3 digit nos.(1st check for a 2-digit no.)
2.check from backwards if all possible product of two nos. is palindrome
3.keep comparing with a reference variable for largest and replace if required.

functions:isPalin():check for palindrome
*/

var isPalin = function (p) {
	var temp, rev = 0, rem;
	temp = p;
	while (temp > 0) {
		rem = temp % 10;
		rev = rev * 10 + rem;
		temp = Math.floor(temp / 10);
	} 
 // debug(rev);
	if(rev === p)	return true;
	else    return false; 
}
//debug(isPalin(9009));
//Array of all 3-digit nos.
var num = [];
for (var i = 0; i <= 899; i++) {
	num[i] = (i + 100);
}
//debug(num);
var largest = 999, n;
for (var i = 0; i <= 899; i++) {
	for (var j = 0; j <= 899; j++) {
		n = num[i] * num[j];
		if(isPalin(n)){//debug(n);
			if(n > largest) largest = n;   
		}
	}
}
debug(largest);







