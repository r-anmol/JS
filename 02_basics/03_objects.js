//singleton
// Object.create



//object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Anmol",
    "fullname": "Anmol Ratan",
   [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "yoyo@gmail.com",
    isloggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);           // 100% accurate way
// console.log(JsUser["fullname"]);
// console.log( JsUser[mySym])


JsUser.email = "anmol@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "anmol@microsoft.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
