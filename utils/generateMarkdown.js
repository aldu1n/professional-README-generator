// A function that renders a badge depending on the license user chose.
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC License') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
}
// A function that renders a link to the license depending on the license user chose.
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC License') {
    return '(https://opensource.org/licenses/ISC)'
  } else if (license === 'Apache License 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Boost Software License 1.0') {
    return '(https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
}

// A function that create Markdown text that is later written to the README.md file.
function generateMarkdown(data, licenseBagde, licenseLink) {
  return `# ${data.title}

  ${licenseBagde}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This application is covered under [${data.license}]${licenseLink}.

## Contributing

${data.credits}

## Tests

${data.tests}

## Questions

My GitHub link: [${data.github}](https://github.com/${data.github})

For additional questions reach me at [${data.email}](mailto:${data.email}).

`;
}

// Exports functions from the file, allowing to use them in index.js.
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown
};