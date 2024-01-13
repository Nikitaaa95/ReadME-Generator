function renderLicenseBadge(license) {
  if (license = 'none') {
    return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](LICENSE)`;
}

function renderLicenseLink(license) {
  if (license = 'none') {
    return '';
  }
  return `- [Tests](#tests)`;
}

function renderLicenseSection(license) {
  if (license = 'none') {
    return '';
  }
  return `## License
  This application is covered under ${license}.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;