const fs = require("fs");
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern");
const { getMaxListeners } = require("process");

const teamMembers = [];
const finishedHTML = [];


function teamName(){
    console.log("\x1b[32m", "\n------Welcome to the Team Profile Generator!------\n")
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
            writeHeader(teamName)
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
        message: 'What is the Team Manager`s office phone number',
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

async function writeCards(){

    //var allCards = [];

    for (var i = 0; i < teamMembers.length; i++){
        var role = teamMembers[i].role
        var name = teamMembers[i].name
        var id = teamMembers[i].id
        var email = teamMembers[i].email
        
        let card = `
   <div class="card" style="width: 18rem;">
     <div class="card-header bg-success">
       <h1 class="header-h1">${role}</h1>
       <h2 class="header-h2">${name}</h2>
     </div>
      <ul class="list-group list-group-flush">
       <li class="list-group-item"><span class="span-li">Employee ID: </span>${id}</li>
       <li class="list-group-item"><span class="span-li">📧 Email: </span><a href="mailto:${email}">${email}</a></li>\n`

        
        if (role === "Manager"){
            card += 
            `       <li class="list-group-item"><span class="span-li">☎️ Office Number: </span>${teamMembers[i].office}</li>
      </ul>
   </div>
   
   `
        }
        if (role === "Engineer"){
            card += 
            `       <li class="list-group-item"><span class="span-li">🐱 GitHub username: </span><a href="https://github.com/${teamMembers[i].gitHub}">${teamMembers[i].gitHub}</a></li>
      </ul>
   </div>
   
   `
        }
        if (role === "Intern"){
            card += 
            `       <li class="list-group-item"><span class="span-li">🏫 School: </span>${teamMembers[i].school}</li>
      </ul>
   </div>
   
   `
        }

    //allCards += card
    finishedHTML.push(card)
    }

    /*return fs.appendFile("./Demo/team.html", allCards, function (err){
         if (err) {
             return console.error(err)
        };
        return
    })*/

}
    
function writeFooter (){

    const htmlEnd = 
    `
     </div>
   </main>

 </body>
</html>
    `

    finishedHTML.push(htmlEnd)
    
    fs.writeFile("./Demo/team.html", finishedHTML.join(""), function (err){
        if (err) {
            return console.error(err)
        };
        return
    })

}

function writeHeader(teamName){

    const header = teamName;

    const htmlHead = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/style.css"/>
  <title>Team Profile</title>
</head>

<body>

    <header>
      <h1>My Team - ${header}</h1> 
    </header>

  <main>

     <div class="cards-container">
 `
    finishedHTML.push(htmlHead)

}

function completeTeam() {
   writeCards();
   console.log("\x1b[32m", "\n------Your HTML file has successfully been generated. Please move to the /Demo folder to see the result!------\n")
   writeFooter();
}

function init(){
 
    teamName();
}

init();

