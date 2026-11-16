const fs = require('fs');
const path = require('path');
const { put } = require('@vercel/blob');
require('dotenv').config();

const documentsDir = path.resolve(
  process.env.PRIVATE_DOCUMENTS_DIR || path.join(__dirname, '..', 'private-documents')
);
const documentNames = [
  'wesleep-b2b-ca.pdf',
  'wesleep-b2b-es.pdf',
  'wesleep-b2b-en.pdf',
  'wesleep-private-company-ca.pdf',
  'wesleep-private-company-es.pdf',
  'wesleep-private-company-en.pdf',
  'wesleep-b2c-ca.pdf',
  'wesleep-b2c-es.pdf',
  'wesleep-b2c-en.pdf',
];

async function uploadPrivatePdfs() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('Set BLOB_READ_WRITE_TOKEN before uploading private PDFs.');
  }

  let uploadedCount = 0;
  for (const fileName of documentNames) {
    const filePath = path.join(documentsDir, fileName);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipped missing file: ${fileName}`);
      continue;
    }

    const result = await put(`documents/${fileName}`, fs.createReadStream(filePath), {
      access: 'private',
      allowOverwrite: true,
      contentType: 'application/pdf',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    console.log(`Uploaded privately: ${result.pathname}`);
    uploadedCount += 1;
  }

  if (uploadedCount === 0) {
    throw new Error(`No PDF files found in ${documentsDir}.`);
  }

  console.log(`Uploaded ${uploadedCount} private PDF(s).`);
}

uploadPrivatePdfs().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});