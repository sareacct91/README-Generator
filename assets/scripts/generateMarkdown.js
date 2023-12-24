// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![license badge](https://img.shields.io/github/license/${data.githubName}/${data.githubRepoName})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `[${data.license}](https://github.com/${data.githubName}/${data.githubRepoName}/blob/master/LICENSE)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (data) => data.license === 'No License' ? '' : `**${data.title}** is licensed under the ${renderLicenseLink(data)}.`;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}    ${renderLicenseBadge(data)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}

## License

${renderLicenseSection(data)}

## Contributing

${data.contributing || `[Contributor Covenant](https://www.contributor-covenant.org/)`}

## Tests

${data.test}

## Questions

https://github.com/${data.githubName}

If you have any questions email me at ${data.email}

`;
}

module.exports = generateMarkdown;
