const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const fs = require('fs')
const path = require('path')


const argv1 = yargs(hideBin(process.argv))
    .option('file', {
        alias: 'f'
    }).argv
//console.log(argv1.f)

const pathexist = path.join(__dirname, argv1.f)
//console.log('pathexist: ',pathexist)

 if(!fs.existsSync(pathexist))
 {
     fs.writeFileSync(pathexist,'','utf8')
 }

let   targetNumber = (Math.random()<.5)+1;
console.log('число для угадывания:',targetNumber)

function game() {
    console.log(targetNumber)

}


game()
