console.log("we are reading date and time");

console.log(new Date(8.64e15).toString());      // Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)

console.log(new Date(8.64e15 + 1).toString());        // it is showing invalid date

let myDate = new Date()

console.log(myDate.toString());      //  Wed Jan 22 2025 09:36:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    ////  Wed Jan 22 2025
console.log(myDate.toLocaleString());  //   1/22/2025, 9:36:03 AM
console.log(myDate.toLocaleDateString()); // 1/22/2025
console.log(typeof myDate);          // object type


// i want to print our date 

let myCreateDate = new Date(2024, 5, 23)
console.log(myCreateDate);    // 2024-06-23T00:00:00.000Z
console.log(myCreateDate.toDateString());  // Sun Jun 23 2024

let myCreateDate1 = new Date("2024-03-26, 7, 3, 20") // invalid date
console.log(myCreateDate1);
console.log(myCreateDate1.toLocaleString());


let timeStamp = Date.now()
console.log(timeStamp);      // 1737538995200 in milisecond

console.log(Math.floor(Date.now()/1000)); // this is in second

let newDate = new Date()
console.log(newDate.getDay());  // 3
console.log(newDate.getFullYear()); // 2025

console.log(newDate.getHours());  // this is givving wrong ans 12 but output should be like If the current time is 10:30 AM, the output will be 10.






