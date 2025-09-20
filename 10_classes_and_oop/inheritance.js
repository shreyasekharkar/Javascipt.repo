class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ram = new Teacher("chai", "Ram@teacher.com", "123")

chai.logMe()
const masalaCoffee = new User("masalaCoffee")

masalacoffee.logMe()

console.log(coffee instanceof User);