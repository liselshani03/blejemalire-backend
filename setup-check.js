#!/usr/bin/env node

/**
 * Blejemalire Backend Setup Script
 * This script sets up the development environment
 */

const fs = require("fs");
const path = require("path");

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkFile(filePath, name) {
  if (fs.existsSync(filePath)) {
    log(colors.green, `✅ ${name} found`);
    return true;
  } else {
    log(colors.red, `❌ ${name} not found`);
    return false;
  }
}

console.log("\n");
log(colors.blue, "====================================");
log(colors.blue, "🚀 Blejemalire Backend Setup Check");
log(colors.blue, "====================================\n");

let allGood = true;

// Check package.json
log(colors.yellow, "Checking project files...");
allGood &= checkFile("package.json", "package.json");
allGood &= checkFile(".env.example", ".env.example");

// Check src directory
log(colors.yellow, "\nChecking source files...");
allGood &= checkFile("src/server.js", "src/server.js");
allGood &= checkFile("src/app.js", "src/app.js");
allGood &= checkFile("src/config/database.js", "src/config/database.js");

// Check node_modules
log(colors.yellow, "\nChecking dependencies...");
if (fs.existsSync("node_modules")) {
  log(colors.green, "✅ node_modules found");
} else {
  log(colors.red, "❌ node_modules not found - run 'npm install'");
  allGood = false;
}

// Check .env file
log(colors.yellow, "\nChecking environment configuration...");
if (fs.existsSync(".env")) {
  log(colors.green, "✅ .env file found");
} else {
  log(colors.yellow, "⚠️  .env file not found");
  log(colors.yellow, "   Run: cp .env.example .env");
  allGood = false;
}

// Summary
console.log("\n");
if (allGood) {
  log(colors.green, "✅ Setup check passed!");
  log(colors.green, "You're ready to run: npm run dev");
} else {
  log(colors.red, "⚠️  Some setup steps are incomplete");
  log(colors.yellow, "See the QUICKSTART.md for detailed setup instructions");
}

log(colors.blue, "\n====================================\n");
