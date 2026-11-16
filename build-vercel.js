const fs = require('fs');
const path = require('path');

// La web ya está en public/ (Vercel la sirve tal cual).
// Este paso solo comprueba que no se publique ningún PDF privado por error.
const publicDir = path.join(__dirname, 'public');

function findPdfs(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findPdfs(full);
    return entry.name.toLowerCase().endsWith('.pdf') ? [full] : [];
  });
}

const pdfs = findPdfs(publicDir);
if (pdfs.length > 0) {
  throw new Error(`PDFs found in public/: ${pdfs.join(', ')}. Keep them in private-documents or private Blob.`);
}

if (!fs.existsSync(path.join(publicDir, 'index.html'))) {
  throw new Error('public/index.html is missing.');
}

console.log('public/ is ready: no PDFs found.');
