const https = require('https');
const fs = require('fs');
setTimeout(() => {
    const file = fs.createWriteStream("table.xlsx");
    const request = https.get("https://www.surpk.ru/files/documents/dd6ace82880d15b90ca2f16689737b7e.xlsx", function (response) {
        response.pipe(file);
    });
    let fileName = file.path;
    module.exports = fileName;
}, 86400000);
