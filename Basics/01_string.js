console.log("Hello World");

// *******************// String is a object not an array ******************************


const str=new String("My name is Sairana")
console.log(str);
// console.log(trim(str));

// 
// const name = "Satya"
                 // or
const name =new String("Satya");
console.log(name.__proto__);   // this is showing name is an object o/t is {}

// const count = 50
                 // or
const count1 = new Number(25)
// console.log(name+" " + count+" "+ "is here ");

// console.log('My name is ${name} and My count is ${count}');  this is wrong 
console.log(`My name is ${name} and my count is ${count1} `); // this is correct 
console.log(`My name is ${name.toUpperCase()} and my count is ${count1} `);

// you can convert upper lower length etc 

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log('Here is a code for testing');
console.log(str.charAt(3));
// console.log(str.bold());
// console.log(str.big());
// console.log(str.length);
// console.log(str.replace('name','nema'));
// console.log(str.search("name"));
// console.log(str.search(/nAme/i)); // this is for case sensitive check
// console.log(str.endsWith("a"));
// console.log(str.endsWith("A"));
// console.log(str.endsWith("m"));
// console.log(str.endsWith("M"));
// console.log(str.replace('name', 'aim'));

// console.log(str.lastIndexOf("is"));

 console.log(str.trimLeft);
 



//             Substring                    //

const newString = new String("My name is dio")
// const newString1 = newString.substring(0, 4)
const newString1 = newString.substring(8, newString.length-1)
console.log(newString.length);
console.log(newString1);



//////     slice  /////////

const anotherString = newString.slice(0,3)
console.log(newString);
console.log(anotherString);

///////////   splice    ///////////     **************this is not for String it is only for Array   

// const anotherString1 = newString.splice(0,3)
// console.log(newString);
// console.log(anotherString1);






