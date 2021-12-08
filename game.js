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

let   targetNumber = (Math.random()<.5)+1;
console.log('число для угадывания:',targetNumber)



function game() {
    console.log(targetNumber)
    input.question( 'введите 1 или 2 \n',(luckyNumber) =>{

        if(luckyNumber!=1 && luckyNumber!=2){
            console.log(' ввели не подходящие числа, попробуите еще раз\n')
            game()
        }
        else {
            if (luckyNumber == targetNumber) {
                console.log('вы угадали!')
                fs.appendFile(pathFile,'true,\n',err => {if (err) throw new Error(err)
                    console.log('Ok');});

            } else {
                console.log('вы  не угадали!')
                fs.appendFile(pathFile,'false,\n',err => {if (err) throw new Error(err)
                    console.log('Ok');});

            }
            input.close()
        }
    })
}


game()
