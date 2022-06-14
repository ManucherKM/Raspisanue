const fs = require("fs");
const path = require("path")
const xlsx = require('node-xlsx');

let workSheetsFromFile = xlsx.parse(`${__dirname}/table.xlsx`);

workSheetsFromFile = workSheetsFromFile[1].data;

console.log(workSheetsFromFile);

let mass = [];

let nameY = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const numberOfPairs = 8;

for (let i = 6; i < workSheetsFromFile.length; i++) {


    console.log(i);
    for (let j = 0; j < nameY.length; j++) {
        if (workSheetsFromFile[i][0] === nameY[j]) {

            // let massDay = [nameY[j],  workSheetsFromFile[i][1]]; 

            // for (let k = 0; k < numberOfPairs; k++) {
            //     let massItem = [workSheetsFromFile[i + k][6]]
            //     massDay.push(massItem);
            // }

            // mass.push(massDay)

        }

    }
  
}

console.log(mass);