// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,25)          // months 0 se starting
// let myCreatedDate = new Date(2025,0,25 ,5,3)      //time wgeraa aise daal skate
let myCreatedDate = new Date("01-14-2025"); //(yy-mm-dd) format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // cuz month 0 se start in JS
console.log(newDate.getDay());

//      `${newDate.getDay()} and the timeis ${. }`

newDate.toLocaleString("default", {
  weekday: "long",
});
