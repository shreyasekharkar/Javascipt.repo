const User = {
    _email: 's@rc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tree = Object.create(User)
console.log(tea.email);