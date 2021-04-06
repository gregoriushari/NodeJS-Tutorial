// core module file system
const fs = require('fs');

/*
write string to sync file
try {
    fs.writeFileSync('data/test.txt','Hello world sysncronus!');
} catch (error) {
    console.log('no directory')
}

write string to async file

fs.writeFile('data/test.txt', 'Hello world async',(err)=>{
    console.log(err)
})

read file sync

const open = fs.readFileSync('data/test.txt','utf-8');
console.log(open);

//read file async
fs.readFile('data/test.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
*/
// read line
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
rl.question('Masukan nama anda : ', (nama)=>{
    rl.question('Masukan no hp anda : ', (noHP)=>{
        const contact ={nama, noHP};
        const file = fs.readFileSync('data/contact.json','utf-8')
        const contact1 = JSON.parse(file);
        contact1.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contact1))
        console.log('thank you sudah masukin data')
        rl.close()
    })
})


