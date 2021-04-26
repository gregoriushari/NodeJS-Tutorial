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

const loadContact = ()=>{
    const file = fs.readFileSync('data/contacts.json','utf-8')
    const contact1 = JSON.parse(file);
    return contact1
}

const simpanContact = (nama, email, noHP) =>{
    const contact ={nama, email, noHP};
    const contact1 = loadContact()
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


const listContacts = ()=>{
    const contact = loadContact()
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '))
    contact.forEach((contact,i)=>{
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`)
    })
}

const detailContact = (nama) =>{
    const contact = loadContact()

    const kontak = contact.find(
        (kontak)=> kontak.nama.toLowerCase() === nama.toLowerCase()
    )

    if(!kontak){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
        return false
    }
    console.log(chalk.cyan.inverse.bold(kontak.nama))
    console.log(kontak.noHP)
    if(kontak.email){
        console.log(kontak.email)
    }
}


const deleteContact = (nama)=>{
    const contact =loadContact()
    const newContact = contact.filter(
        (contact)=> contact.nama.toLowerCase() !== nama.toLowerCase()
    )
    if(contact.length === newContact.length){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact))
    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`))
}

module.exports = {simpanContact, listContacts, detailContact, deleteContact}