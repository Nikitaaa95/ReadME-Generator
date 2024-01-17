//Function creating badge IF license is valid value
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  }
  return `<div align="right">
  <img src="https://img.shields.io/badge/License-${license}-brightgreen.svg" alt="License">
</div>`
  ;
}

//Function creating license table of contents entry IF license is valid value
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  }
  return `- [License](#License)`;
}

//Function creating license section IF license is valid value
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `## License
  This application is covered under ${license}.`;
}

//Generating the readme WITH data from the license information
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#Contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contribution}
  
  ## Tests  
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out to me:
  
  - GitHub: https://github.com/${data.github}
  - Email: ${data.email}
  
  ${renderLicenseSection(data.license)}
  
`;
}


module.exports = generateMarkdown;