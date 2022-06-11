const path = require('path');
const fs = require('fs');

module.exports = async function (directoryPath) {
    return fs.readdirSync(directoryPath)
}