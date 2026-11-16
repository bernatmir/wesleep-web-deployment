const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const publicDir = path.join(projectDir, 'public');
const publicDocumentsDir = path.join(publicDir, 'documents');
const files = [
  'api-docs.css',
  'api-documentation.html',
  'index.html',
  'pilot.css',
  'pilot.html',
  'pilot.js',
  'script.js',
  'styles.css',
];

fs.mkdirSync(publicDir, { recursive: true });

if (fs.existsSync(publicDocumentsDir)) {
  const publicPdfs = fs.readdirSync(publicDocumentsDir).filter((file) => file.toLowerCase().endsWith('.pdf'));
  if (publicPdfs.length > 0) {
    throw new Error('PDFs found in public/documents. Move them to private-documents or upload them to private Blob.');
  }
}

for (const file of files) {
  fs.copyFileSync(path.join(projectDir, file), path.join(publicDir, file));
}

fs.copyFileSync(path.join(projectDir, 'Favicon.ico'), path.join(publicDir, 'favicon.ico'));
fs.cpSync(path.join(projectDir, 'images'), path.join(publicDir, 'images'), { recursive: true });

console.log(`Prepared ${files.length + 1} static files and images in public/.`);