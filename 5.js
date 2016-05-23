/*the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/
//Input: Number from 1 - 20
//output:smallest no. dvisible by all of these nos.
/* Example:2520 is divisible by all nos. from 1-10

Nos.from 1-10:=>1,2,3,4,5,6,7,8,9,10

Multiples of:1=1....
Multiples of:2=2,4,6,8,10,12,14
Multiples of:3=3,6,9,12,15,18,21,24,27
Multiples of:4=4,8,12,16,20,24,28,32,36,40,44
Multiples of:5=5,10,15,20,25,30,40
Multiples of:6=6,12,18,24,30,36,42
Multiples of:7=7,14,21,28,35,42,49
Multiples of:8=8,16,32,40,48
Multiples of:9=9,18,27,36,45,54
Multiples of:10=10,20,30,40.....

for 2,4,8=8
for 3,9 =9
for 5,10=10
for 6,7=42

now for 8,9,10,42
for 10,42 = 420/(2*5,3*2*7) =  420/2 = 210

for 8,9 =72/(2*2*2),3*3=72 
for 72,210=210*72/(7*3*2*5),(3*3*2*2*2)=210*72/6=2520
*/
//lcm(a,b) :to find the lcm of given two numbers
//call lcm recursively and pass last lcm and next number
var lcm = function (a, b) {
	var am = a, bm = b, i = 1, j = 1;
	while (am !== bm) {
        if(am > bm)
            am -= bm;
        else
            bm -= am;
    }
    return (a * b ) / am;
}
debug(lcm(2,8));
var temp = 1;
for( var i = 2; i <= 20; i++){
	temp = lcm (temp, i)
}
debug(temp);
    

