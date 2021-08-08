# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## General Information

* [🎥 Walkthrough Video of Application with Google Drive]()
* [🐱 URL of the GitHub Repo](https://github.com/ZahraMertens/Team-Profile-Gen.git)
* [👀 Demo deployed Team-Profile page](https://zahramertens.github.io/Team-Profile-Gen/)


## Table if Contents
1. [General Information](#general-information)
2. [Task Description](#task-description)
3. [Installation Instructions](#installation-instructions)
4. [Technologies Used](#technologies-used)
5. [User Story](#user-story)
6. [Actual Behaviour](#actual-behaviour)
7. [Bonus](#bonus)
8. [Mock-Up](#mock-up)
9. [Credits](#credits)


## Task Description

The App is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The user can clone the repository and by simply answering prompts in the terminal, a polished html page gets generated which provides position related information.
As TDD (Test-Driven-Development) is an essentail part in web development to maintain code there are unit tests for ever part of the code.

## Installation Instructions

* 1️⃣ First the user must clone the [GitHub Repo](https://github.com/ZahraMertens/Team-Profile-Gen.git) on its computer.

* 2️⃣ Open the repository on your device with VS Code (or any other program)

* 3️⃣ Open the command line at the folder location OR the integrated terminal 

* 4️⃣ First, you MUST install the npm packages by running "npm install" in the terminal

* 5️⃣ Then run "node index" in the terminal

* 6️⃣ Answer all questions in order to generate your personalized team profle webpage  

* 7️⃣ When all questions are answered you will see the index.html file in the docs folder.

**Note** ❗ Make sure that your the information provided is spelled correct in order to make sure that all URLs are working ❗

## Technologies Used

* JavaScript

* Node.JS 

* TDD (Test driven development)

* Npm packages: Jest & inquirer

* FS (File System)

* CSS & Bootstrap Framework

## User Story

AS A manager, I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles

## Actual Behaviour

* WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input

* WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address

* WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab

* WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

* WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

* WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

* WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

* WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated


## Bonus

* 🏆 WHEN I start he application THEN I have to enter my Teams name which will be the individual header of the webpage

* 🏆 WHEN I start the application THEN I am presented with a welcome message

## Mock-Up

🎥 The video shows the usage of the code in the terminal to generate a new Readme File:

![Code-Demo](./assets/Images/code.gif)

🎥 The video shows an example of a Readme file generated with the node.js application and its features:

![Deployed-Readme-Demo](./assets/Images/demopage.gif)

🎥 The video shows that all tests are passing when "npm run test" is entered:
![Deployed-Readme-Demo](./assets/Images/demopage.gif)

## Credits

* https://www.npmjs.com/package/inquirer