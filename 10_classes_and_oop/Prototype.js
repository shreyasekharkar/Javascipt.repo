// let myName = "shreyas     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shreyas = function(){
    console.log(`shreyas is present in all objects`);
}

Array.prototype.heyShreyas = function(){
    console.log(`Shreyas says hello`);
}

// heroPower.shreyas()
// myHeros.shreyas()
// myHeros.heyShreyas()
// heroPower.heyshreyas()

// inheritance

const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "masala coffee     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shreyas".trueLength()
"iceCream".trueLength()