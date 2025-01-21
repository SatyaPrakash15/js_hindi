const score =70
console.log(score);
console.log(typeof score);


const balance = new Number(1000)
console.log(balance);
console.log(typeof balance);
console.log(balance.toString());
console.log(balance.toFixed(3));

const anotherValue = 23.89899
const anotherValue1 = 123.89899
const anotherValue2 = 1123.89899
console.log(anotherValue.toPrecision(3));   // return value of this is string  // this give 23.9
console.log(anotherValue1.toPrecision(3));   // this give me 124
console.log(anotherValue2.toPrecision(3));   // This will give wrong or garbage value 

const hundred = 10000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));


//// Math ///////   this is an object in the inner of this object many property exist

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.sqrt(4));

/*
JavaScript provides a built-in Math object with various methods for mathematical operations.
 Here's a list of commonly used Math methods:

1. Basic Math Methods:

Math.abs(x): Returns the absolute value of x.
Math.ceil(x): Rounds x up to the nearest integer.
Math.floor(x): Rounds x down to the nearest integer.
Math.round(x): Rounds x to the nearest integer.
Math.trunc(x): Returns the integer part of x (removes any fractional digits).


2. Exponential and Logarithmic Methods:

Math.exp(x): Returns e^x, where e is Euler's number.
Math.log(x): Returns the natural logarithm (base e) of x.
Math.log10(x): Returns the base-10 logarithm of x.
Math.log2(x): Returns the base-2 logarithm of x.
Math.pow(x, y): Returns x raised to the power of y (x^y).


3. Roots and Powers:

Math.sqrt(x): Returns the square root of x.
Math.cbrt(x): Returns the cube root of x.


4. Trigonometric Methods:

Math.sin(x): Returns the sine of x (in radians).
Math.cos(x): Returns the cosine of x.
Math.tan(x): Returns the tangent of x.
Math.asin(x): Returns the arcsine of x (in radians).
Math.acos(x): Returns the arccosine of x.
Math.atan(x): Returns the arctangent of x.
Math.atan2(y, x): Returns the arctangent of the quotient y/x.


5. Min, Max, and Random:

Math.min(a, b, c, ...): Returns the smallest of the given numbers.
Math.max(a, b, c, ...): Returns the largest of the given numbers.
Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).


6. Constants:

Math.PI: Returns the value of π (3.14159...).
Math.E: Returns Euler's number (2.718...).


Example Usage:


javascript

console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));   // 4
console.log(Math.random());   // Random number between 0 and 1
console.log(Math.PI);         // 3.141592653589793
Would you like examples or explanations for any specific functions?
*/






