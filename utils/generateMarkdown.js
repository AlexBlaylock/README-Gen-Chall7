// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

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
      const lowercaseSection = section.toLowerCase();
      tableOfContents += `- [${section}](#${lowercaseSection})\n`;
    });
  }
// used something similar to the mini proj
  return `# ${data.title}

${tableOfContents}

## description
${data.desc}

## installation
${data.install}

## license
${renderLicenseBadge(data.license)}  ${renderLicenseLink(data.license)}

## use
${data.use}

## testing
${data.testing}

## contribution
${data.contribution}

## questions
For questions, you can reach me at [GitHub Profile](https://github.com/${data.github}) or via email at ${data.email}.`;
}

module.exports = generateMarkdown;
