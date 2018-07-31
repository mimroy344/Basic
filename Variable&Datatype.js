/********************
 Variable Declaration
 *********************/
var a = 2;
var b = 2;
var c = 2;
var d = 4;

var a = 2,b = 2,c = 2,d = 4;

var a = b = c = 2;
var d = 4;

console.log(a,b,c);

/****************
    Data type
******************
Data type in Javascript:
javascript has 7 data type 6 data type that are primitives:
1.Number
2.String
3.Boolean
4.Null
5.Undefine
6.Symbol    and 
7.Object
*/

var exponential=1e2;
var n= -12;
var earthIsRound = true;
var word = "earth";
const pi = 3.14150;

console.log(typeof pi);

/*************problem****************/
var a =1;
var c = a+++1;

(function(){
    var x = y = 5;
  })();
  
  console.log("x defined? " + (typeof x !== 'undefined'));
  console.log("y defined? " + (typeof y !== 'undefined'));

//JavaScript uses 32-bit signed numbers. Bitwise NOT Operator (~) was used:
console.log(~true);
// var a = true;
// ~a = - (a + 1)
// ~true == ~1 // true is always 1

// difference between String and Number Concatination 
var a = "1"; // string
a = a + 0; //  "10" the + operator concatenate the strings
a = a - 1; // 9 the - operators convert string to a number
a = a + 1; // 10

var a = -1; var b = 0.25; alert( a == ~b^0 );

/*.....................................
 simple Variable & data type example
.......................................*/

var name = 'Mim Roy';
var roll = 290229;
var student = true;
var status = null;
var address;

console.log(name , typeof name);
console.log(roll,typeof roll);
console.log(student,typeof student);
console.log(status,typeof status);
console.log(address,typeof address);
/*.....................................
        data type example
.......................................*/
var a = 14;
var b =14;
var c = 14;
var d = 15
//data assign of Multiple Variable in one line
var a = 14,b = 14,c = 14,d = 15;
//simple 
var a = b = c =14;
var d = 15
console.log(a,b,c,d);
