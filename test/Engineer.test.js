const Engineer = require("../lib/Engineer");
//import Engineer from "../lib/Engineer"; in ES6

describe("Engineer", () => {

    describe("Get values from constructor", () => {

        it("Can get gitHub username from constructor", () => {
            const username = "HelloWorld";
            const eng = new Engineer("name", "id", "email", username)
            expect(eng.getGitHub()).toBe(username)
        })

        it("Can get name from constructor", () => {
            const eng = new Engineer("Jamie")
            expect(eng.name).toBe("Jamie")
        })

        it("Can get id from constructor", () => {
            const eng = new Engineer("name", "1234d")
            expect(eng.id).toBe("1234d")
        })

        it("Can get email from constructor", () => {
            const eng = new Engineer("name", "id", "zahra@test.com")
            expect(eng.email).toBe("zahra@test.com")
        })
    
    })

    describe("Validate user input", () => {

        it("Email to match regex format", () => {
            const email = "zahra@test.com";
            const eng = new Engineer ("name", "id", email);
            expect(eng.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })

        it("Email not to match regex email", () => {
            const email = "zahratest.com";
            const eng = new Engineer ("name", "id", email);
            expect(eng.email).not.toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })
    })

    describe("Role to return Engineer", () => {

        it("getRole() returns Engineer", () => {
            const eng = new Engineer();
            expect(eng.getRole()).toBe("Engineer")
        })  
    })

})