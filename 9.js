var a,b,c,x,s,p=0;
s = 1000;
var check = function () {
	for (c = 1; c < s; c++)
    	for (b = 1; b < 1000; b++)
   			for (a = 1;a < s;a++) {
    			x = a * a + b * b;
    			c = Math.sqrt(x);
    			if (a + b + c == s) {
     				p = a * b * c;
     				return p;       
    			}  		
   			}
}
check();
debug("a:"+a+" b:"+b+" c:"+c+" Product :"+p);
