#!/usr/bin/env node
const projects = [
  "nightcore-generator",
  "asciimation",
  "create-github-repo",
  "swear-clipboard",
  "feces",
  'yeoman-puns'
];
const project = projects[Math.floor(Math.random() * projects.length)];
console.log(`Running ${project}...`);

var child = require("child_process").spawn("npx.cmd", [
  "Jack5079/" + project,
]);

if (child.stderr && child.stdin && child.stdout) {
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}
