// Array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["iron man" ,"yoyo"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

//Array methods

// myArr.push(6,7,5)
// myArr.push(9)
// myArr.pop(4)


// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr );


//Slice,  Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);
