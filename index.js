// Packages for application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// Questions Array
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Can you provide a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What steps does the user need to take to install the application?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What guidance would you provide to the user on how to use your application?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Are there any other parties who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests can be run to be sure the application is running correctly?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
]);
};

// TODO: Create a function to write README file
const writeToFile = ({ title, description, installation, usage, contribution, tests, license, github, email }) =>
  `## ${title}
  
  ## Description
  ${description}  

  ## Installation
  ${installation} 

  ## Usage
  ${usage} 

  ## Contributors
  ${contribution} 

  ## Tests
  Types of tests users should run:
  ${tests}

  ## License
  This application is covered under ${license}.

  ## Questions
  If you have any questions, feel free to reach out to me:

  - GitHub: https://github.com/${github}
  - Email: ${email}
 
  `;

// TODO: Function to start app
const init = () => {
    questions()
    .then((answers) => writeFile('NewReadME.md', writeToFile(answers)))
    .then(() => console.log('Successfully transcribed to readME'))
    .catch((err) => console.error(err));
};

init();
