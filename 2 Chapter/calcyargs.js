import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv;

let answer;
if (argv.b == '+') {
    answer = argv.a + argv.c;
}
else if (argv.b == '-') {
    answer = argv.a - argv.c;
}
else if (argv.b == '*') {
    answer = argv.a * argv.c;
}
else if (argv.b == '/') {
    answer = argv.a / argv.c;
}

console.log(`The answer is : ` + answer);
//node calcyargs.js --a=1 --b='+' --c=4
