const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Github REPO name: ',
    name: 'githubRepoName'
  },
  {
    type: 'input',
    message: 'Project Title: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Project Description: ',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Installation intruction: ',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Usage intruction: ',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'contributing instruction (leave empty for default): ',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'how to test your application: ',
    name: 'test'
  },
  {
    type: 'input',
    message: 'Enter your github username: ',
    name: 'githubName'
  },
  {
    type: 'input',
    message: 'Enter your email: ',
    name: 'email'
  },
  {
    type: 'list',
    message: 'Does this Github REPO have a license: ',
    name: 'license',
    choices: [
      'No License',
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense',
    ]
  },
];

const getUserInput = async () => await inquirer.prompt(questions);

module.exports = getUserInput;