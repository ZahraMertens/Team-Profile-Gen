const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Get the office number from the constructor", () => {
        const officeNumber = 123456
        const man = new Manager ("name", "id", "email", officeNumber)
        expect(man.office).toBe(123456)
    })

    it("Office number must be Integer", () => {
        const number = 1234567
        const man = new Manager("name", "id", "email", number)
        expect(man.validateNumber()).toBe(true)
    })

    it("Office number must be Integer", () => {
        const number = "1234567e"
        const man = new Manager("name", "id", "email", number)
        expect(man.validateNumber()).toBe(false)
    })
})