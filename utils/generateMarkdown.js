// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// found badges here https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// thank you to Joe Giancola and Nate Master for help on the licensing section
function renderLicenseBadge(license) { 
  if (license) {
  const badgeURLs = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPLv2': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
  };

  if (badgeURLs[license]) {
    return `![License](${badgeURLs[license]})`;
  }
}
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const licenseURLs = {
      'MIT License': 'https://opensource.org/licenses/MIT',
      'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPLv2': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    };

    if (licenseURLs[license]) {
      return `[${license}](${licenseURLs[license]})`;
    }
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     const licenseText = `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.\n`;

//     return `## license\n${licenseText}`;
//   }
  
//   return '';
// }
// could never get this to work properly

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
This project is licensed by ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}.

## use
${data.use}

## testing
${data.testing}

## contribution
${data.contribution}

## questions
For questions, you can reach me at my [GitHub Profile](https://github.com/${data.github}) or via email at ${data.email}.`;
}

module.exports = generateMarkdown;
