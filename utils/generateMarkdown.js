// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}

## Table of Contents

* [Installations](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contribute](##Contribute)
* [Tests](##Test)
* [Questions](##Questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license} Copyright (c) 2022 

## Contribute
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions about this application please email: ${data.email}
Or visit my GitHub profile: https://github.com/${data.username}
`;
}
// title, description, (table of contents), installation instructions, usage information, license (select from list), contribution guidelines, github username, email address, and test instructions

module.exports = generateMarkdown;
