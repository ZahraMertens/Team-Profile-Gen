const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Role to be 'Intern", () => {
        expect(new Intern().getRole()).toBe("Intern")
    })

    it("Get school from constructor", () =>{
        const schoolIntern = "University of Sydney"
        const int = new Intern("name", "id", "email", schoolIntern)
        expect(int.school).toBe(schoolIntern)
    })
})