// Pengujian asap sederhana: memastikan berkas utama tersedia.
const fs = require('fs');
const path = require('path');

const wajib = ['src/server.js', 'public/index.html', 'README.md'];
const hilang = wajib.filter(f => !fs.existsSync(path.join(__dirname, '..', f)));

if (hilang.length) {
  console.error('Berkas hilang:', hilang.join(', '));
  process.exit(1);
}
console.log('Smoke test lolos.');
