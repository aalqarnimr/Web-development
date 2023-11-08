const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyFromTo(sourceDir, targetDir, extensions) {
  const files = await readdir(sourceDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (extensions.includes(ext)) {
      const source = path.join(sourceDir, file);
      const target = path.join(targetDir, file);
      await copyFile(source, target);
      console.log(`copied ${file} to ${targetDir}`);
    }
  }
}

const sourceFolder = process.argv[2];
const destinationFolder = process.argv[3];
const files = ['.txt', '.png'];
copyFromTo(sourceFolder, destinationFolder, files);
