// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
'What is the title of your project?',
'Why did you build this project, was your motivation and what problem does this project solve?',
'What are the steps required to install your project?',
'Provide instructions and examples for use.',
'List your collaborators, if any, with links to their GitHub profiles.',
'Go the extra mile and write tests for your application.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt([
  /* Pass your questions in here */    
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'credits',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'tests',
    },

])
.then((answers) => {
 console.log(generateMarkdown(answers));
})

}

// Function call to initialize app
init();



