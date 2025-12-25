const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'backend', 'views');
const destDir = path.join(__dirname, '..', 'dist', 'views');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(srcDir, destDir);
console.log('Views copied to dist/views');
