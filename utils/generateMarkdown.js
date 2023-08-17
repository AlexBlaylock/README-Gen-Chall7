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
  let tableOfContents = '';

  if (data.toc && data.toc.length > 0) {
    tableOfContents = '## Table of Contents\n';

    data.toc.forEach((section) => {
      tableOfContents += `- [${section}](#${section.toLowerCase()})\n`;
    });
  }
// used something similar to the mini proj
  return `# ${data.title}

${tableOfContents}

## Description
${data.desc}

## Installation
${data.install}

## License
${renderLicenseBadge(data.license)}  ${renderLicenseLink(data.license)}

## Usage
${data.use}

## Tests
${data.testing}

## Contributing
${data.contribution}

## Questions
For questions, you can reach me at [GitHub Profile](https://github.com/${data.username}) or via email at ${data.email}.`;
}

module.exports = generateMarkdown;
