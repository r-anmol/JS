//const instaUser = new Object()        // singleton Object
//const instaUser = {}                  // non singleton object

const instaUser = {};
instaUser.id = "123abc";
instaUser.name = "Jesse";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
  email: "sum@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Anmol",
      lastname: "Ratan",
    },
  },
};
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign( {}, obj1 , obj2)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "blah@.com",
  },
  {
    id: 1,
    email: "blah@.com",
  },
  {
    id: 1,
    email: "blah@.com",
  },
];

// console.log( users[1].email);

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


// ************************* De-Structuring object************************

const course = {
  coursename: "js",
  price: "999",
  courseInstructor: "Anmol"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);


// ************************JSON API************************


// {
//   "name": "Anmol",
//   "coursename": "js",
//   "price": "free"
// }
//json me key aur value dono string hoti hai.. but number aur boolean value w/o in string
