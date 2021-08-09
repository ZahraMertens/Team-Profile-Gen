const fs = require("fs");
const inquirer = require("inquirer")

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern");

//Import file to generate html
const renderHtml = require("./utilsHTML/generateHtml")

//Empty aeeay to push all members 
const teamMembers = [];
//Empty array to get team name
const teamHeader = [];

function teamName(){
    console.log("\x1b[32m", "\n========================== Welcome to the Team Profile Generator! ==========================\n")
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Team Name?',
            name: 'team',
            //Validate if input is empty, if empty user can't go to next question
            //If input valid user goes to next question
            validate: function (input) {
                if (input === ""){
                    return "Team name must be entered"
                } 
                return true
            }   
        }
        ])
        .then(function(data){
            const teamName = data.team;
            console.log("\x1b[33m", `\n------  Awesome! Please answer following questions about ${teamName}'s team members:  ------\n`)
            teamHeader.push(teamName)
            renderManager();
        })
}

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
                return "Managers name must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Team Manager`s employee ID?',
        name: 'id',
        validate: function (input) {
        
        if (!/^[A-Za-z0-9]*$/.test(input)){
            return "Id can't contain special characters!"
        
        } else if (input === ""){
            return "You must provide an ID"
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
        message: 'What is the Team Manager`s office phone number',
        name: 'office',
        validate: function (input) {
            if (!/^\d*(\.\d+)?$/.test(input)){
                return "Number can't contain any letters or specail characters!"
            
            } else if (input === ""){
                return "You must enter an office phone number"
            }
            return true
        }   
    }
    ])
    .then(function(managerInput){
        const {name, id, email, office} = managerInput
        const manager = new Manager(name, id, email, office);
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
                return "Engineer's name must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Engineer`s employee ID?',
        name: 'id',
        validate: function (input) {
         
        //Regex for only numbers and letters upper case and lower case
        if (!/^[A-Za-z0-9]*$/.test(input)){
            return "Id can't contain special characters!"
        
        } else if (input === ""){
            return "You must provide an employee ID"
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
                return "Username must be entered"
            } 
            return true
        }   
    }
    ])
    .then(function(engineerInput){
        const {name, id, email, username} = engineerInput
        //Trim username in case user puts space so link is working
        const engineer = new Engineer(name, id, email, username.trim());
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
                return "Intern's name must be entered"
            } 
            return true
        }   
    },
    {
        type: 'input',
        message: 'What is the Intern`s employee ID?',
        name: 'id',
        validate: function (input) {
        
        if (!/^[A-Za-z0-9]*$/.test(input)){
            return "Id can't contain special characters!"
        
        } else if (input === ""){
            return "You must provide an employee ID"
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
                return "School must be provided"
            } 
            return true
        }   
    }
    ])
    .then(function(internInput){
        const {name, id, email, school} = internInput
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        addMembers();
    })
}

//------------------Function where user can decide wheather to add more members or to complete and generate index.html-------
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
                    return writeToFile("./docs/index.html", renderHtml(teamHeader, teamMembers));
                }
              
        }
    })
}

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        if(err){
            return console.error(err)
            
        } else {
            return console.log("\x1b[32m", "\n------Your HTML file has successfully been generated. Please move to the /Demo folder to see the result!------\n")
        }
    })
}

//Start with init to know where to start
function init(){
    teamName();
}

init();