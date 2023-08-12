const fs = require('fs');

const envContents = fs.readFileSync('src/environments/environment.ts', 'utf8');
const cloudfrontUrlIdx = envContents.indexOf("CLOUDFRONT_URL");
const afterKeyString = envContents.substring(cloudfrontUrlIdx);
const firstDoubleQuoteIdx = afterKeyString.indexOf('"');
const afterDoubleQuoteString = afterKeyString.substring(firstDoubleQuoteIdx + 1);
const nextDoubleQuoteIdx = afterDoubleQuoteString.indexOf('"');
const cloudfrontUrl = afterDoubleQuoteString.substring(0, nextDoubleQuoteIdx);
const tempServiceWorkerPath = 'src/assets/scripts/temp-service-worker.js';
const serviceWorkerPath = 'src/my-service-worker.js';

fs.readFile(tempServiceWorkerPath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${tempServiceWorkerPath}`);
    return;
  }

  const updatedContent = data.replace('<<SITE_URL>>', cloudfrontUrl);

  fs.writeFileSync(serviceWorkerPath, updatedContent); // Update the path as needed
});