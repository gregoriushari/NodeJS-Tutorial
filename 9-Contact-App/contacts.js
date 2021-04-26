const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

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

const tulisPertanyaan = (pertanyaan)=>{
    return new Promise((resolve, reject)=>{
        rl.question(pertanyaan, (nama)=>{
            resolve(nama)
        })
    })
}

const simpanContact = (nama, email, noHP) =>{
    const contact ={nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json','utf-8')
    const contact1 = JSON.parse(file);
    contact1.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contact1))
    console.log('thank you sudah masukin data')
    rl.close()
}

module.exports = {tulisPertanyaan, simpanContact}