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
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);
      await copyFile(sourceFilePath, targetFilePath);
      console.log(`copied ${file} to ${targetDir}`);
    }
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("type file location: ", (targetName) => {
  readline.question("type file destination: ", (destinationName) => {
    const allowedFiles = [".txt", ".jpg"];
    copyFromTo(targetName, destinationName, allowedFiles);
    console.log(
      `Files moved succesfully`);
    readline.close();
  });
});
