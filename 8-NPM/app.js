const validator = require('validator')
const chalk = require('chalk')

// console.log(validator.isEmail('Hariyantosetiadi@gmail.com'));
// console.log(validator.isMobilePhone('08118802607','id-ID'));
// console.log(validator.isNumeric('327592093590')

// console.log(chalk.italic.black.bgBlueBright('Hello world'))

const pesan = chalk`makan babi {blue ayam kucing} babi {bgGreen sapi lada} hitam`

console.log(chalk.black.bgWhite(pesan))