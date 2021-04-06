// const fs = require('fs'); // core modul
// const cetakNama = require('./satu') //import local module
// const moment = require('moment') // third party modul di simpan di node modul


const coba = require('./satu')


console.log(
    coba.cetakNama('Gregorius Hariyanto'),
    coba.PI, 
    coba.mahasiswa.cetakMhs(),
    new coba.Orang())