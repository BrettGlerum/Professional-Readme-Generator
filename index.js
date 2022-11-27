// TODO: Includes packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

//creates different questions to add sections to the Readme
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository? (Required)',
//does not continue if there is no value inputted
  validate: inputName => {
    if (inputName) {
      return true;
    } else {
      console.log('Enter your repository title');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description of your repository (Required)',
  validate: inputName => {
    if (inputName) {
      return true;
    } else {
      console.log('Enter a description of the repository');
      return false;
    }
  }
  },
//confirms whether or not there is a installation process first
{
  type: 'confirm',
  name: 'installationProcess',
  message: 'Is there an installation process?'
  },
{
  type: 'input',
  name: 'installation',
  message: 'Enter your installation instructions.',
  
  when: ({ installationProcess }) => {
    if (installationProcess) {
      return true;
    } else {
      return false;
    }
  }
},

{ 
  type: 'confirm',
  name: 'appInstructions',
  message: 'Would you like to include instructions for using the application?'
},
{ 
  type: 'input',
  name: 'instructions',
  message: 'Enter your application instructions',
  when: ({ appInstructions }) => {
    if (appInstructions) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmContribution',
  message: 'May other developers contribute to your repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Please explain how other developers may contribute to your project.',
  when: ({ confirmContribution }) => {
    if (confirmContribution) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: 'confirm',
  name: 'testQuestion',
  message: 'Can it be tested?'
},
{
  type: 'input',
  name: 'testing',
  message: 'Enter testing instructions',
  when: ({ testQuestion }) => {
    if (testQuestion) {
      return true;
    } else {
      return false;
    }
  }
},
{ 
  type: 'checkbox',
  name: 'license',
  message: 'Enter a license',
  choices: ['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
  validate: inputName => {
    if (inputName) {
      return true;
    } else {
      console.log('Please select a license.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'username',
  message: 'Enter your Github username (Required)',
  validate: inputName => {
    if (inputName) {
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
  message: 'What is your email address? (Required)',
  validate: inputName => {
    if (inputName) {
      return true;
    } else {
      console.log('Please enter your email.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'questions',
  message: 'Enter contact info/instructions',
  validate: (inputName) => {
    if (inputName) {
      return true;
    } else {
      return false;
    }
  }
}]; 




// creates the readme
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Error creating Readme: ' + error);
    }
  })
}


const createReadme = util.promisify(writeToFile);
// creates the initialization process
async function init() {
  try {
    const userInfo = await inquirer.prompt(questions);
    console.log('Generating Readme: ', userInfo);
    // puts the answers in the template generated on generateMarkdown.js
    const fileMarkdown = generateMarkdown(userInfo);
    console.log(fileMarkdown);
    //writes the Readme and creates the file
    await createReadme('README1.md', fileMarkdown);
    
  } catch (error) {
    console.log('Error creating Readme:' + error);
  }
};


// Function call to initialize app
init();