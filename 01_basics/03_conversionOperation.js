let score = "33abc";

// console.log(typeof score );
// console.log(typeof score );

let valueInNumber = Number(score);
// console.log(typeof valueInNumber );
// console.log( valueInNumber );

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Anmol";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Anmol" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue );

// console.log(2+2);  // Addistion
// console.log(2-2); //Subtraction
// console.log(2*2); //Multiplication
// console.log(2**3); // 2 raised Power 3
// console.log(2/3); //Divide
// console.log(2%3); //Remainder

let str1 = "hello";
let str2 = " Anmol";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1  + "2" );
// console.log("1" + 2 + 2 + 3 );
// console.log(1 + 2  + "2");

// console.log(+true);
// console.log(+"");

let x = 3;
const y = x++;
console.log(x);

// console.log(`x: ${x}  y: ${y}`);
// x is 4; y is 3

let a = 3;
const b = ++a;
console.log(`a: ${a}  b: ${b}`);
// a is 4; b is 4

// ++(++x);   // SyntaxError: Invalid left-hand side expression in prefix operation
