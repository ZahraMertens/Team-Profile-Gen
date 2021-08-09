const Intern = require("../lib/Intern");

describe("Intern", () => {
   
    describe("Role of employee", () => {

        it("Role to be 'Intern", () => {
            expect(new Intern().getRole()).toBe("Intern")
        })

    })

    describe("Get values from constructor", () => {

        it("Get school from constructor", () =>{
            const schoolIntern = "University of Sydney"
            const int = new Intern("name", "id", "email", schoolIntern)
            expect(int.school).toBe(schoolIntern)
        })

        it("Get name from constructor", () => {
            const  intern = new Intern ("Jamie")
            expect(intern.name).toBe("Jamie")
        })

        it("Get id from constructor", () => {
            const  intern = new Intern ("Jamie", "12345d")
            expect(intern.id).toBe("12345d")
        })

        it("Get email from constructor", () => {
            const  intern = new Intern ("name", "id", "Jamie@test.com")
            expect(intern.email).toBe("Jamie@test.com")
        })

    })

    describe("Validation of user input", () => {

        it("Id only to include letters and/or numbers", () => {
            const  intern = new Intern ("James", "234fA")
            expect(intern.id).toMatch(/^[A-Za-z0-9]*$/)
        })

        it("Id not to include any special characters", () => {
            const  intern = new Intern ("James", "-234f@A")
            expect(intern.id).not.toMatch(/^[A-Za-z0-9]*$/)
        })  
        
        it("Email to match regex email", () => {
            const email = "zahra@test.com";
            const intern = new Intern ("name", "id", email);
            expect(intern.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })

        it("Email not to match regex email", () => {
            const email = "zahratest.com";
            const intern = new Intern("name", "id", email);
            expect(intern.email).not.toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        })
    })

})