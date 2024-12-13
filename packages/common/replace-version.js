const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Get the latest tag using git rev-list and git describe
  const latestTag = execSync('git rev-list --tags --max-count=1', { encoding: 'utf8' }).trim();
  const gitTag = execSync(`git describe --tags ${latestTag}`, { encoding: 'utf8' }).trim();

  const filePath = path.join(__dirname, 'src/constants.ts');

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the PDFME_VERSION constant with the latest git tag
  content = content.replace(/export const PDFME_VERSION = '.*';/, `export const PDFME_VERSION = '${gitTag}';`);

  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`Replaced PDFME_VERSION with '${gitTag}' in ${filePath}`);
} catch (error) {
  console.error('Error replacing PDFME_VERSION:', error);
  process.exit(1);
}