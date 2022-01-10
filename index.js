#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJson = require('./package.json');

welcome({
    title: pkgJson.name,
    tagLine: 'Get to know Fox',
    version: pkgJson.version,
    description: pkgJson.description,
    bgColor: `#FADC00`,
    color: '#000000',
    bold: true,
    clear: true,
});

console.log(`Hello I am fox`);