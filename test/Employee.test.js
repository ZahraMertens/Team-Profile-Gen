const Employee = require("../lib/Employee");

describe("Employee", () =>{

    describe("Validate input for employee", () => {
        
        it("Valid type of email", () => {
        const email = "hello@test.net";
        const emp = new Employee("name", "id", email)
        expect(emp.validateEmail()).toBe(true)
        })
    
        it("Invalid type of email", () => {
            const email = "hellotest.net";
            const emp = new Employee("name", "id", email)
            expect(emp.validateEmail()).toBe(false)
        })

        it("Validate if id contains special characters", () =>{
            const id = "12Fg@"
            const emp = new Employee("name", id)
            expect(emp.validateId()).toBe(false)
        })

        it("Validate that ID only contains upper case and/or lower case letters and numbers", () =>{
            const id = "12Fg"
            const emp = new Employee("name", id)
            expect(emp.validateId()).toBe(true)
        })
    })

    describe("Data type to be object", () => {
        
        it("Employee to be an object", () => {
            const emp = new Employee();
            expect(typeof(emp)).toBe("object")
        })

        it("Employee to be an object to be false", () => {
            const emp = new Employee();
            expect(emp).toMatchObject(emp)
        })
    })


    describe("Constructor testing", () => {

        it("Gets name via cunstructor parameter", () => {
            const name = "Jamie";
            const paramName = new Employee("Jamie")
            expect(paramName.name).toBe(name)
        })

        it("Gets ID via cunstructor parameter", () => {
            const idValue = 12;
            const paramId = new Employee("name", idValue)
            expect(paramId.id).toBe(idValue)
        })

        it("Gets Email via constructor", () => {
            const email = "test@test.com"
            const emp = new Employee("name", "id", email)
            expect(emp.email).toBe(email)
        })

        it("getRole() returns 'Employee'", () => {
            const emp = new Employee("name", "id", "email")
            expect(emp.getRole()).toBe("Employee")
        })

        it("getID() returns 'this.id'", () => {
            const emp = new Employee("name", "id", "email")
            expect(emp.getID()).toBe(emp.id)
        })

        it("getName() returns 'this.name'", () => {
            const emp = new Employee("Lisa")
            expect(emp.getName()).toBe("Lisa")
        })

        it("getEmail() returns 'this.email'", () => {
            const emp = new Employee("Lisa", "id", "zahra@gmx.net")
            expect(emp.getEmail()).toBe(emp.email)
        })
        
    })


    
})