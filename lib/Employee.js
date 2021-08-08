class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    validateEmail(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
            return true
        } else {
            return false
        }
    }

    getName(){
        return this.name
    }

    getID(){
        return this.id
    }

    validateId(){
        if (/^[A-Za-z0-9]*$/.test(this.id)){
            return true
        } else {
            return false
        }
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}

module.exports = Employee;