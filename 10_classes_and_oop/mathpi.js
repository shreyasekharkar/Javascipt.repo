const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'masala coffee',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("ram ji is our god");
    }
}

console.log(Object.getOwnPropertyDescriptor(ram, "name"));

Object.defineProperty(ram, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(ram, "name"));

for (let [key, value] of Object.entries(ram)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}