const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Validation of user input", () => {

        it("Id only to include letters and/or numbers", () => {
            const  man = new Manager ("James", "234fA")
            expect(man.id).toMatch(/^[A-Za-z0-9]*$/)
        })

        it("Id not to include any special characters", () => {
            const  man = new Manager ("James", "-234f@A")
            expect(man.id).not.toMatch(/^[A-Za-z0-9]*$/)
        })

        it("Office number must be Integers only", () => {
            const number = 1234567
            const man = new Manager("name", "id", "email", number)
            expect(man.validateNumber()).toBe(true)
        })

        it("Office number can not contain special charcaters", () => {
            const number = "1234567@!"
            const man = new Manager("name", "id", "email", number)
            expect(man.validateNumber()).toBe(false)
        })

        it("Office number can not contain letters", () => {
            const number = "1234567e"
            const man = new Manager("name", "id", "email", number)
            expect(man.validateNumber()).toBe(false)
        })    
        
        it("Email to match regex email", () => {
            const email = "zahra@test.com";
            const man = new Manager("name", "id", email);
            expect(man.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })

        it("Email not to match regex email", () => {
            const email = "zahratest.com";
            const man = new Manager("name", "id", email);
            expect(man.email).not.toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })
    })

    describe("Get values from constructor", () => {

        it("Get the office number from the constructor", () => {
            const officeNumber = 123456
            const man = new Manager ("name", "id", "email", officeNumber)
            expect(man.office).toBe(123456)
        })

        it("Get name from constructor", () => {
            const  man = new Manager ("James")
            expect(man.name).toBe("James")
        })

        it("Get name from constructor", () => {
            const  man = new Manager ("James")
            expect(man.name).not.toBe("Jamie")
        })

        it("Get id from constructor", () => {
            const  man = new Manager ("James", "2345f")
            expect(man.id).toMatch("2345f")
        })

        it("Get email from constructor", () => {
            const  man = new Manager ("James", "id", "zahra@test.com")
            expect(man.email).toBe("zahra@test.com")
        })

    })

    describe("Validate that office number is a number", () => {
    
        it("Office number not to be NaN", () => {
            const num = "0423156234";
            const man = new Manager("name", "id", "email", num)
            expect(man.office).not.toBeNaN()
         })
    })
})