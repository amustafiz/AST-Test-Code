const fs = require('fs');
const { getTree } = require('./TestFile.js');

const content = fs.readFileSync(__dirname + '/index.js', 'utf8');
const result = getTree(content);

console.log(JSON.stringify(result));

