// TODO: Include packages needed for this application
const { writeFile } = require("fs");
const generateMarkdown = require("./assets/scripts/generateMarkdown");
const getUserInput = require("./assets/scripts/getUserInput");


// TODO: Create a function to write README file
function writeToFile(data, fileName = 'README.md') {
  writeFile(`./generated/${fileName}`, generateMarkdown(data), err => err ? console.log(err) : console.log('README generated!'));
}

// TODO: Create a function to initialize app
(async () => {
  writeToFile( await getUserInput())
})();