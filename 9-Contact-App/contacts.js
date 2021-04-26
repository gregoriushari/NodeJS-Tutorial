const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
//buat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

//buat file contact.json
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]','utf8')
}

const simpanContact = (nama, email, noHP) =>{
    const contact ={nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json','utf-8')
    const contact1 = JSON.parse(file);

    //cek duplikat
    const duplikat = contact1.find((contact =>contact.nama === nama))
    if(duplikat){
        console.log(chalk.red.inverse.bold('contact sudah ada, gunakan nama lain!!!'))
        return false
    }

    //cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('email tidak valid'))
            return false
        }
    }

    //cek no hp
    if(!validator.isMobilePhone(noHP,'id-ID')){
        console.log(chalk.red.inverse.bold('no hp tidak valid'))
        return false
    }

    contact1.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contact1))
    console.log(chalk.green.inverse.bold('thank you sudah masukin data'))
}

module.exports = {simpanContact}