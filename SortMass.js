const xlsx = require('node-xlsx');
let workSheetsFromFile = xlsx.parse(`${__dirname}/table.xlsx`);
workSheetsFromFile = workSheetsFromFile[1].data;
let mass = [];
let nameY = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const numberOfPairs = 8;
for (let i = 6; i < workSheetsFromFile.length; i++) {
    for (let j = 0; j < nameY.length; j++) {
        if (workSheetsFromFile[i][0] === nameY[j]) {
            let massDay = [nameY[j], workSheetsFromFile[i][1]];
            let massLesson = []
            for (let k = 0; k < numberOfPairs; k++) {
                massLesson.push(workSheetsFromFile[i + k][7])
            }
            for (let l = 0; l < massLesson.length; l++) {
                if (!massLesson[l]) {
                    massLesson.splice(l)
                }
            }
            massDay.push(massLesson)
            mass.push(massDay)
        }
    }
}
module.exports = mass;