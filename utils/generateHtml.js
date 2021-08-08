function renderCards(teamMembers){

   const allCards = [];

   //itterate over array from index.js with all members add during prompt questions
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

    //Depending on position add diferent list element
    //Manager = office number 
    //Intern = school 
    //Engineer = GitHub username
    if (role === "Manager"){
        card += 
        `           <li class="list-group-item"><span class="span-li">☎️ Office Number: </span>${teamMembers[i].office}</li>
        </ul>
      </div>

`
    }
    if (role === "Engineer"){
        card += 
        `           <li class="list-group-item"><span class="span-li">🐱 GitHub username: </span><a href="https://github.com/${teamMembers[i].gitHub}" target='_blank'>${teamMembers[i].gitHub}</a></li>
        </ul>
      </div>

`
    }
    if (role === "Intern"){
        card += 
        `           <li class="list-group-item"><span class="span-li">🏫 School: </span>${teamMembers[i].school}</li>
        </ul>
      </div>

`
    }

   allCards.push(card)
 }

 //Return array and join array to remove comma between array elements
 return allCards.join("")
}

//renderHtml returns the whole html including all cards generated
function renderHtml (teamHeader, teamMembers){
  const header = teamHeader;
  const members = teamMembers;
  const cards = renderCards(members)

  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/style.css" />
  <link rel="icon" type="image/png" href="./assets/images/team.png">
  <title>Team Profile</title>
</head>

  <body>

    <header>
      <h1>My Team - ${header}</h1> 
    </header>

    <main>
        
      ${cards}

    </main>

  </body>

</html>
`
}

module.exports = renderHtml;
