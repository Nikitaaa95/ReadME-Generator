function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](LICENSE)`;
}

function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  }
  return `- [License](#License)`;
}

function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `## License
  This application is covered under ${license}.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

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