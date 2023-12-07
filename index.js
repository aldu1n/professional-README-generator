// Importing needed modules from generateMarkdown file , inquirer and fs to write files.
const inquirer = require('inquirer');
const markdownFunctions = require('./utils/generateMarkdown');
const fs = require('fs');

// An array of questions to be used in inquirer.
const questions = [ 
'What is the title of your project?',
'Why did you build this project, was your motivation and what problem does this project solve?',
'What are the steps required to install your project?',
'Provide instructions and examples for use.',
'What is your license type?',
'List your collaborators, if any, with links to their GitHub profiles.',
'Go the extra mile and write tests for your application.',
'What is your GitHub username?',
'What is the email address user can reach out to you?'
];

// A function that prompts inquirer question to the console.
function init() {
    inquirer
.prompt([
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
        type: 'list',
        message: questions[4],
        choices: [
        'None',
        'MIT License',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'Boost Software License 1.0',
        'Mozilla Public License 2.0',
        'ISC License'
    ],
        name: 'license',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'credits',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'tests',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'github',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },

])
// Then the answers are written to the README.md file.
.then((answers) => {
 const badge = markdownFunctions.renderLicenseBadge(answers.license);
 const link = markdownFunctions.renderLicenseLink(answers.license);
 fs.writeFile('README.md', markdownFunctions.generateMarkdown(answers, badge, link), (err) =>
  err ? console.error(err) : console.log('Success!')
);
})

}

// Line that calls init function.
init();



