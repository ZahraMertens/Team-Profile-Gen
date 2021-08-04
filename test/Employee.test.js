const Employee = require("../lib/Employee");

describe("Employee", ()=>{
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

    it("Employee to be an object", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object")
    })

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
})