const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.email
        this.office = office;
        this.role = "Manager"
    }

    getRole(){
        return this.role
    }

    validateNumber(){
        if (/^\d*(\.\d+)?$/.test(this.office)){
            return true
        } else {
            return false
        }
    }

    validateEmail(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
            return true
        } else {
            return false
        }
    }
}

module.exports = Manager;