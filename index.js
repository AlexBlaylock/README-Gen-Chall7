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
          message: 'Select what you want to include in your Table of Contents',
          name: 'toc',
          choices: [
            {
              name: 'Installation',
            },
            {
              name: 'Licensing',
            },
            {
              name: 'Contributions',
            },
            {
              name: 'Testing',
            },
            {
              name: 'Questions',
            },
          ]
        },
        // install
      {
        type: 'input',
        message: 'How do you install this project?',
        name: 'install',
      },
      // use
      {
        type: 'input',
        message: 'How do you use this project?',
        name: 'use',
      },
      {
        // chose top 3 most used licenses.
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
            name: 'GPLv2',
          },
          {
            name: 'Other',
          },
          // contrib
          {
            type: 'input',
            message: 'What are future plans? What can people contribute?',
            name: 'contribution',
          },
          // test instructions
          {
            type: 'input',
            message: 'How do you use this project?',
            name: 'testing',
          },
          // email and github
          {
            type: 'input',
            message: 'Contact Information (Github and Email)',
            name: 'contact',
          },
        ]
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.promopt(questions).then(({ title, desc, toc, install, use, license, contribution, testing, contact}) => {
    const [username, email] = contact.split(',').map(item => item.trim());
    const markdown = generateMarkdown({ title, desc, toc, install, use, license, contribution, testing, username, email });
    writeToFile('README.md', markdown);
    console.log('readme generated successfully');
  }); 
};

// Function call to initialize app
init();
