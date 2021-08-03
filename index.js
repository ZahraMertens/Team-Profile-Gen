const fs = require("fs");
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern");
const { inherits } = require("util");
const renderHtml = require("./utils/html")

const teamMembers = [];


function renderManager(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the Team Manager`s name?',
        name: 'name',
        //Validate if input is empty, if empty user can't go to next question
        //If input valid user goes to next question
        validate: function (input) {
            if (input === ""){
                return "GitHub username must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Team Manager`s employee ID?',
        name: 'id',
        validate: function (input) {
            if (input === ""){
                return "ID must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Team Manager`s emil address?',
        name: 'email',
        validate: function (input) {
        //JavaScript regex email validation if input is valid
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return "You have entered an invalid email address!"
        }
        return true
        }
    },
    {
        type: 'input',
        message: 'What is the Team Manager`s office number',
        name: 'office',
        validate: function (input) {
            if (input === ""){
                return "Office Number must be entered"
            } 
            return true
        }   
    }
    ])
    .then(function(data){
        const managerName = data.name;
        const managerID = data.id;
        const managerEmail = data.email;
        const managerOfficeNr = data.office;
        const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNr);
        teamMembers.push(manager);
        addMembers();
    })
}

function renderEngineer(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the Engineer`s name?',
        name: 'name',
        //Validate if input is empty, if empty user can't go to next question
        //If input valid user goes to next question
        validate: function (input) {
            if (input === ""){
                return "GitHub username must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Engineer`s employee ID?',
        name: 'id',
        validate: function (input) {
            if (input === ""){
                return "ID must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Engineers`s emil address?',
        name: 'email',
        validate: function (input) {
        //JavaScript regex email validation if input is valid
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return "You have entered an invalid email address!"
        }
        return true
        }
    },
    {
        type: 'input',
        message: 'What is the Engineers`s GitHub username',
        name: 'username',
        validate: function (input) {
            if (input === ""){
                return "Office Number must be entered"
            } 
            return true
        }   
    }
    ])
    .then(function(data){
        const engineerName = data.name;
        const engineerID = data.id;
        const engineerEmail = data.email;
        const engineerUsername = data.username;
        const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerUsername);
        teamMembers.push(engineer);
        addMembers();
    })
}

function renderIntern(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the Intern`s name?',
        name: 'name',
        //Validate if input is empty, if empty user can't go to next question
        //If input valid user goes to next question
        validate: function (input) {
            if (input === ""){
                return "GitHub username must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Intern`s employee ID?',
        name: 'id',
        validate: function (input) {
            if (input === ""){
                return "ID must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Interns`s emil address?',
        name: 'email',
        validate: function (input) {
        //JavaScript regex email validation if input is valid
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return "You have entered an invalid email address!"
        }
        return true
        }
    },
    {
        type: 'input',
        message: 'To which school does the Intern go to?',
        name: 'school',
        validate: function (input) {
            if (input === ""){
                return "Office Number must be entered"
            } 
            return true
        }   
    }
    ])
    .then(function(data){
        const internName = data.name;
        const internID = data.id;
        const internEmail = data.email;
        const internSchool = data.school;
        const intern = new Intern(internName, internID, internEmail, internSchool);
        teamMembers.push(intern);
        addMembers();
    })
}


function addMembers(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add team members?",
            name: "addTeamMembers",
            choices: [
                "YES, add Engineer!",
                "YES, add Intern!",
                "NO, the Team is complete!"
            ]
        }
    ])
    .then(function(data){
        const addMembers = data.addTeamMembers;
        switch(addMembers){
            case "YES, add Engineer!":
                if (addMembers === "YES, add Engineer!"){
                    return renderEngineer();
                }
            case "YES, add Intern!":
                if (addMembers === "YES, add Intern!"){
                    return renderIntern();
                }
            case "NO, the Team is complete!":
                if (addMembers === "NO, the Team is complete!"){
                    return completeTeam();
                }
              
        }
    })
}

function completeTeam(){
    //console.log(teamMembers)

    for (var i = 0; i < teamMembers.length; i++){
        var role = teamMembers[i].role
        var name = teamMembers[i].name
        var id = teamMembers[i].id
        var email = teamMembers[i].email
       // const office = teamMembers[i].office
       // const gitHub = teamMembers[i].gitHub
        //const school = teamMembers[i].school
        
        let card = `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-success">
              ${role} <br> ${name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}>${email}</a></li>\n`

        
        if (role === "Manager"){
            card += `<li class="list-group-item">Office Number: ${teamMembers[i].office}</li>\n</ul>\n
            </div>`
        }
        if (role === "Engineer"){
            card += `<li class="list-group-item">GitHub username: ${teamMembers[i].gitHub}</li>\n</ul>\n
            </div>`
        }
        if (role === "Intern"){
            card += `<li class="list-group-item">School: ${teamMembers[i].school}</li>\n</ul>\n
            </div>`
        }

    }
}




/*function writeToFile(){
    fs.writeFile("team.html", renderHtml(), function(err) {
        if(err){
            return console.error(err)
        }
    })
}*/

function init(){
    //writeToFile();
    renderManager();
}

init();