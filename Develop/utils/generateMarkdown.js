// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'None':
      return '';
    default:
      return '';
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.`;
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

- ${data.motivation}
- ${data.why}
- ${data.solve}
- ${data.lessons}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.installation}

![Project Image](${data.imagePath})

## Credits
${data.credits}

## Tests
${data.tests}

## Questions
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
