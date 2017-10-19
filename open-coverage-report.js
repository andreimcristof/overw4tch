#! /usr/bin/env node


const opn = require('opn');
const path = require('path');

let filepath = 'tmp/unit-test-coverage/html/index.html';
let coverageFilePath = path.join(__dirname, filepath);

opn(coverageFilePath);
