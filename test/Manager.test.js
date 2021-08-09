const { TestWatcher } = require("jest");
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

    it("Office number not to be NaN", () => {
        const num = "0423156234";
        const man = new Manager("name", "id", "email", num)
        expect(man.office).not.toBeNaN()
    })

    it("Email to match regex email", () => {
        const email = "zahra@test.com";
        const man = new Manager("name", "id", email);
        expect(man.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    })
})