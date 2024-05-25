// a function that returns a license badge based on which license is passed in
// If there is no license, an empty string will be returned
function renderLicenseBadge(license) {
  return licenses[license] ? licenses[license].badge : '';
}

// a function that returns the license link
function renderLicenseLink(license) {
  return licenses[license] ? licenses[license].link : '';
}

// a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license || !licenses[license]) {
    return '';
}
return `## License

This project is licensed under the ${license} License. You can read more about it [here](${renderLicenseLink(license)}).
`;
}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;