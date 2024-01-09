// TODO: Include packages needed for this application

// Questions Array
const questions = [
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
        name: 'contibution',
        message: 'Are there any other parties who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests can be run to be sure the application is running correctly?',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
