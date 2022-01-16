// Packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");

// README template
const generateMarkdown = (data) =>
    `
  # ${data.title}
  
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribute](#Contribute)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  
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
  

// An array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'What is the description of your project?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'installation', 
            message: 'What are the installation instructions for your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage', 
            message: 'What is the usage information for your project?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license is used in your project? (Choose from list)',
            choices: ["Open", "Mozilla", "MIT", "ISC", "GNU", "Academic", "Apache"],
        },
        {
            type: 'input',
            name: 'contribution', 
            message: 'What are the contribution guidelines for your project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter the contribution guidelines for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username', 
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What are the test instructions for your project?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter the test instructions for your project.');
                    return false;
                }
            }
        },
    ])

    .then((data) => {
        const responseData = generateMarkdown(data);

        fs.writeFile('README.md', responseData, (err) =>
        err ? console.log('err on write', err) : console.log('README.md has been created!')
        );
    });

//Test sample entry Q/A

// What is the tile of your project?

/* Sample Project 1 */

// What is the description of your project?

/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*/

// What are the installation instructions for your project?

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */

// What is the usage information for your project?

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */

// Which license is used in your project?

/* pick any */

// What are the contribution guidelines for your project?

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */

// What is your GitHub username? 

/* reinholz36 */

// What is your email address?

/* dreinholz28@gmail.com */

// What are the test instructions?

/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */