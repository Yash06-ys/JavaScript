// There are different datatypes for JS. Lets have a look.
var x = 10; //Number Datatype
var y = "Yash Shrivastava";//String Datatype
var z = '10';//This is also a string Datatype
var a = {firstname: 'Yash', lastname: 'Shrivastava'};//Object Datatype

/*If we add a numeric datatype and string datatype.
JS will automatically convert numeric datatype to string datatype.*/

var x = 10;
var y = 'yash';
var z = x+y;
console.log(z);

//JS execute the code and we get output as 30Hello Beautiful.

var x = 10;
var y = 20;
var z = 'Hello Beautiful';
var total = x+y+z;
console.log(total);

//Note the difference now with slight change in the code.We get the output as Hello Beautiful1020.

var x = 10;
var y = 20;
var z = 'Hello Beautiful';
var total = z+x+y;
console.log(total);

/*JS is very Dynamic. You can store different values in the variable.
It will return the last updated value for the variable*/

var x;
x = 10;
x = 'Yash'
console.log(x);

/*
In JS we can keep the strings between Single Quote or Double Quote.
*/ 
var x = 'Yash';
var y = "Yash";

/*
If you have single quotes in your sentence. Keep the sentence within Double Quotes.
*/
var x = "It's alright"
console.log(x);
