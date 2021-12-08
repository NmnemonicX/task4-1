
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const fs = require('fs')
const path = require('path')
const  readline = require('readline')
const input = readline.createInterface(process.stdin , process.stdout)

const argv1 = yargs(hideBin(process.argv))
    .option('file', {
        alias: 'f'
    }).argv

const pathFile = path.join(__dirname, argv1.f)

let sourceText = fs.readFileSync(pathFile,'utf-8')
let mainText = '['+sourceText.slice(0,sourceText.length-2)+']'
let objectText = JSON.parse(mainText)

let countGames = objectText.length
let countWin = objectText.filter(item=> item.result==true).length
let countLoose = objectText.filter(item=> item.result==false).length
let percentWins = (countWin/countGames)*100

// console.log('sourceText',sourceText)
// console.log('mainText',mainText)
// console.log('objectText',objectText)

console.log('Всего партий :',countGames)
console.log('Всего выиграно :',countWin)
console.log('Всего проиграно :',countLoose)
console.log('% выигрышных партий :',percentWins)


process.exit(0);
