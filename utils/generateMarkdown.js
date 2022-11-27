function generateMarkdown(data) {
//chooses the license
  let licenceChoices = `${data.license}`;
  let licenseHypertext = '';
// generates the license links
  if (licenceChoices === 'GNU AGPLv3') {
    licenceChoices = 'GNUAGPLv3';
    licenseHypertext = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenceChoices === 'GNU GPLv3') {
    licenceChoices = 'GNUGPLv3';
    licenseHypertext = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenceChoices === 'GNU LGPLv3') {
    licenceChoices = 'GNULGPLv3';
    licenseHypertext = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenceChoices === 'Mozilla Public License 2.0') {
    licenceChoices = 'MozillaPublicLicense2.0';
    licenseHypertext = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenceChoices === 'Apache License 2.0') {
    licenceChoices = 'ApacheLicense2.0';
    licenseHypertext = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenceChoices === 'MIT License') {
    licenceChoices = 'MITLicense';
    licenseHypertext = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenceChoices === 'Boost Software License 1.0') {
    licenceChoices = 'BoostSoftwareLicense1.0';
    licenseHypertext = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenceChoices === 'The Unlicense') {
    licenceChoices = 'TheUnlicense';
    licenseHypertext = 'https://choosealicense.com/licenses/unlicense/';
  };
//adds to the markdown template as the user answers the questions
let templateMarkdown =
    
//title, badge, and description
    
`# ${data.title}
## Description
${data.description}
![badge](https://img.shields.io/badge/license-${licenceChoices}-brightorange)
You can access more badges and their purposes at [shields.io](https://shields.io)
`;
//optional questions that can be added to the Readme

let tableContents =
`## Table of Contents`;
  if (data.installation) {
    tableContents +=
      `
  * [Installation](#installation)`
  };
  if (data.instructions) {
    tableContents +=
      `
  * [Usage](#usage)`
  };
  if (data.contribution) {
    tableContents +=
      `
  * [Contribution](#contribution)`
  };
  if (data.testing) {
    tableContents +=
      `
  * [Testing](#testing)`
  };

  //appends the table of contents to the markdown
  templateMarkdown += tableContents;

  //creates contact info and license
  templateMarkdown +=
    `
  * [Questions](#questions)`;
  templateMarkdown +=
    `
  * [License](#license)
    
    `;

  

  
  if (data.installation) {
    templateMarkdown +=
      `
## Installation
    
  _To install the application:_
  ${data.installation}`
  };


  if (data.instructions) {
    templateMarkdown +=
      `
      
## Usage
  _How to use:_
  ${data.instructions}`
  };


  if (data.contribution) {
    templateMarkdown +=
      `
      
## Contribution
  _If you would like to contribute, please adhere to these guidelines:_
  ${data.contribution}`
  };

  if (data.testing) {
    templateMarkdown +=
      `
      
## Testing
  _Instructions for testing application:_
  ${data.testing}`
  };


    templateMarkdown +=
      `
      
## Questions
      
  _For further questions:_
  ${data.questions}
  
  _Contact Info:_
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})`;
  
  templateMarkdown +=
    `
    
## License
      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseHypertext}).
  
  `;
  return templateMarkdown;
}

module.exports = generateMarkdown;