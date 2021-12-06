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
//console.log(argv1.f)

const pathexist = path.join(__dirname, argv1.f)
//console.log('pathexist: ',pathexist)

 if(!fs.existsSync(pathexist))
 {
     fs.writeFileSync(pathexist,'first','utf8')
 }

 const firstData = fs.readFileSync(pathexist,'utf8')
console.log(firstData)

let   targetNumber = (Math.random()<.5)+1;
console.log('число для угадывания:',targetNumber)

const stream = fs.createWriteStream(
    pathexist,
    'utf8'
);
stream.on('error', (err) => console.log(`Err: ${err}`));
stream.on('finish', () => console.log('Done'));
stream.write(firstData);

function game() {
    console.log(targetNumber)
    input.question( 'введите 1 или 2',(luckyNumber) =>{
        console.log('luckyNumber',luckyNumber)
        console.log('targetNumber',targetNumber)
        console.log('luckyNumber!=1',luckyNumber!=1)
        console.log('luckyNumber!=2',luckyNumber!=2)
        if(luckyNumber!=1 && luckyNumber!=2){
            console.log(' ввели не подходящие числа, попробуите еще раз')
            game()
        }
        else {
            if (luckyNumber == targetNumber) {
                console.log('вы угадали!')
                stream.write('Угадал\n');
            } else {
                console.log('вы  не угадали!')
                stream.write('Не Угадал\n');
            }
            stream.end();
            input.close()
        }
    })
}


game()
//
console.log('конец')
