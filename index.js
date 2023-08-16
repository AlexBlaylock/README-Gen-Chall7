// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// very similar to what we used on activity 20
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please provide a description of this project.',
        name: 'desc',
      },
      {
        type: 'checkbox',
        message: 'What do you want to include in your table of contents?',
        name: 'toc',
        choices: [
            {
                name: ''
            }

        ]
      },
      {
        type: 'input',
        message: 'How do you install this project?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How do you use this project?',
        name: 'use',
      },
      {
        // chose MIT license, a common one, and then the other top 2 licenses
        type: 'checkbox',
        message: 'What license are you using?',
        name: 'license',
        choices: [
          {
            name: 'MIT License',
          },
          {
            name: 'Apache License 2.0',
          },
          {
            name: 'GNU General Public License (GPL) v3',
          },
        ]
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
