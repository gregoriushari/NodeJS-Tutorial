const contacts = require('./contacts')

const main = async ()=>{
    const nama = await contacts.tulisPertanyaan ('Masukan nama anda : ')
    const email = await contacts.tulisPertanyaan('Masukan Email anda : ')
    const noHP = await contacts.tulisPertanyaan('Masukan No HP anda : ')

    contacts.simpanContact(nama, email, noHP)
}

main()




