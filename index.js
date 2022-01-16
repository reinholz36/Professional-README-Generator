// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
}
// title, description, (table of contents), installation instructions, usage information, license (select from list), contribution guidelines, github username, email address, and test instructions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
