const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Instabook",
        message: "Whats your project Title?",
        type: "input"
    },
   {
        name: "Description",
        message: "Whats your project description?",
        type: "input"
},
    {
        name: "Table of contents",
        message: "Whats your project Contents?",
        type: "input"
},
    {
        name: "Installations",
        message: "Whats your project Installations?",
        type: "input"
},
    {
        name: "Usage ",
        message: "Whats your project Usages?",
        type: "input"
},
    {
        name: "License",
        message: "Whats your project License?",
        type: "mit"
},
    {
        name: "Contributions",
        message: "Who's your project Contributions?",
        type: "Rodney Nutall"
},
    {
        name: "Tests",
        message: "Whats your project Tests?",
        type: "input"
},
    {
        name: "Questions",
        message: "Whats your project Questions",
        type: "type"
}
];

//  function to write README file
function writeToFile(ReadMe_server, data,) {}
function writeToFile(ReadMe_server, data,) {
 fs.writeFile('data.csv', 'utf8', (error, data) => {

    if (err) {
        console.log("File writing error", err);
        }
        else {
            console.log("Successful file");
        }
    });
}  

//  function to initializing app
function init() { 
    inquirer.prompt(questions).then((inquirerResponses) => { 
        console.log('Generating README...'); 
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}