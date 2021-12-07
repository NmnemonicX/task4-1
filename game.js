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

const pathexist = path.join(__dirname, argv1.f)

 if(!fs.existsSync(pathexist))
 {
     fs.writeFileSync(pathexist,'','utf8')
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
stream.on('finish', () => console.log('конец'));
stream.write(firstData);

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
                stream.write('{result:true},\n');
            } else {
                console.log('вы  не угадали!')
                stream.write('{result:false},\n');
            }
            stream.end();
            input.close()
        }
    })
}


game()
