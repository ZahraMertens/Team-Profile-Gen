const Engineer = require("../lib/Engineer");
//import Engineer from "../lib/Engineer"; in ES6

describe("Engineer", () => {

    it("Can get gitHub username from constructor", () => {
        const username = "HelloWorld";
        const eng = new Engineer("name", "id", "email", username)
        expect(eng.getGitHub()).toBe(username)
    })

    it("Can get role from class", () => {
        const eng = new Engineer();
        expect(eng.getRole()).toBe("Engineer")
    })

    
})