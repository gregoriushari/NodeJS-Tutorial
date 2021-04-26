const yargs = require('yargs')
const contacts = require('./contacts')

yargs.command({
    command:'add',
    describe:'Nambah kontak baru',
    builder:{
        nama:{
            describe:"Nama Lengkap : ",
            demandOption : true,
            type:'string',
        },
        email:{
            describe:'Email : ',
            demandOption:false,
                type:'string'
        },
        noHP:{
            describe:"Nomor Handphone",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    },
}).demandCommand()


//menampilkan list semua daftar nama kontak dan no hp

yargs.command({
    command:'list',
    describe:'show nama and phone number from contact',
    handler(){
        contacts.listContacts()
    },
})

//show detail
yargs.command({
    command:'detail',
    describe:'Menampilkan detail sebuah kontak berdasarkan nama',
    builder:{
        nama:{
            describe:'Nama Lengkap',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    },
})

//hapus kontak berdasarkan nama
yargs.command({
    command:'delete',
    describe:'menghapus kontak berdasarkan nama',
    builder:{
        nama:{
            describe:'Nama Lengkap',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama)
    },
})

yargs.parse()