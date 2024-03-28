const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Provide the Title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'solve',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'lessons',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'imagePath',
    message: 'Enter the file path of the PNG image to include in the README (e.g., ./path/to/image.png):',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readme = generateMarkdown(answers);
    writeToFile('README.md', readme);
  });
}

// Function call to initialize app
init();
